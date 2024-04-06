"use client";
import { CustomInput } from "@/components/Input";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-[239px] h-[233px]">
    <img
      src={src}
      width={"100%"}
      height={"100%"}
      alt={alt}
      className="rounded-[16px] overflow-hidden"
    />
  </div>
);

export default function Home() {
  const router = useRouter();
  const images = new Array(8).fill("/imgs/network-card.png");

  return (
    <main className="max-w-[1240px] mx-[5%]  xl:mx-auto ">
      <header className="bg-white pt-6 relative z-50">
        <nav className="flex items-center justify-between py-[7px]">
          <Link href={"/"}>
            <Image src={"/imgs/logo.png"} width={92} height={29} alt="logo" />
          </Link>

          <div>
            <span className="font-medium">Welcome!</span>
            <Image
              src={"/imgs/avatar.png"}
              width={36}
              height={36}
              alt="logo"
              className="inline ml-[13px]"
            />
          </div>
        </nav>
      </header>

      <div className="flex items-center justify-center gap-[50px] lg:gap-[100px] xl:gap-[177px] custom-h">
        <div>
          <h1 className="font-bold text-[50px] leading-normal  md:text-[40px] xl:text-[64px] xl:leading-[77.45px] mb-[40px]">
            Find a place you will love to live!
          </h1>

          <p className="xl:text-[24px] xl:leading-[29.05px] mb-[40px]">
            See through the lenses of people who have lived or visited the
            neighbourhood you might have in mind.
          </p>

          <CustomInput
            className="!bg-bg-blue-2 !h-[50px] !border-b-blue max-w-[557px] "
            placeholder="Enter Address"
            leftIcon={
              <Image
                src={"/imgs/normal-search.png"}
                alt="search"
                width={16}
                height={16}
              />
            }
          />

          <Button
            className="!bg-[#3366ff] uppercase !text-white !h-[50px] !w-[140px] mt-[20px] !rounded-none"
            onClick={() => router.push("/search")}
          >
            search
          </Button>
        </div>

        <div className="custom-h hidden md:block">
          <div className="relative bottom-[9rem] flex gap-4 bg-[#f1f2f3]">
            <div className="mask-imgs"></div>
            <div className="flex flex-col gap-4">
              {images.slice(0, 4).map((src, index) => (
                <ImageCard key={index} src={src} alt="logo" />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {images.slice(4).map((src, index) => (
                <ImageCard key={index + 4} src={src} alt="logo" />
              ))}
            </div>
            <div className="mask-img"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
