import React from "react";
import "../CartItem/CartItem.css";
import {
  doc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { firestore } from "../../../firebase";
import { useAuth } from "contexts/AuthContext";
import { toast } from "react-hot-toast";

const CartItem = ({ name, price, image, onRemove, id }) => {
  const { currentUser } = useAuth();
  async function deleteItem() {
    await deleteDoc(
      doc(
        firestore,
        "userCart",
        currentUser && currentUser.email,
        "CartCollection",
        id
      )
    );
  }
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <img src={image} alt={name} className="cart-item-image" />
        <div className="cart-item-details">
          <h3 className="cart-item-name">{name}</h3>
          <p className="cart-item-price">{price} лв</p>
        </div>
      </div>
      <button
        className="cart-item-remove"
        onClick={() => {
          deleteItem();
          onRemove();
          toast.error("Item Removed");
        }}
      >
        Премахни
      </button>
    </div>
  );
};

export default CartItem;
