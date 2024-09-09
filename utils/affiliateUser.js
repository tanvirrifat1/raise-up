export async function getSingleAffiliateUser(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/${id}`, {
      next: { tags: ["user"] },
    });
    // const r = await res.json();
    if (!res.ok) {
      return new Error(res.status);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
