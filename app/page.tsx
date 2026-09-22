"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const Home = () => {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <section className="relative w-full h-screen overflow-hidden">
        <video
          src="/video/homeSection1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </section>

      <section className="w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="w-full overflow-hidden"
        >
          {/* 부모 요소 overflow-hidden 및 이미지 확대(scale)로 1px 테두리 숨김 */}
          <div className="w-full overflow-hidden">
            <Image
              src="/images/homeSection2.png"
              alt="Home Section 2"
              width={0}
              height={0}
              sizes="100vw"
              priority={false}
              className="w-full h-auto block scale-[1.005] origin-center"
            />
          </div>
        </motion.div>
      </section>
      <section className="w-full pb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="w-full overflow-hidden"
        >
          <Image
            src="/images/homeSection3.jpg"
            alt="Home Section 3"
            width={0}
            height={0}
            sizes="100vw"
            priority={false}
            className="w-full h-auto block"
          />
        </motion.div>
      </section>
    </main>
  );
};

export default Home;