"use server";

import { revalidateTag } from "next/cache";

export const customRevidateTag = (tag) => {
  revalidateTag(tag);
};
