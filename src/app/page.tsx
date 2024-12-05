"use client";
import LabelCard from "@/components/LabelCard";
import { mockText } from "@/mocks/mock";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-6 flex items-center justify-center w-full bg-desktop bg-no-repeat sm:bg-contain bg-lightPink">
      <section className="sm:w-[500px] w-full bg-white px-8 py-10 flex flex-col rounded-xl shadow-custom gap-8 ">
        <div className="flex gap-6 items-center">
          <div>
            <Image
              src={"/images/icon-star.svg"}
              width={36}
              height={36}
              alt="star"
              className="size-7 sm:size-9"
            />
          </div>
          <div className="text-darkPurple text-4xl sm:text-5xl font-bold">
            FAQs
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {mockText.map((item, index) => (
            <LabelCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
