import React, { useState } from "react";
import { data } from "../../data/data";

const Menu = () => {

    const [itemList,setItemList] = useState(data);

    const filtreType = (category) => {
        setItemList(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    return (
        <div className="m-auto py-12 bg-slate-300 h-auto">
            <h1 className="pb-12 text-zinc-800 font-semibold text-4xl text-center">Notre Menu</h1>
            <div className="m-auto w-[80%]">
                <div className="text-center pb-12">
                    <span>Trier par type d'alchool</span>
                    <div className="monSplitter backgroud-animate"></div>
                    <div className="my-12 monFlex-Row  justify-around">
                        <button onClick={()=> setItemList(data)}>Tout</button>
                        <button onClick={()=> filtreType('burger')}>Whisky</button>
                        <button onClick={()=> filtreType('')}>Vodka</button>
                        <button onClick={()=> filtreType('whisky')}>Tequila</button>
                        <button onClick={()=> filtreType('rhum')}>Rhum</button>
                    </div>
                </div>
                <div className="text-center">
                    <span>Trier par prix</span>
                    <div className="monSplitter"></div>
                    <div className="my-12 monFlex-Row justify-around">
                        <button>Tout</button>
                        <button>$$ </button>
                        <button>$$$</button>
                        <button>$$$$</button>
                        <button>$$$$$</button>
                    </div>
                </div>
            </div>
            <div className="my-32 grid grid-cols-2 lg:grid-cols-4 gap-6 mx-16">
                {itemList.map((item, index) =>(
                    <div className="shadow-lg hover:scale-105 duration-500 grid grid-cols-2 bg-zinc-800 rounded-lg p-4" key={index}>
                        <img className="w-[200px] h-[200px] object-cover rounded-full flex justify-center align-middle"
                        src={item.image} alt={item.name}/>
                        <div className="text-gray-200 text-center">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.name}</p>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ) )}
            </div>   

        </div>
    );
};

export default Menu;