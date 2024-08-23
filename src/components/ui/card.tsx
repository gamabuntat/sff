import { Slot } from '@radix-ui/react-slot'

import type { DetailedHTMLProps, HTMLAttributes } from 'react'

const cardVariants = {}

type CardProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  asChild?: boolean
}

function Card({ asChild, ...props }: CardProps) {
  const Comp = asChild ? Slot : 'article'

  return <Comp {...props} className="bg-secondary" />
}

export { Card }
export type { CardProps }
