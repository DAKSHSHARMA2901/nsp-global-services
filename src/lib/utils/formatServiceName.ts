/**
 * Utility functions for formatting service names across the application
 */

/**
 * Formats a service name by removing suffixes and capitalizing words
 * @param service - The raw service string (e.g., "local-seo", "google-ads-ppc-services")
 * @param suffix - Optional suffix to remove (e.g., "-seo", "-ppc-services")
 * @returns Formatted service name (e.g., "Local SEO", "Google Ads")
 */
export function formatServiceName(service: string, suffix?: string): string {
  let processedService = service;
  
  // Remove suffix if provided
  if (suffix && processedService.endsWith(suffix)) {
    processedService = processedService.replace(suffix, '');
  }
  
  // Remove common suffixes
  processedService = processedService
    .replace('-ppc-services', '')
    .replace('-seo', '');
  
  // Split on hyphens, capitalize each word, and join with spaces
  return processedService
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Formats service name specifically for SEO services
 */
export function formatSEOServiceName(service: string): string {
  return formatServiceName(service, '-seo');
}

/**
 * Formats service name specifically for PPC services
 */
export function formatPPCServiceName(service: string): string {
  return formatServiceName(service, '-ppc-services');
}