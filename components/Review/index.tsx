"use client";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { MultiSelect } from "react-multi-select-component";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Option = {
  value: string | number;
  label: string;
};

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [reviewText, setReviewText] = useState("");
  const ratings = new Array(5).fill("/imgs/rating.png");
  const toast = useToast();

  const LIST = [
    "Schools",
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

  const options = LIST.map((item) => ({ label: item, value: item }));

  const initialRef = useRef(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Save the review to local storage
    if (typeof window !== "undefined") {
      const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
      reviews.push({ selectedOptions, reviewText });
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }

    // Show a toast message
    toast({
      title: "Review submitted.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });

    // Clear the form
    setSelectedOptions([]);
    setReviewText("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      isCentered
      size={"xl"}
    >
      <ModalOverlay backgroundColor={"#1D3045"} opacity={0.98} />
      <ModalContent>
        <ModalBody>
          <Box>
            <Box ref={initialRef} tabIndex={-1} aria-hidden="true" />
            <Text className="text-[18px] font-medium mb-4 text-center">
              {" "}
              Review Location
            </Text>

            <form onSubmit={handleSubmit}>
              <Text className="font-medium text-[20px] mb-4 ">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </Text>

              <>
                <MultiSelect
                  options={options}
                  value={selectedOptions}
                  onChange={setSelectedOptions}
                  labelledBy="Select Amenities"
                  ArrowRenderer={() => (
                    <Box boxSize={4}>
                      <Image
                        src={"/imgs/down.png"}
                        width={16}
                        height={16}
                        alt="down"
                      />
                    </Box>
                  )}
                  overrideStrings={{
                    selectSomeItems: "Select Amenities",
                    allItemsAreSelected: "All Amenities are selected",
                    selectAll: "Select All",
                    search: "Search",
                  }}
                  className="w-full !bg-[#F3F7FE] border-none mb-1"
                />
              </>
              <Box>
                <Text>Rate location</Text>
                <Flex className="mt-[14px] gap-1">
                  {ratings.map((rate, i) => (
                    <Image
                      src={rate}
                      width={24}
                      height={24}
                      alt="ratings"
                      key={rate + i}
                    />
                  ))}
                </Flex>
              </Box>

              <Box className="mt-6">
                <Text className="text-sm">Write Review</Text>
                <Textarea
                  placeholder="Placeholder"
                  className="mt-[14px]"
                  value={reviewText}
                  onChange={(event) => setReviewText(event.target.value)}
                />
              </Box>

              <Checkbox className="mt-4 mb-[21.5px]">
                Post as anonymous
              </Checkbox>
              <Flex className="w-full gap-6  uppercase mb-6">
                <Button
                  type="submit"
                  isDisabled={selectedOptions.length === 0 || reviewText === ""}
                  className="w-full h-[50px] !text-white !bg-bg-blue-1"
                >
                  Submit
                </Button>
                <Button
                  onClick={onClose}
                  className="w-full h-[50px] !bg-transparent !text-bg-blue-1 !border-[0.5px] !border-[#5378F6]"
                >
                  Cancel
                </Button>
              </Flex>
            </form>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ReviewModal;
