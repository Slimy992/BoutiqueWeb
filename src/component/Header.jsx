import { useState } from "react";

const Header = () => {

    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    }

    return (
        <div className="bg-purple-600 bg-gradient-to-l  from-yellow-400 background-animate">
            <div className='myFlex-Row h-36'>
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
            <nav className={isActive ? "myFlex-Col showDrop hiddenDrop h-0" : "myFlex-Col showDrop hiddenDrop h-96 z-10 pt-8 pb-16 text-gray-50 text-2xl"}>
                    <div className={isActive ? "opacity-0 transition-opacity delay-0" : "transition-opacity delay-300 opacity-100"}>
                        <a href="#" class="text-base leading-6 text-gray-200 hover:text-gray-500">
                            Commander
                        </a>
                    </div>
                    <div className={isActive ? "opacity-0 transition-opacity delay-0" : "transition-opacity delay-300 opacity-100"}>
                        <a href="#" class="text-base leading-6 text-gray-200 hover:text-gray-500">
                            Reservation
                        </a>
                    </div>
                    <div className={isActive ? "opacity-0 transition-opacity delay-0" : "transition-opacity delay-300 opacity-100"}>
                        <a href="#" class="text-base leading-6 text-gray-200 hover:text-gray-500">
                            Heure d'ouverture
                        </a>
                    </div>
                    <div className={isActive ? "opacity-0 transition-opacity delay-0" : "transition-opacity delay-300 opacity-100"}>
                        <a href="#" class="text-base leading-6 text-gray-200 hover:text-gray-500">
                            Nous contacter
                        </a>
                    </div>
                </nav>
            <div class=" shadow-zinc-800 shadow-2xl  bg-zinc-800 text-slate-200 relative flex overflow-x-hidden">
                <div class="py-2  animate-Rolling whitespace-nowrap">
                    <span class="text-2xl italic  mx-32">Allo</span>
                    <span class="text-2xl italic mx-32">Je</span>
                    <span class="text-2xl italic mx-32">m'apelle</span>
                    <span class="text-2xl italic mx-32">Guillaume</span>
                    <span class="text-2xl italic mx-32">Hihihihihi</span>
                </div>
                <div class="absolute top-0 py-2  animate-Rolling2 whitespace-nowrap">
                    <span class="text-2xl italic mx-32">Allo</span>
                    <span class="text-2xl italic mx-32">Je</span>
                    <span class="text-2xl italic mx-32">m'apelle</span>
                    <span class="text-2xl italic mx-32">Guillaume</span>
                    <span class="text-2xl italic mx-32">Hihihihihi</span>
                </div>
            </div>
        </div>
    );
};

export default Header;