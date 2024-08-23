'use client'

import { useState } from 'react'

import { getMenuItems } from '@/app/actions/getMenuItems'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import Heart from '@/assets/svg/heart.svg'

export default function Home() {
  const [menuItems, setMenuItems] = useState<unknown>()

  const onClick = () => getMenuItems().then(setMenuItems)

  return (
    <>
      <div className="bg-gray-50 flex gap-4 flex-wrap justify-between">
        <Button className="gap-1 shadowed flex-1" onClick={onClick}>
          <Heart className="w-em stroke-current fill-danger" />
          <span>Love button</span>
        </Button>
        <Button disabled>hihe</Button>
        <Button className="gap-1 flex-1">
          <span>fuck</span>
          <Heart className="w-em stroke-current fill-danger" />
        </Button>
        <Button asChild>
          <a href="">Contact</a>
        </Button>
      </div>

      <Card>
        Consectetur eos quas illo natus officiis porro. Dolorem ullam
        praesentium laborum voluptas exercitationem consequatur sequi suscipit
        cum! In similique provident quae incidunt sunt, voluptate Veniam
        voluptatibus ab molestiae aliquam voluptatibus! Nihil modi
      </Card>

      {JSON.stringify(menuItems)}

      <article>
        <h2 className="text-2xl font-bold">
          Sit laudantium consectetur voluptatum fugit facilis quaerat, facilis
          id. Quas?
        </h2>
      </article>
    </>
  )
}
