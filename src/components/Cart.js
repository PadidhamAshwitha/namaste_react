import { useContext } from "react";
import CartContext from "../utilities/CartContext";
import { RES_IMG_URL } from "../utilities/constants";

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="m-4 p-4 border shadow-md flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
            {cartItems.length === 0 ? (
                <p className="text-gray-500">Cart is empty.</p>
            ) : (
                <ul className="w-9/12">
                    {cartItems.map((item) => (
                        <li key={item.card.info.id} className="flex items-center justify-between p-4 m-4 shadow-md border rounded-lg">
                            {/* Left: Item Details */}
                            <div className="w-9/12">
                                <h2 className="font-bold text-lg">{item.card.info.name}</h2>
                                <p className="text-gray-600">₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
                            </div>

                            {/* Right: Item Image */}
                            <div className="w-3/12 flex justify-center">
                                <img 
                                    src={RES_IMG_URL + item.card.info.imageId} 
                                    className="w-20 h-20 object-cover rounded-md shadow-lg"
                                    alt={item.card.info.name}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
