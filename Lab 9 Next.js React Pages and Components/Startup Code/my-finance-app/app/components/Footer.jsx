import React from "react";
import NavBar from "./NavBar";
import Link from "next/link";
function Footer(){
    return(
        <div>
            <footer>
                <NavBar></NavBar>
                <Link href={'/'}>HEHEHEHE</Link>
            </footer>
        </div>
    )
}

export default Footer;
