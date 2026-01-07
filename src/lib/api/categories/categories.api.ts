export async function getCategories() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`, {
      method: "GET",
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const payload: APIResponse<PaginatedResponse<{ categories: Category[] }>> =
      await response.json();
      console.log("cate",payload)
    if ("error" in payload) {
      throw new Error(payload.error);
    }
    return payload;
  } catch (error) {
    console.error("Error fetching categories: ", error);
    return null;
  }
}