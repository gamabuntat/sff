import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';

const cardVariants = cva(undefined, {
  variants: {
    variant: {
      default: 'bg-secondary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type CardProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
  VariantProps<typeof cardVariants> & {
    asChild?: boolean;
  };

function Card({ asChild, className, variant, ...props }: CardProps) {
  const Comp = asChild ? Slot : 'article';

  return (
    <Comp {...props} className={cn(cardVariants({ variant, className }))} />
  );
}

export { Card };
