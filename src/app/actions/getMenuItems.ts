'use server';

import { unstable_cache, revalidateTag } from 'next/cache';

import { getMenuItems as getMenuItemsCall } from '@/api/getMenuItems';

const menuItemsTag = 'fp__menu-items';

export const getMenuItems = unstable_cache(getMenuItemsCall, [], {
  tags: [menuItemsTag],
  revalidate: false,
});

export const revalidateMenuItems = async () => revalidateTag(menuItemsTag);
