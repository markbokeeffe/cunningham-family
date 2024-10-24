"use client"
import { PropsWithChildren } from 'react';
import Logo from '../Logo';

type HeaderProps = {
    isHome?: boolean;
};


export const Header = ({ children, isHome = false}: PropsWithChildren<HeaderProps> ) => {

	return (
        <div className="flex w-full h-[60px] lg:h-[100px] flex w-full justify-center">
            <div className="flex items-center w-full max-w-screen-lg">
            <Logo isHome={isHome}/>
            {children}
            </div>
      </div>
	);
};

export default Header;