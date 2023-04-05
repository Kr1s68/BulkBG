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
  async function loadMonohidrateData() {
    const MonohidrateSnapshot = await getDocs(
      collection(firestore, "Creatine", "Monohidrate", "Collection")
    );
    MonohidrateSnapshot.forEach((doc) => {
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
  async function loadMulticompData() {
    const MulticompSnapshot = await getDocs(
      collection(firestore, "Creatine", "Multicomp", "Collection")
    );
    MulticompSnapshot.forEach((doc) => {
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
  async function loadOthersCreatineData() {
    const OthersSnapshot = await getDocs(
      collection(firestore, "Creatine", "Others", "Collection")
    );
    OthersSnapshot.forEach((doc) => {
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
  function loadAllCreatine() {
    loadMonohidrateData();
    loadOthersCreatineData();
    loadMulticompData();
  }
  //End of functions for loading creatine

  //

  //

  //

  //

  //Fucntions for loading amino acids
  async function loadArgininData() {
    const Snapshot = await getDocs(
      collection(firestore, "AminoAcids", "Arginin", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadBCAAData() {
    const Snapshot = await getDocs(
      collection(firestore, "AminoAcids", "BCAA", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadCAminoAcidsData() {
    const Snapshot = await getDocs(
      collection(firestore, "AminoAcids", "CAminoAcids", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadEAAData() {
    const Snapshot = await getDocs(
      collection(firestore, "AminoAcids", "EAA", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadGlutamineData() {
    const Snapshot = await getDocs(
      collection(firestore, "AminoAcids", "Glutamine", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadOtherAminoAcidsData() {
    const Snapshot = await getDocs(
      collection(firestore, "AminoAcids", "Others", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  function loadAllAminoAcids() {
    loadArgininData();
    loadBCAAData();
    loadCAminoAcidsData();
    loadEAAData();
    loadGlutamineData();
    loadOtherAminoAcidsData();
  }
  //End of functions for loading amino acids

  //

  //

  //

  //

  //Fucntions for loading Fat Burners
  async function loadKSupplementsData() {
    const Snapshot = await getDocs(
      collection(firestore, "WLSupplements", "KSupplements", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadLCarnitineData() {
    const Snapshot = await getDocs(
      collection(firestore, "WLSupplements", "L-Carnitine", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadTSupplementsData() {
    const Snapshot = await getDocs(
      collection(firestore, "WLSupplements", "TSupplements", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadOtherWLSupplementsData() {
    const Snapshot = await getDocs(
      collection(firestore, "WLSupplements", "OtherSupplements", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  function loadAllWLSupplements() {
    loadKSupplementsData();
    loadLCarnitineData();
    loadTSupplementsData();
    loadOtherWLSupplementsData();
  }
  //End of functions for loading Fat Burners

  //

  //

  //

  //

  //Fucntions for loading Carb Gainers

  async function loadEnergyGelsData() {
    const Snapshot = await getDocs(
      collection(firestore, "CGainers", "EnergyGels", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadFastCarbsData() {
    const Snapshot = await getDocs(
      collection(firestore, "CGainers", "FastCarbs", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadGainersData() {
    const Snapshot = await getDocs(
      collection(firestore, "CGainers", "Gainers", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadSlowCarbsData() {
    const Snapshot = await getDocs(
      collection(firestore, "CGainers", "SlowCarbs", "Collection")
    );
    Snapshot.forEach((doc) => {
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

  function loadAllCarbGainers() {
    loadFastCarbsData();
    loadSlowCarbsData();
    loadGainersData();
    loadEnergyGelsData();
  }
  //End of functions for loading Carb Gainers

  //

  //

  //

  //

  //Fucntions for loading Healthy Fats
  async function loadCLAHCAData() {
    const Snapshot = await getDocs(
      collection(firestore, "HFats", "CLA&HCA", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadFishFatData() {
    const Snapshot = await getDocs(
      collection(firestore, "HFats", "FishFat", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadKrilFatData() {
    const Snapshot = await getDocs(
      collection(firestore, "HFats", "KrilFat", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadLecitinData() {
    const Snapshot = await getDocs(
      collection(firestore, "HFats", "Lecitin", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadMCTData() {
    const Snapshot = await getDocs(
      collection(firestore, "HFats", "MCT", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadOmega3Data() {
    const Snapshot = await getDocs(
      collection(firestore, "HFats", "Omega3", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadOmega369Data() {
    const Snapshot = await getDocs(
      collection(firestore, "HFats", "Omega369", "Collection")
    );
    Snapshot.forEach((doc) => {
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

  function loadAllHealthyFats() {
    loadCLAHCAData();
    loadFishFatData();
    loadKrilFatData();
    loadLecitinData();
    loadMCTData();
    loadOmega3Data();
    loadOmega369Data();
  }
  //End of functions for loading Healthy Fats

  //

  //

  //

  //

  //Fucntions for loading Joint Supplements

  async function loadCJSupplementsData() {
    const Snapshot = await getDocs(
      collection(firestore, "JSupplements", "CSupplements", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadGlucoseData() {
    const Snapshot = await getDocs(
      collection(firestore, "JSupplements", "Glucose", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadKJSupplementsData() {
    const Snapshot = await getDocs(
      collection(firestore, "JSupplements", "KSupplements", "Collection")
    );
    Snapshot.forEach((doc) => {
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

  function loadAllJointSupplementsFats() {
    loadGlucoseData();
    loadCJSupplementsData();
    loadKJSupplementsData();
  }
  //End of functions for loading Joint Supplements

  //

  //

  //

  //

  //Fucntions for loading Vitamins

  async function loadMultiVitaminsData() {
    const Snapshot = await getDocs(
      collection(firestore, "Vitamins", "Multivitamins", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadVitaminAData() {
    const Snapshot = await getDocs(
      collection(firestore, "Vitamins", "Vitamin A", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadVitaminBData() {
    const Snapshot = await getDocs(
      collection(firestore, "Vitamins", "Vitamin B", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadVitaminCData() {
    const Snapshot = await getDocs(
      collection(firestore, "Vitamins", "Vitamin C", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadVitaminDData() {
    const Snapshot = await getDocs(
      collection(firestore, "Vitamins", "Vitamin D", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadVitaminEData() {
    const Snapshot = await getDocs(
      collection(firestore, "Vitamins", "Vitamin E", "Collection")
    );
    Snapshot.forEach((doc) => {
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

  function loadAllVitamins() {
    loadMultiVitaminsData();
    loadVitaminAData();
    loadVitaminBData();
    loadVitaminCData();
    loadVitaminDData();
    loadVitaminEData();
  }
  //End of functions for loading Vitamins

  //

  //

  //

  //

  //Fucntions for loading Minerals

  async function loadCalciumData() {
    const Snapshot = await getDocs(
      collection(firestore, "Minerals", "Calcium", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadCinkData() {
    const Snapshot = await getDocs(
      collection(firestore, "Minerals", "Cink", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadIronData() {
    const Snapshot = await getDocs(
      collection(firestore, "Minerals", "Iron", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadMagnesiumData() {
    const Snapshot = await getDocs(
      collection(firestore, "Minerals", "Magnesium", "Collection")
    );
    Snapshot.forEach((doc) => {
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
  async function loadZMAMZBData() {
    const Snapshot = await getDocs(
      collection(firestore, "Minerals", "ZMA&ZMB", "Collection")
    );
    Snapshot.forEach((doc) => {
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

  function loadAllMinerals() {
    loadCalciumData();
    loadCinkData();
    loadIronData();
    loadMagnesiumData();
    loadZMAMZBData();
  }

  useEffect(() => {
    loadAllWLSupplements();
    loadAllAminoAcids();
    loadAllProteins();
    loadAllCreatine();
    loadAllCarbGainers();
    loadAllHealthyFats();
    loadAllJointSupplementsFats();
    loadAllVitamins();
    loadAllMinerals();
  }, []);

  console.log(items);
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
                  loadAllProteins();
                }}
              >
                Протеин
              </DropdownToggle>
              <DropdownMenu style={{ width: "270px" }}>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadSProteinsData();
                  }}
                >
                  Суроватъчни протеини
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadMProteinsData();
                  }}
                >
                  Многокомпонентни протеини
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadRSProteinsData();
                  }}
                >
                  Протеини на растителна основа
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadWProteinsData();
                  }}
                >
                  Протеини за жени
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadTProteinsData();
                  }}
                >
                  Телешки протеин
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadSOProteinsData();
                  }}
                >
                  Соеви протеини
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadMFProteinsData();
                  }}
                >
                  За мускулен растеж
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadOtherProteinsData();
                  }}
                >
                  Други протеини
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{ width: "260px", marginBlock: "6px" }}
                onClick={() => {
                  clearItems();
                  loadAllWLSupplements();
                }}
              >
                Добавки за отслабване
              </DropdownToggle>
              <DropdownMenu style={{ width: "270px" }}>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadKSupplementsData();
                  }}
                >
                  Комплексни добавки
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadLCarnitineData();
                  }}
                >
                  L-карнитин
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadTSupplementsData();
                  }}
                >
                  Термогенни добавки
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadOtherWLSupplementsData();
                  }}
                >
                  Други фетбърнъри
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{ width: "260px", marginBlock: "6px" }}
                onClick={() => {
                  clearItems();
                  loadAllCarbGainers();
                }}
              >
                Гейнъри на въглехидрати
              </DropdownToggle>
              <DropdownMenu style={{ width: "270px" }}>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadGainersData();
                  }}
                >
                  Гейнъри
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadSlowCarbsData();
                  }}
                >
                  Бавни въглехидрати
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadFastCarbsData();
                  }}
                >
                  Бързи въглехидрати
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadEnergyGelsData();
                  }}
                >
                  Енергийни гелове
                </DropdownItem>
                <DropdownItem style={{ fontSize: "14px" }}>
                  Всичко в едно
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{ width: "260px", marginBlock: "6px" }}
                onClick={() => {
                  clearItems();
                  loadAllJointSupplementsFats();
                }}
              >
                Добавки за стави
              </DropdownToggle>
              <DropdownMenu style={{ width: "270px" }}>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadCJSupplementsData();
                  }}
                >
                  Комплексни добавки за стави
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadKJSupplementsData();
                  }}
                >
                  Колагенови добавки за стави
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadGlucoseData();
                  }}
                >
                  Глюкозамин
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{ width: "260px", marginBlock: "6px" }}
                onClick={() => {
                  clearItems();
                  loadAllAminoAcids();
                }}
              >
                Аминокиселини
              </DropdownToggle>
              <DropdownMenu style={{ width: "270px" }}>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadCAminoAcidsData();
                  }}
                >
                  Комплексни аминокиселини
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadBCAAData();
                  }}
                >
                  BCAA
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadEAAData();
                  }}
                >
                  EAA
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadArgininData();
                  }}
                >
                  {" "}
                  Аргинин
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadGlutamineData();
                  }}
                >
                  Глутамин
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadOtherAminoAcidsData();
                  }}
                >
                  Други аминокиселини
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{ width: "260px", marginBlock: "6px" }}
                onClick={() => {
                  clearItems();
                  loadAllVitamins();
                }}
              >
                Витамини
              </DropdownToggle>
              <DropdownMenu style={{ width: "270px" }}>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadMultiVitaminsData();
                  }}
                >
                  Мултивитамини
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadVitaminAData();
                  }}
                >
                  {" "}
                  Витамин А
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadVitaminBData();
                  }}
                >
                  {" "}
                  Витамини от група B
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadVitaminCData();
                  }}
                >
                  {" "}
                  Витамин C
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadVitaminDData();
                  }}
                >
                  {" "}
                  Витамин D
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadVitaminEData();
                  }}
                >
                  {" "}
                  Витамин E
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{ width: "260px", marginBlock: "6px" }}
                onClick={() => {
                  clearItems();
                  loadAllMinerals();
                }}
              >
                Минерали
              </DropdownToggle>
              <DropdownMenu style={{ width: "270px" }}>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadMagnesiumData();
                  }}
                >
                  Магнезий
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadCalciumData();
                  }}
                >
                  Калций
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadIronData();
                  }}
                >
                  Желязо
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadCinkData();
                  }}
                >
                  Цинк
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadZMAMZBData();
                  }}
                >
                  ZMA и ZMB
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{ width: "260px", marginBlock: "6px" }}
                onClick={() => {
                  clearItems();
                  loadAllHealthyFats();
                }}
              >
                Здравословни мазнини
              </DropdownToggle>
              <DropdownMenu style={{ width: "270px" }}>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadOmega3Data();
                  }}
                >
                  Омега 3
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadOmega369Data();
                  }}
                >
                  Омега 3-6-9
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadKrilFatData();
                  }}
                >
                  Масло от крил
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadFishFatData();
                  }}
                >
                  Течно рибено масло
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadCLAHCAData();
                  }}
                >
                  CLA и HCA
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadLecitinData();
                  }}
                >
                  Лецитин
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadMCTData();
                  }}
                >
                  МСТ масло
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                style={{ width: "260px", marginBlock: "6px" }}
                onClick={() => {
                  clearItems();
                  loadAllCreatine();
                }}
              >
                Креатин
              </DropdownToggle>
              <DropdownMenu style={{ width: "270px" }}>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadMonohidrateData();
                  }}
                >
                  Креатин Монохидрат
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadOthersCreatineData();
                  }}
                >
                  Други форми на креатин
                </DropdownItem>
                <DropdownItem
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    clearItems();
                    loadMulticompData();
                  }}
                >
                  Многокомпонентен креатин
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
          <div style={{ marginBlock: "120px", minHeight: "800px" }}>
            {items.map((item) => (
              <ShopItem
                key={item.id}
                item={item}
                searchQuery={searchQuery}
                isSearched={isSearched}
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
