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
import React, { useEffect, useState } from "react";
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
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { Toaster, toast } from "react-hot-toast";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import SearchBar from "components/OtherComponents/SearchBar";
import PageHeader from "components/PageHeader/PageHeader";
import ShopItem from "components/OtherComponents/ShopItem/ShopItem";
import { useAuth } from "contexts/AuthContext";
import { doc, getDocs, collection, query, where } from "firebase/firestore";
import { firestore } from "../../firebase";

export default function Store() {
  const { currentUser } = useAuth();
  const [searchQuery, setSearcQuery] = useState();
  const [isSearched, setIsSearched] = useState(false);
  const [currentSize, setCurrentSize] = useState("S/M/L");
  console.log(currentSize);

  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  const [items, setItems] = useState([]);

  function clearItems() {
    setItems([]);
  }

  //Fuctions for loading proteins
  async function loadMFProteinsData() {
    const MFProteinsSnapshot = await getDocs(
      collection(firestore, "Proteins", "MFProteins", "Collection")
    );
    MFProteinsSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setItems((prevItems) => [
        ...prevItems,
        {
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
        },
      ]);
    });
  }
  async function loadMProteinsData() {
    const MProteinsSnapshot = await getDocs(
      collection(firestore, "Proteins", "MProteins", "Collection")
    );
    MProteinsSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setItems((prevItems) => [
        ...prevItems,
        {
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
        },
      ]);
    });
  }
  async function loadDirtBikes() {
    const MProteinsSnapshot = await getDocs(collection(firestore, "DirtBikes"));
    MProteinsSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setItems((prevItems) => [
        ...prevItems,
        {
          id: doc.id,
          image: doc.data().Image,
          name: doc.data().Name,
          description: doc.data().ItemDescription,
          price: doc.data().Price,
          type: "DirtBike",
          size: doc.data().Size,
        },
      ]);
    });
  }
  async function loadRoadBikes() {
    const MProteinsSnapshot = await getDocs(collection(firestore, "RoadBikes"));
    MProteinsSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setItems((prevItems) => [
        ...prevItems,
        {
          id: doc.id,
          image: doc.data().Image,
          name: doc.data().Name,
          description: doc.data().ItemDescription,
          price: doc.data().Price,
          type: "RoadBike",
          size: doc.data().Size,
        },
      ]);
    });
  }
  async function loadMountainBikes() {
    const MProteinsSnapshot = await getDocs(
      collection(firestore, "MountainBikes")
    );
    MProteinsSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setItems((prevItems) => [
        ...prevItems,
        {
          id: doc.id,
          image: doc.data().Image,
          name: doc.data().Name,
          description: doc.data().ItemDescription,
          price: doc.data().Price,
          type: "MountainBike",
          size: doc.data().Size,
        },
      ]);
    });
  }
  async function loadOtherProteinsData() {
    const OtherProteinsSnapshot = await getDocs(
      collection(firestore, "Proteins", "OtherProteins", "Collection")
    );
    OtherProteinsSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setItems((prevItems) => [
        ...prevItems,
        {
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
        },
      ]);
    });
  }
  async function loadRSProteinsData() {
    const RSProteinsSnapshot = await getDocs(
      collection(firestore, "Proteins", "RSProteins", "Collection")
    );
    RSProteinsSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setItems((prevItems) => [
        ...prevItems,
        {
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
        },
      ]);
    });
  }
  async function loadSOProteinsData() {
    const SOProteinsSnapshot = await getDocs(
      collection(firestore, "Proteins", "SOProteins", "Collection")
    );
    SOProteinsSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setItems((prevItems) => [
        ...prevItems,
        {
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
        },
      ]);
    });
  }
  async function loadSProteinsData() {
    const SProteinsSnapshot = await getDocs(
      collection(firestore, "Proteins", "SProteins", "Collection")
    );
    SProteinsSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setItems((prevItems) => [
        ...prevItems,
        {
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
        },
      ]);
    });
  }
  async function loadTProteinsData() {
    const TProteinsSnapshot = await getDocs(
      collection(firestore, "Proteins", "TProteins", "Collection")
    );
    TProteinsSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setItems((prevItems) => [
        ...prevItems,
        {
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
        },
      ]);
    });
  }
  async function loadWProteinsData() {
    const WProteinsSnapshot = await getDocs(
      collection(firestore, "Proteins", "WProteins", "Collection")
    );
    WProteinsSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setItems((prevItems) => [
        ...prevItems,
        {
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
        },
      ]);
    });
  }
  function loadAllProteins() {
    loadMFProteinsData();
    loadMProteinsData();
    loadOtherProteinsData();
    loadRSProteinsData();
    loadSOProteinsData();
    loadSProteinsData();
    loadTProteinsData();
    loadWProteinsData();
  }
  //End of functions for loading protein

  //

  //

  //

  //

  //Fucntions for loading creatine
  function loadAllAminoAcids() {
    loadDirtBikes();
    loadRoadBikes();
    loadMountainBikes();
  }

  useEffect(() => {
    loadAllAminoAcids();
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <Container
          style={{
            marginTop: "110px",
            paddingInline: "0px",
          }}
        >
          <Row className="justify-content-md-center">
            <SearchBar
              keyword={searchQuery}
              setKeyword={setSearcQuery}
              setIsSearched={setIsSearched}
            />
          </Row>
          <Col style={{ marginLeft: "-350px", marginBottom: "-500px" }}>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{ width: "260px", marginBlock: "6px" }}
                onClick={() => {
                  clearItems();
                  loadMountainBikes();
                }}
              >
                Велосипеди за планина
              </DropdownToggle>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{ width: "260px", marginBlock: "6px" }}
                onClick={() => {
                  clearItems();
                  loadRoadBikes();
                }}
              >
                Велосипеди за града
              </DropdownToggle>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{ width: "260px", marginBlock: "6px" }}
                onClick={() => {
                  clearItems();
                  loadDirtBikes();
                }}
              >
                Велосипеди за чакъл
              </DropdownToggle>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{ width: "260px", marginBlock: "6px" }}
              >
                Размер
              </DropdownToggle>
              <DropdownMenu style={{ width: "270px" }}>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    setIsSearched(true);
                    setCurrentSize("S");
                  }}
                >
                  S
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    setIsSearched(true);
                    setCurrentSize("S/M");
                  }}
                >
                  S/M
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    setIsSearched(true);
                    setCurrentSize("M");
                  }}
                >
                  M
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    setIsSearched(true);
                    setCurrentSize("M/L");
                  }}
                >
                  M/L
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    setIsSearched(true);
                    setCurrentSize("L");
                  }}
                >
                  L
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{
                  width: "260px",
                  marginBlock: "6px",
                  visibility: "hidden",
                }}
                onClick={() => {
                  clearItems();
                  loadDirtBikes();
                }}
              >
                Велосипеди за чакъл
              </DropdownToggle>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{
                  width: "260px",
                  marginBlock: "6px",
                  visibility: "hidden",
                }}
                onClick={() => {
                  clearItems();
                  loadDirtBikes();
                }}
              >
                Велосипеди за чакъл
              </DropdownToggle>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{
                  width: "260px",
                  marginBlock: "6px",
                  visibility: "hidden",
                }}
                onClick={() => {
                  clearItems();
                  loadDirtBikes();
                }}
              >
                Велосипеди за чакъл
              </DropdownToggle>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{
                  width: "260px",
                  marginBlock: "6px",
                  visibility: "hidden",
                }}
                onClick={() => {
                  clearItems();
                  loadDirtBikes();
                }}
              >
                Велосипеди за чакъл
              </DropdownToggle>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{
                  width: "260px",
                  marginBlock: "6px",
                  visibility: "hidden",
                }}
                onClick={() => {
                  clearItems();
                  loadDirtBikes();
                }}
              >
                Велосипеди за чакъл
              </DropdownToggle>
            </UncontrolledDropdown>
          </Col>

          <div style={{ marginBlock: "120px", minHeight: "800px" }}>
            {items.map((item) => (
              <ShopItem
                key={item.id}
                item={item}
                searchQuery={searchQuery}
                isSearched={isSearched}
                currentSize={currentSize}
                id={item.id}
                type={item.type}
                size={item.size}
              />
            ))}
          </div>
        </Container>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
