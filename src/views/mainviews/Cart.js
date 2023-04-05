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
  collection,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { firestore } from "../../firebase";
import { useAuth } from "contexts/AuthContext";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { Toaster } from "react-hot-toast";

export default function Cart() {
  const { currentUser } = useAuth();
  const [items, setItems] = useState([]);

  async function loadCartData() {
    const Snapshot = await getDocs(
      collection(
        firestore,
        "userCart",
        currentUser && currentUser.email,
        "CartCollection"
      )
    );
    Snapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setItems((prevItems) => [
        ...prevItems,
        {
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          price: doc.data().price,
        },
      ]);
    });
  }
  function reloadItems() {
    setItems([]);
    loadCartData();
  }
  useEffect(() => {
    loadCartData();
  }, [currentUser]);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <Container>
          <div style={{ marginTop: "60px", minHeight: "500px" }}>
            <div className="cart-item-list">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  onRemove={reloadItems}
                />
              ))}
            </div>
          </div>
          <Row className="justify-content-md-center">
            <Button
              className="btn-round"
              color="primary"
              size="lg"
              style={{ marginTop: "20px", marginBottom: "40px" }}
            >
              Завърши поръчката
            </Button>
          </Row>
        </Container>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
