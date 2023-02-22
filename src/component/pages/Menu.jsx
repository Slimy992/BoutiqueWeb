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
    const filtrePrix = (prixType) => {
        setItemList(
            data.filter((item) => {
                return item.prixType === prixType;
            })
        );
    };

    return (
        <div className="m-auto py-12 bg-slate-300 h-auto">
            <h1 className="pb-12 text-zinc-800 font-semibold text-4xl text-center">Notre Menu</h1>
            <div className="grid grid-cols-2 gap-8 m-auto w-[80%]">
                <div className="text-center">
                    <span className="text-2xl">Trier par type d'alchool</span>
                    <div className="monSplitter"></div>
                    <div className="my-12 monFlex-Row  justify-around">
                        <button onClick={()=> setItemList(data)}>Tout</button>
                        <button onClick={()=> filtreType('cocktail')}>Cocktail</button>
                        <button onClick={()=> filtreType('biere')}>Bierre</button>
                        <button onClick={()=> filtreType('bouteille')}>Bouteille</button>
                        <button onClick={()=> filtreType('autre')}>Autres</button>
                    </div>
                </div>
                <div className="text-center">
                    <span className="text-2xl">Trier par prix</span>
                    <div className="monSplitter"></div>
                    <div className="my-12 monFlex-Row justify-around">
                        <button onClick={()=> setItemList(data)}>Tout</button>
                        <button onClick={()=> filtrePrix('$')}>$</button>
                        <button onClick={()=> filtrePrix('$$')}>$$</button>
                        <button onClick={()=> filtrePrix('$$$')}>$$$</button>
                    </div>
                </div>
            </div>
            <div className="mt-8     mx-auto w-[95%]">
                <span className="text-2xl  text-justify">Résulats :</span>
                <div className="monSplitter"></div>
            </div>
            <div className="my-8 mx-8 grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-6">
                {itemList.map((item, index) =>(
                    <div className="shadow-lg h-auto hover:scale-105 duration-500 grid grid-cols-2 bg-zinc-800 rounded-lg p-4" key={index}>
                        <img className="block m-auto w-auto h-auto object-cover rounded-full bg-gray-200"
                        src={item.image} alt={item.nom}/>
                        <div className="monFlex-Col text-xs lg:text-lg sm:text-base text-gray-200 text-center">
                            <p className="underline">{item.nom}</p>
                            <p>Prix: {item.prix}</p>
                            <p>{item.ingrediant1}</p>
                            <p>{item.ingrediant2}</p>
                            <p>{item.ingrediant3}</p>
                        </div>
                    </div>
                ) )}
            </div>   

        </div>
    );
};

export default Menu;