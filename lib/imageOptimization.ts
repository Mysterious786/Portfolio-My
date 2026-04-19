/**
 * Image Optimization Utility
 * 
 * Provides functions to optimize and auto-size images
 * based on container requirements
 */

interface ImageDimensions {
  width: number;
  height: number;
}

/**
 * Generates an optimized image URL with resizing parameters
 * Works with Unsplash, Cloudinary, or similar image services
 * 
 * @param imageUrl - Original image URL
 * @param width - Desired width in pixels
 * @param height - Desired height in pixels
 * @returns Optimized image URL
 */
export function getOptimizedImageUrl(
  imageUrl: string,
  width: number = 400,
  height: number = 400
): string {
  // Handle Unsplash images
  if (imageUrl.includes('unsplash.com')) {
    const params = new URLSearchParams();
    params.set('w', width.toString());
    params.set('h', height.toString());
    params.set('fit', 'crop');
    params.set('q', '80');
    return `${imageUrl}${imageUrl.includes('?') ? '&' : '?'}${params.toString()}`;
  }

  // Handle Cloudinary images
  if (imageUrl.includes('cloudinary.com')) {
    const [baseUrl, ...rest] = imageUrl.split('/upload/');
    if (rest.length > 0) {
      return `${baseUrl}/upload/w_${width},h_${height},c_fill,q_auto/${rest.join('/upload/')}`;
    }
  }

  // For other URLs, return as-is
  // You can add more image service providers here
  return imageUrl;
}

/**
 * Calculates responsive dimensions based on breakpoints
 * 
 * @param baseWidth - Base width at desktop
 * @param baseHeight - Base height at desktop
 * @returns Object with dimensions for different breakpoints
 */
export function getResponsiveDimensions(
  baseWidth: number,
  baseHeight: number
) {
  return {
    mobile: {
      width: baseWidth * 0.75,
      height: baseHeight * 0.75,
    },
    tablet: {
      width: baseWidth * 0.9,
      height: baseHeight * 0.9,
    },
    desktop: {
      width: baseWidth,
      height: baseHeight,
    },
  };
}

/**
 * Generates a srcSet string for responsive images
 * 
 * @param baseUrl - Base image URL
 * @param width - Base width
 * @param height - Base height
 * @returns srcSet string for img element
 */
export function generateSrcSet(
  baseUrl: string,
  width: number,
  height: number
): string {
  const sizes = [
    { scale: 1, descriptor: '1x' },
    { scale: 2, descriptor: '2x' },
  ];

  return sizes
    .map(({ scale, descriptor }) => {
      const optimizedUrl = getOptimizedImageUrl(
        baseUrl,
        width * scale,
        height * scale
      );
      return `${optimizedUrl} ${descriptor}`;
    })
    .join(', ');
}

/**
 * Preloads images for better performance
 * 
 * @param urls - Array of image URLs to preload
 */
export function preloadImages(urls: string[]): void {
  if (typeof window === 'undefined') return;

  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

/**
 * Generates picture element srcSet for different formats
 * 
 * @param baseUrl - Base image URL
 * @param width - Image width
 * @param height - Image height
 * @returns srcSet with WebP and fallback
 */
export function generatePictureSrcSet(
  baseUrl: string,
  width: number,
  height: number
): {
  webp: string;
  fallback: string;
} {
  const webpUrl = baseUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return {
    webp: generateSrcSet(webpUrl, width, height),
    fallback: generateSrcSet(baseUrl, width, height),
  };
}

/**
 * Auto-crop image to specific aspect ratio
 * 
 * @param baseUrl - Image URL
 * @param aspectRatio - Aspect ratio (e.g., "16:9", "1:1")
 * @returns Cropped image URL
 */
export function cropImageToAspectRatio(
  baseUrl: string,
  aspectRatio: string
): string {
  const [widthRatio, heightRatio] = aspectRatio.split(':').map(Number);
  const height = 400;
  const width = (height * widthRatio) / heightRatio;

  return getOptimizedImageUrl(baseUrl, Math.round(width), height);
}

/**
 * Returns Next.js Image component optimized props
 * 
 * @param url - Image URL
 * @param width - Display width
 * @param height - Display height
 * @returns Props object for Image component
 */
export function getImageProps(url: string, width: number, height: number) {
  const optimizedUrl = getOptimizedImageUrl(url, width * 2, height * 2);

  return {
    src: optimizedUrl,
    width,
    height,
    alt: 'Portfolio image',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
  };
}
