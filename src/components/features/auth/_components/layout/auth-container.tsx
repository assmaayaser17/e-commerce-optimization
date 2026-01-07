"use client";

interface AuthContainerProps {
  title?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
}

export default function AuthContainer({
  title,
  header,
  children,
}: AuthContainerProps) {
  return (
    <div
      className="
        bg-white/20 backdrop-blur-md 
        p-6 sm:p-8 md:p-10 
        rounded-2xl shadow-2xl 
        w-full max-w-[380px] 
        mx-auto
      "
    >
      {/* Auth title */}
      {header && <div className="mb-4">{header}</div>}

      {/* Title */}
      {title && (
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}
