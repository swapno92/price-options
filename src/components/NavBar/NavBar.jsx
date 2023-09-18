// import React from 'react';

import { useState } from "react";
import Links from "../Links/Links";
import { RiMenu2Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "home" },
        { idc: 2, name: "About", Path: "/about" },
        { id: 3, name: "Services", Path: "/services" },
        { id: 4, name: "Contact", Path: "/contact" },
        { id: 5, path: "*", name: "notFound" }
    ]

    return (
        <nav className="bg-yellow-300 text-black p-2">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose /> : <RiMenu2Fill />
                }
            </div>

            <ul className={`md:flex md:pl-0 px-12 pb-4 duration-1000 md:static absolute gap-12 bg-yellow-300 ${open ? 'top-12' : '-top-48'}`}>
                {
                    routes.map(route => <Links key={route.id} route={route}></Links>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;