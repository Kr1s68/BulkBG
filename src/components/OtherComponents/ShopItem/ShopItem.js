import React from "react";
import "../ShopItem/ShopItem.css";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { firestore } from "../../../firebase";
import { useAuth } from "contexts/AuthContext";
import { toast } from "react-hot-toast";

const ShopItem = ({ item, searchQuery, isSearched }) => {
  const { currentUser } = useAuth();

  async function addItem() {
    currentUser
      ? toast.success("Item added")
      : toast.error("Моля направете или влезте в акаунта си");
    const docRef = await addDoc(
      collection(firestore, "userCart", currentUser.email, "CartCollection"),
      {
        image: item.image,
        name: item.name,
        price: item.price,
      }
    );
    console.log("Document written with ID: ", docRef.id);
  }
  return (
    <div
      className="shop-item"
      style={{
        display:
          !isSearched || item.name.includes(searchQuery)
            ? "inline-block"
            : "none",
      }}
    >
      <div className="shop-item-image-container">
        <img className="shop-item-image" src={item.image} alt={item.name} />
      </div>
      <h2 className="shop-item-title">{item.name}</h2>
      <p className="shop-item-description">{item.description}</p>
      <p className="shop-item-price">{item.price}лв</p>
      <button className="shop-item-add-to-cart-btn" onClick={addItem}>
        Add to Cart
      </button>
    </div>
  );
};

export default ShopItem;
