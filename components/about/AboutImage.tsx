"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";

export function AboutImage() {
  return (
    <ScrollAnimation direction="left" delay={0.2}>
      <div className="relative w-full aspect-square rounded-lg overflow-hidden">
        <Image
          src="/images/user/me.webp"
          alt="Mark"
          fill
          className="object-cover"
          priority
        />
      </div>
    </ScrollAnimation>
  );
}

