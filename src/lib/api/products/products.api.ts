import type { ProductsResponse } from "@/lib/types/products";

export async function getProducts() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const payload: APIResponse<ProductsResponse> = await response.json();
    console.log("payload", payload);

    // Faild response
    if (!response.ok || "error" in payload) {
      return {
        success: false,
        error: "error" in payload ? payload.error : "Fetch products failed",
      };
    }

    // Success response
    return {
      payload,
    };
  } catch (err: any) {
    return {
      success: false,
      error: err.message || "Something went wrong",
    };
  }
}
