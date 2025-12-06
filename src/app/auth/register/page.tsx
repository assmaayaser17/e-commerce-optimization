import RegisterForm from "@/components/features/auth/_components/register/register";
import AuthTitle from "@/components/features/auth/_components/title/auth-title";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#320241] p-4">
     <div
  className="
    w-full 
    max-w-[1050px] 
    p-6 md:p-10 
    flex flex-col md:flex-row 
    items-start 
    justify-center 
    gap-8 md:gap-12 
    bg-[#390647] 
    rounded-2xl
  "
>
  <div className="flex-1  max-w-[400px]">
    <AuthTitle />
  </div>

  <div className="flex-1 max-w-[500px]">
    <RegisterForm />
  </div>
</div>

    </div>
  );
}
