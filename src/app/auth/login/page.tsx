import AuthContainer from "@/components/features/auth/_components/layout/auth-container";
import LoginForm from "@/components/features/auth/_components/login/login";
import AuthTitle from "@/components/features/auth/_components/title/auth-title";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#320241] p-4">
      {/* Outer card */}
      <div
        className="
          bg-[#4a0260] p-8 rounded-2xl shadow-2xl 
          w-full max-w-3xl 
          flex flex-col md:flex-row 
          items-center md:items-center
          gap-8
        "
      >
        {/* Auth title */}
        <div className="flex-1 flex justify-center mb-4 md:mb-0">
          <AuthTitle />
        </div>

        {/* Login form */}
        <div className="flex-1 flex justify-center w-full">
          <AuthContainer title="Sign in">
            <LoginForm />
          </AuthContainer>
        </div>
      </div>
    </div>
  );
}
