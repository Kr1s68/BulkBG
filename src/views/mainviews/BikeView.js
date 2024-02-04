/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import CartItem from "components/OtherComponents/CartItem/CartItem";
import { useState } from "react";
import {
  doc,
  getDocs,
  getDoc,
  collection,
  setDoc,
  addDoc,
  query,
  where,
  deleteDoc,
  FieldPath,
} from "firebase/firestore";
import { firestore } from "../../firebase";
import { useAuth } from "contexts/AuthContext";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { Toaster, toast } from "react-hot-toast";

export default function Cart({ id, type }) {
  const { currentUser } = useAuth();
  const [item, setItem] = useState([]);

  async function getBikeById(id) {
    try {
      const BikeDoc = doc(collection(firestore, type), id);
      const BikeSnapshot = await getDoc(BikeDoc);

      if (BikeSnapshot.exists()) {
        // Document exists, return its data
        console.log(BikeSnapshot.data());
        setItem(BikeSnapshot.data());
      } else {
        // Document doesn't exist
        throw new Error("bike not found");
      }
    } catch (error) {
      console.error("Error getting bike:", error);
      throw error;
    }
  }

  async function addItem() {
    currentUser
      ? toast.success("Item added")
      : toast.error("Моля направете или влезте в акаунта си");
    const docRef = await addDoc(
      collection(firestore, "userCart", currentUser.email, "CartCollection"),
      {
        image: item.Image,
        name: item.Name,
        price: item.Price,
      }
    );
    console.log("Document written with ID: ", docRef.id);
  }

  useEffect(() => {
    getBikeById(id);
  }, [0]);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingInline: "200px",
            marginTop: "100px",
            marginBottom: "300px",
          }}
        >
          <div style={{ marginRight: "200px" }}>
            <img
              src={item.Image}
              height="600px"
              style={{ borderRadius: "20px" }}
            ></img>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "30%" }}
          >
            <h2 className="text-dark">{item.Name}</h2>
            <p className="text-dark" style={{ fontSize: "18px" }}>
              {item.Description}
            </p>
            <h2 className="text-dark" style={{ marginTop: "200px" }}>
              {" "}
              {item.Price}лв
            </h2>
            <button className="shop-item-add-to-cart-btn" onClick={addItem}>
              Add to Cart
            </button>
          </div>
        </div>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
