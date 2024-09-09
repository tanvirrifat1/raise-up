export async function getCodeSetting() {
  try {
    // if(typeof window === 'undefined'){
    //   return []
    // }
    const res = await fetch(`/api/backend/codes/district`, {
      cache: "no-store",
      // next: { tags: ["code"] },
    });

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
