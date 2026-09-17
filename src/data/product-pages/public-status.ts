import type { ReviewStatus } from './types';

export function publicProductStatus(review: ReviewStatus): string {
  if (review.state === 'ordered') return 'Shortlisted';
  if (review.state === 'testing') return 'Testing';
  if (review.recommendation === 'recommended') return 'Recommended';
  if (review.recommendation === 'not-recommended') return 'Not recommended';
  return 'Field review published';
}
