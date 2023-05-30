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
import React, { useEffect, useRef } from "react";
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
  addDoc,
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

export default function Orders() {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function loadOrderData() {
    const Snapshot = await getDocs(collection(firestore, "Orders"));
    Snapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setOrders((prevOrders) => [
        ...prevOrders,
        {
          orderEmail: doc._key.path.segments[6],
          data: doc._document.data.value.mapValue.fields.items.arrayValue
            .values,
        },
      ]);
    });
    setIsLoaded(true);
  }

  console.log(orders);

  useEffect(() => {
    loadOrderData();
  }, [0]);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <Container>
          <div style={{ marginTop: "60px", minHeight: "500px" }}>
            {isLoaded &&
              orders.map((Item, Id) => {
                return <Order Item={Item} />;
              })}
          </div>
        </Container>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

const Order = (Item) => {
  const [displayable, setDisplayable] = React.useState(false);
  return (
    <div>
      {" "}
      <div
        style={{
          background: "#222",
          height: "120px",
          width: "100%",
          marginBlock: "20px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingInline: "35px",
          justifyContent: "space-between",
        }}
      >
        <h3>Order Email: {Item.Item.orderEmail}</h3>
        <button
          onClick={() => {
            setDisplayable(!displayable);
          }}
        >
          Show Items
        </button>
      </div>
      <div
        style={{
          display: displayable ? "flex" : "none",
          flexDirection: "column",
          transition: "all, 0.3s",
        }}
      >
        {Item.Item.data.map((Item1, Id) => {
          return (
            <CartItem
              name={Item1.mapValue.fields.name.stringValue}
              price={Item1.mapValue.fields.price.doubleValue}
              image={Item1.mapValue.fields.image.stringValue}
              id={Item1.mapValue.fields.id.stringValue}
              onRemove={() => {
                console.log("test");
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
