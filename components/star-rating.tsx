'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

interface StarRatingProps {
  name?: string
}

export function StarRating({ name = 'rating' }: StarRatingProps) {
  const [hovered, setHovered] = useState(0)
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex gap-2 pt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => setSelected(star)}
          className="p-0.5 transition-transform hover:scale-125 focus:outline-none focus:scale-125"
        >
          <Star
            className={`w-8 h-8 transition-colors duration-150 ${
              star <= (hovered || selected)
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-muted-foreground fill-muted/50'
            }`}
          />
        </button>
      ))}
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selected} readOnly />
    </div>
  )
}
