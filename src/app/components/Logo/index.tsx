"use client"
import clsx from 'clsx';
import Image from "next/image";

type LogoProps = {
      isHome?: boolean;
  };

export const Logo = ({isHome = false}: LogoProps) => 
<a href="/" style={{ color: '51 22 22', fontFamily: 'fantasy' }} className={clsx(isHome && "lg:hidden", "no-underline font-extrabold text-1xl leading-5 ml-4 flex items-center")}>
      <Image
            src="/cunningham_crest.webp"
            alt="Cunningham Crest"
            className="pr-2"
            width={40}
            height={0}
      />
      <span>Cunningham</span>
</a>;

export default Logo;
