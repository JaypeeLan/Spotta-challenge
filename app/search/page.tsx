"use client";
import { CustomInput } from "@/components/Input";
import ReviewModal from "@/components/Review";
import { testReviews } from "@/testData";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Reviews {
  reviewText: string;
  selectedOptions: any[];
}

interface REVIEWCARD {
  reviewText: string;
  authorName?: string;
  rating?: string | number;
}

const AllReviews = ({
  reviewText,
  authorName = "James T.",
  rating = "4.0",
}: REVIEWCARD) => {
  return (
    <div className="border-b border-b-[#D9D9D9] pb-4 mb-4 h-max ">
      <div className="flex items-center !text-sm mb-2">
        <div className="flex items-center gap-2">
          <Image
            src={"/imgs/avatar-2.png"}
            alt="avatar"
            width={24}
            height={24}
          />
          <p>{authorName} </p>
          <span className="text-black text-opacity-60">5 months ago</span>
        </div>
        <div className="ml-auto">
          <Image
            src={"/imgs/rating.png"}
            alt="avatar"
            width={12}
            height={12}
            className="inline mr-1"
          />
          <span>{rating}</span>
        </div>
      </div>
      <p>{reviewText}</p>

      <div className="flex items-center mt-2">
        <div>
          <Image
            src={"/imgs/thumbs_up.png"}
            alt="like"
            width={24}
            height={24}
            className="inline"
          />
          <span>1224</span>
        </div>
        <div className="ml-[17px]">
          <Image
            src={"/imgs/downlike.png"}
            alt="dislike"
            width={24}
            height={24}
            className="inline"
          />
          <span>4</span>
        </div>
        <div className="ml-8">
          <Image
            src={"/imgs/comment.png"}
            alt="comments"
            width={24}
            height={24}
            className="inline"
          />
          <span>24</span>
        </div>
      </div>
    </div>
  );
};

const Search = () => {
  const [reviews, setReviews] = useState<Reviews[]>([]);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const LIST = [
    "schools",
    "Hospitals",
    "Resort Park",
    "Shopping Malls",
    "Airport",
    "Train Station",
    "Nightlife",
    "Public Wifi",
    "Parking Lot",
    "Security",
    "Public Transport",
    "Bus Station",
    "Quiet",
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");

      console.log("reviews", reviews);
      setReviews(reviews);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedReviews = JSON.parse(localStorage.getItem("reviews") || "[]");
      setReviews(storedReviews);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <div>
      <header className="bg-bg-blue-3">
        <div className="w-full  xl:max-w-[1240px]  xl:mx-auto">
          <nav className="flex items-center  py-4 px-3 xl:px-0">
            <Link href={"/"}>
              <Image src={"/imgs/logo.png"} width={92} height={29} alt="logo" />
            </Link>

            <div className="ml-6 md::ml-[42px] w-full max-w-[702px]">
              <CustomInput
                className=" !bg-white  "
                placeholder="Bonny and Clyde Street, Ajao Estate, Lagos"
                leftIcon={
                  <Image
                    src={"/imgs/search.png"}
                    alt="search"
                    width={16}
                    height={16}
                  />
                }
                rightIcon={
                  <Image
                    src={"/imgs/close.png"}
                    alt="search"
                    width={16}
                    height={16}
                    className="-mr-8"
                  />
                }
              />
            </div>

            <div className="hidden mob:block ml-auto">
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

          {/* ------- */}
          <div className="mt-4 flex justify-between flex-wrap gap-2 px-3 xl:px-0">
            <div>
              <p className="font-medium text-[24px]">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </p>
              <p>
                <span className="font-bold">“450” </span> Reviews (People are
                raving about the selected location)
              </p>
            </div>

            <div className="flex  gap-4 items-center">
              <Button
                className="!bg-bg-blue-1 uppercase !text-white !h-35px mob:!h-[50px] !w-120px mob:!w-[210px] !text-sm mob:!text-[16px]"
                onClick={onOpen}
              >
                leave a review
              </Button>

              <Image
                src={"/imgs/bookmark.png"}
                width={56}
                height={50}
                alt="bookmark"
              />

              <Image
                src={"/imgs/share.png"}
                width={56}
                height={50}
                alt="share"
              />
            </div>
          </div>

          {/* ----- */}

          <div className="mt-4 flex gap-[8px] pb-4 overflow-x-auto whitespace-nowrap">
            {LIST.map((list, i) => (
              <button
                className="!text-sm border-1px border-[#1E1E1E] bg-white py-1 px-2 rounded-md capitalize"
                key={list + i}
              >
                {list}
              </button>
            ))}

            <div className="bg-white w-6 h-6 rounded-full grid place-items-center">
              <img
                src={"/imgs/chevron-right.png"}
                width={"100%"}
                height={"100%"}
                alt="forward"
                className="!w-[6px] !h-[12px]"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="bg-[#fbfcfd pt-8">
        <div className="max-w-[1240px] mx-[5%] xl:mx-auto flex gap-[28px]">
          <Flex flexDirection={"column"} className="w-full">
            {testReviews.map((reviews, i) => (
              <AllReviews reviewText={reviews} key={i} />
            ))}
          </Flex>
          {reviews.length > 0 && (
            <Flex flexDirection={"column"} className="w-full">
              {[...reviews].reverse().map((review, i) => (
                <AllReviews reviewText={review?.reviewText} key={i} />
              ))}
            </Flex>
          )}
          {/* ------- */}
          <div className="hidden mob:grid lg:grid-cols-1 xl:grid-cols-2 gap-4  lg:w-auto  xl:w-full">
            <div className="rounded-lg overflow-hidden w-[235px] h-[224px]">
              <img
                src={"/imgs/image-1.png"}
                alt="place"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="rounded-lg overflow-hidden w-[235px] h-[224px]">
              <img
                src={"/imgs/image-2.png"}
                alt="place"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="rounded-lg overflow-hidden w-[235px] h-[224px]">
              <img
                src={"/imgs/image-3.png"}
                alt="place"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="rounded-lg overflow-hidden w-[235px] h-[224px]">
              <img
                src={"/imgs/image-4.png"}
                alt="place"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
        {/* ------- */}
      </div>
      <ReviewModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Search;
