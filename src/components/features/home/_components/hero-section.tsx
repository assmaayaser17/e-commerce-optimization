import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div
      className="
          w-full max-w-5xl 
          bg-white/20 backdrop-blur-xl 
          rounded-3xl shadow-2xl 
          p-8 md:p-12 
          flex flex-col md:flex-row 
          items-center gap-8 mt-20
        "
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/head-phone.png"
          alt="phone"
          className="w-64 md:w-64 object-cover drop-shadow-xl rounded-full"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Shop the Latest Trends with Exclusive Offers
        </h1>

        <p className="text-white/80 text-lg md:text-xl">
          Discover premium products, fast delivery, and a seamless shopping
          experience—all in one place. Your next favorite item is just a click
          away.
        </p>

        <Button
          size="lg"
          className="
      bg-linear-to-r from-pink-500 to-orange-400
      hover:opacity-90 text-white 
      font-semibold rounded-full px-8 py-6 mt-2
    "
        >
          Start Shopping
        </Button>
      </div>
    </div>
  );
}
