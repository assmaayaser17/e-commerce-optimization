import Login from "@/components/features/auth/_components/login/login";
import AuthTitle from "@/components/features/auth/_components/title/auth-title";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#320241] p-4">
      <div
        className="
          w-full 
          max-w-[1050px] 
          p-6 md:p-10 
          flex flex-col md:flex-row 
          items-center md:items-start 
          justify-center 
          gap-8 md:gap-12 
          bg-[#390647] 
          rounded-2xl
        "
      >
        {/* Auth title */}
        <AuthTitle />

        {/* Login */}
        <Login />
      </div>
    </div>
  );
}
