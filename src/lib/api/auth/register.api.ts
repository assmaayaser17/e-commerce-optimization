"use server";

export async function registerAction(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const rePassword = formData.get("rePassword");
    const phone = formData.get("phone");

    // Login Function
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password,rePassword, phone }),
      }
    );

    const payload: APIResponse<RegisterResponse> = await response.json();
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
