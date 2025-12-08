"use server";

export async function loginAction(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    // Login Function
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const payload: APIResponse<LoginResponse> = await response.json();
    console.log("payload", payload);

    // Faild response
    if (!response.ok || "error" in payload) {
      return {
        success: false,
        error: "error" in payload ? payload.error : "Login failed",
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
