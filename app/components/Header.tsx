import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 p-6">
      <div className="relative w-[12vw] max-w-[90px] min-w-[60px] aspect-[6036/4164]">
        <Image
          src="/images/logo.png"
          alt="Logo"
          fill
          priority
          sizes="(max-width: 768px) 100px, 12vw"
          className="object-contain object-left"
        />
      </div>
    </header>
  );
};

export default Header;