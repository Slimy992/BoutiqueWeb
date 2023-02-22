import { useState } from "react";
import Banderole from "./UI/Banderole";

const Header = () => {

    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    }

    return (
        <div className="bg-purple-600 bg-gradient-to-l   from-yellow-600 background-animate">
            <div className='monFlex-Row h-36'>
                <div onClick={ToggleClass}  className={isActive ? "w-24 ml-8 tham tham-e-spin tham-w-8" : "w-24 ml-8 tham tham-active tham-e-spin tham-w-8 z-50"} >
                    <div className="tham-box">
                        <div className="tham-inner bg-gray-50" />
                    </div>
                </div>
                <h1 className="pl-4 pr-4 text-center  font-semibold text-gray-50  text-4xl">
                Blizzard Night Club
                </h1>
                <div className="w-24 mr-8 ">
                    <img className="w-24" src="/logo.png" alt="logo" />
                </div>
            </div> 
            <nav className={isActive ? "monFlex-Col showDrop hiddenDrop h-0" : "monFlex-Col showDrop hiddenDrop h-96 z-10 pt-8 pb-16 text-gray-50 text-2xl"}>
                    <div className={isActive ? "opacity-0 transition-opacity delay-0" : "transition-opacity delay-300 opacity-100"}>
                        <a href="/" class="text-xl leading-6 text-gray-200 hover:text-gray-500">
                            Acceuil
                        </a>
                    </div>
                    <div className={isActive ? "opacity-0 transition-opacity delay-0" : "transition-opacity delay-300 opacity-100"}>
                        <a href="/Commander" class="text-xl leading-6 text-gray-200 hover:text-gray-500">
                            Commander
                        </a>
                    </div>
                    <div className={isActive ? "opacity-0 transition-opacity delay-0" : "transition-opacity delay-300 opacity-100"}>
                        <a href="/Reservation" class="text-xl leading-6 text-gray-200 hover:text-gray-500">
                            Reservation
                        </a>
                    </div>
                    <div className={isActive ? "opacity-0 transition-opacity delay-0" : "transition-opacity delay-300 opacity-100"}>
                        <a href="/Horaire" class="text-xl leading-6 text-gray-200 hover:text-gray-500">
                            Heure d'ouverture
                        </a>
                    </div>
                    <div className={isActive ? "opacity-0 transition-opacity delay-0" : "transition-opacity delay-300 opacity-100"}>
                        <a href="/Contact" class="text-xl leading-6 text-gray-200 hover:text-gray-500">
                            Nous contacter
                        </a>
                    </div>
                </nav>
            <Banderole className="shadow-2xl"></Banderole>
        </div>
    );
};

export default Header;