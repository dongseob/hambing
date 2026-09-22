import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 p-6">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={120}
        height={40}
        priority
        className="w-auto h-auto scale-90 origin-top-left"
      />
    </header>
  );
};

export default Header;