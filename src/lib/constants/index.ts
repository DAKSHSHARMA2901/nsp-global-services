/**
 * Shared constants used across the application
 */

/**
 * Service alphabet used for organizing services by first letter
 * Excludes I, Q, Z as these letters have minimal or no service representation
 */
export const SERVICE_ALPHABET = 'ABCDEFGHJKLMNOPRSTUVWY'.split('');

/**
 * Full alphabet for complete listings
 */
export const FULL_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/**
 * Common industry categories
 */
export const INDUSTRY_CATEGORIES = [
  'Automotive',
  'Education', 
  'Fashion',
  'Finance',
  'Food & Beverage',
  'Healthcare',
  'Industrial',
  'Insurance',
  'Legal',
  'Real Estate',
  'Technology',
  'Tourism & Hospitality'
] as const;