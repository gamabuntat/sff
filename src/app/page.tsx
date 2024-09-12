'use client';

import { useState } from 'react';

import { getMenuItems, revalidateMenuItems } from '@/app/actions/getMenuItems';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Carousel } from '@/components/ui/carousel';

import Heart from '@/assets/svg/heart.svg';

export default function Home() {
  const [menuItems, setMenuItems] = useState<unknown>();

  return (
    <main className="gap-y-4 my-4 content-grid">
      <Button
        variant="secondary"
        size="lg"
        className="mb-2 shadowed breakout"
        onClick={() => {
          console.log('revalidate...');
          revalidateMenuItems().then(() => console.log('revalidate finished'));
        }}
      >
        RESET CACHE
      </Button>
      <div className="bg-gray-50 flex gap-4 flex-wrap justify-between witout-gap">
        <Button
          className="gap-1 shadowed flex-1"
          onClick={async () => {
            const fetchedMenuItems = await getMenuItems();
            setMenuItems(fetchedMenuItems);
          }}
        >
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
      <div>{JSON.stringify(menuItems)}</div>

      <h2 className="text-2xl uppercase">snap normal</h2>
      <Carousel className="full-bleed snap-normal">
        <div className="bg-[tomato]">
          Ipsum facere voluptatum at in adipisci nihil? Optio sint voluptates
        </div>
      </Carousel>

      <h2 className="text-2xl uppercase">snap always</h2>
      <Carousel className="full-bleed snap-always">
        <div className="bg-[tomato]">
          Ipsum facere voluptatum at in adipisci nihil? Optio sint voluptates
        </div>
      </Carousel>

      <Card asChild className="full-bleed content-grid">
        <section>
          <h2 className="text-xl">
            Elit porro molestias corporis magnam atque porro! Enim quibusdam
            fuga aspernatur illum repellendus
          </h2>
          <p className="breakout">
            Consectetur eos quas illo natus officiis porro. Dolorem ullam
            praesentium laborum voluptas exercitationem consequatur sequi
            suscipit cum! In similique provident quae incidunt sunt, voluptate
            Veniam voluptatibus ab molestiae aliquam voluptatibus! Nihil modi
          </p>
        </section>
      </Card>

      <article>
        <h2 className="text-2xl font-bold">
          Sit laudantium consectetur voluptatum fugit facilis quaerat, facilis
          id. Quas?
        </h2>
      </article>

      <input type="date" />
    </main>
  );
}
