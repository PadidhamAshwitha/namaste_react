import { useContext } from "react";
import CartContext from "../utilities/CartContext";
import { RES_IMG_URL } from "../utilities/constants";

const ItemMenuList = ({ items }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 flex hover:shadow-xl">
                    <div className="w-10/12">
                        <div className="font-bold pr-4 py-2">
                            <span>{item.card.info.name}</span>
                            <span> ₹ {item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}</span>
                        </div>
                        <p className="text-sm">{item.card.info.description}</p>
                    </div>

                    <div className="w-2/12 my-4">
                        <button 
                            className="px-6 py-2 m-2 text-green-900 bg-white rounded-md font-bold bg-orange-400"
                            onClick={() => addToCart(item)}
                        > 
                            ADD + 
                        </button>
                        <img src={RES_IMG_URL + item.card.info.imageId} className="rounded-md shadow-lg shadow-black"/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemMenuList;
