import { Button } from "@/components/ui/button";

export default function AuthTitle() {
  return (
    <div className="flex flex-col gap-6 text-center md:text-left max-w-md md:max-w-xl">
      
      <h1 className="text-white text-3xl md:text-5xl font-bold">
        WELCOME !
      </h1>

      <p className="text-white font-normal text-sm md:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        Eius sint tempore modi recusandae dolorem tempora
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
      </p>

      <div className="flex justify-center md:justify-start">
        <Button
          className="w-[140px] md:w-[150px] rounded-full py-2.5 md:py-3 bg-linear-to-r from-orange-400 to-pink-500 text-white font-semibold hover:opacity-90"
        >
          Learn more..
        </Button>
      </div>

    </div>
  );
}
