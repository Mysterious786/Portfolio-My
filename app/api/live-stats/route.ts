import { NextResponse } from 'next/server'
import social from '@/public/data/social.json'

type GitHubStats = {
  publicRepos: number
  followers: number
}

function getPlatformUrl(platform: string) {
  return social.socialLinks.find((item) => item.platform === platform)?.url ?? ''
}

function getGitHubUsername() {
  const githubUrl = getPlatformUrl('github')
  const match = githubUrl.match(/github\.com\/([^/?#]+)/i)
  return match?.[1] ?? null
}

export async function GET() {
  const result: {
    github: GitHubStats | null
    linkedin: { note: string } | null
  } = {
    github: null,
    linkedin: null,
  }

  const githubUsername = getGitHubUsername()
  if (githubUsername && githubUsername !== 'yourprofile') {
    try {
      const response = await fetch(`https://api.github.com/users/${githubUsername}`, {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'portfolio-live-stats',
        },
        next: { revalidate: 900 },
      })

      if (response.ok) {
        const data = await response.json()
        result.github = {
          publicRepos: Number(data.public_repos ?? 0),
          followers: Number(data.followers ?? 0),
        }
      }
    } catch {
      // Keep fallback stats from static JSON when network/API fails.
    }
  }

  // LinkedIn does not expose public profile connection counts without authenticated APIs.
  result.linkedin = {
    note: 'Live follower count unavailable via public API',
  }

  return NextResponse.json(result)
}
