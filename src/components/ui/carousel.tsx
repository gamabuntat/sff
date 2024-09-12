import { cn } from '@/lib/utils';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type CarouselProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function Carousel({ children, className, ...props }: CarouselProps) {
  return (
    <div
      {...props}
      className={cn(
        'flex gap-2 overflow-auto scroll-smooth snap-x snap-mandatory',
        className
      )}
    >
      {Array.from({ length: 13 }, (_, idx) => (
        <div
          key={idx}
          className="min-w-[70%] flex-1 snap-center text-center odd:bg-gradient-gg even:bg-gradient-g p-10 rounded-xl text-xl first:ml-[70%] last:relative last:after:content-[''] last:after:absolute last:after:left-full last:after:top-0 last:after:block last:after:w-full last:after:h-full last:after:bg-red-100"
        >
          {idx + 1}
        </div>
      ))}
    </div>
  );
}

export { Carousel };
