import { useState } from "react";

const Banderole = () => {
    return (
            <div className="bg-zinc-800 text-slate-200 relative flex overflow-x-hidden">
                <div class="py-2 animate-Rolling whitespace-nowrap">
                    <span className="text-2xl italic mx-32">Allo</span>
                    <span className="text-2xl italic mx-32">Je</span>
                    <span className="text-2xl italic mx-32">m'apelle</span>
                    <span className="text-2xl italic mx-32">Guillaume</span>
                    <span className="text-2xl italic mx-32">Hihihihihi</span>
                </div>
                <div className="absolute top-0 py-2 animate-Rolling2 whitespace-nowrap">
                <span className="text-2xl italic mx-32">Allo</span>
                    <span className="text-2xl italic mx-32">Je</span>
                    <span className="text-2xl italic mx-32">m'apelle</span>
                    <span className="text-2xl italic mx-32">Guillaume</span>
                    <span className="text-2xl italic mx-32">Hihihihihi</span>
                </div>
            </div>
    );
};

export default Banderole;