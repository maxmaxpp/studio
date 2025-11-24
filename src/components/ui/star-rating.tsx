'use client';

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  className?: string;
  size?: number;
}

export function StarRating({ rating, onRatingChange, className, size = 24 }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            type="button"
            key={starValue}
            onClick={() => onRatingChange?.(starValue)}
            onMouseEnter={() => onRatingChange && setHoverRating(starValue)}
            onMouseLeave={() => onRatingChange && setHoverRating(0)}
            className={cn(
              "cursor-pointer transition-colors",
              !onRatingChange && "cursor-default"
            )}
            aria-label={`Rate ${starValue} star${starValue > 1 ? 's' : ''}`}
          >
            <Star
              className={cn(
                "transition-colors",
                starValue <= (hoverRating || rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-muted-foreground/50"
              )}
              style={{ width: size, height: size }}
            />
          </button>
        );
      })}
    </div>
  );
}
