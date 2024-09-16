import { useLocation } from 'react-router-dom'
import { Button, Image } from "@nextui-org/react";
import Logo from '../assets/pictures/logo.jpeg'
import { useState } from 'react';

export default function Navbar() {
    const {pathname} = useLocation();
    const paths = ['/signup', '/signin', '/messages'];
    const [disable, seDisable] = useState( paths.includes(pathname) ? true : false);

    return disable ? "" : (
        <nav className="fixed top-0 right-0 left-0 bg-white z-10 pb-2">
            <div className="flex justify-between mt-5 px-6">
                <div className="logo mb-2">
                    <Image src={Logo}
                        height={50}
                    />
                </div>
                <div className="flex gap-5 mt-1">
                    <ul className="hidden lg:flex gap-5 mt-2 ">
                        <li>Home</li>
                        <li>Explore</li>
                        <li>Features</li>
                        <li>About</li>
                    </ul>
                    
                    
                </div>
            </div>
        </nav>
    )
}