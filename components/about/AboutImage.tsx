"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/shared/ScrollAnimation";

export function AboutImage() {
  return (
    <ScrollAnimation direction="left" delay={0.2}>
      <div className="relative w-full aspect-square rounded-lg overflow-hidden">
        <Image
          src="/images/user/me.webp"
          alt="Mark O'Dowd, Full-stack Developer and AWS Certified professional"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
      </div>
    </ScrollAnimation>
  );
}

