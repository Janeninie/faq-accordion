"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
}

export default function LabelCard(prop: Props) {
  const [isDescOpen, setIsDescOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div
          className="font-semibold sm:w-full w-5/6 hover:text-purple-600 hover:cursor-pointer"
          onClick={() => {
            setIsDescOpen(!isDescOpen);
          }}
        >
          {prop.title}
        </div>
        <button
          onClick={() => {
            setIsDescOpen(!isDescOpen);
          }}
        >
          {isDescOpen ? (
            <Image
              src={"/images/icon-minus.svg"}
              width={32}
              height={32}
              alt="minus"
            />
          ) : (
            <Image
              src={"/images/icon-plus.svg"}
              width={32}
              height={32}
              alt="plus"
            />
          )}
        </button>
      </div>
      <div
        className={`text-sm text-grayishPurple ${
          isDescOpen ? "flex" : "hidden"
        }`}
      >
        {prop.description}
      </div>
      <hr className="border-lightPink" />
    </div>
  );
}
