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
  InputGroup,
  Input,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownToggle,
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
import "../examples/InputStyles.css";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { Toaster } from "react-hot-toast";

export default function Calculator() {
  const [weight, setWeight] = useState();
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [genderMultiplier, setGenderMulitpler] = useState();
  const [activityMultiplier, setActivityMultiplier] = useState();
  const [goalMultiplier, setGoalMultiplier] = useState("default");
  const [finalCalculation, setFinalCalculation] = useState("unused");
  const [genderText, setGenderText] = useState("Избери пол");
  const [goalText, setGoalText] = useState("Избери Цел");
  const [activityText, setActivityText] = useState(
    "Избери ниво на натоварване"
  );

  function calculate() {
    if (goalMultiplier === "default") {
      console.log("default");
      setFinalCalculation(
        (10 * weight + 6.25 * height - 5 * age + genderMultiplier) *
          activityMultiplier
      );
    } else if (goalMultiplier === "higher") {
      setFinalCalculation(
        (10 * weight + 6.25 * height - 5 * age + genderMultiplier) *
          activityMultiplier +
          (10 * weight + 6.25 * height - 5 * age + genderMultiplier) *
            activityMultiplier *
            0.2
      );
    } else if (goalMultiplier === "lower") {
      setFinalCalculation(
        (10 * weight + 6.25 * height - 5 * age + genderMultiplier) *
          activityMultiplier -
          (10 * weight + 6.25 * height - 5 * age + genderMultiplier) *
            activityMultiplier *
            0.2
      );
    }
  }
  console.log(finalCalculation);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <Container
          style={{
            minHeight: "700px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div className="Calculator">
            <div className="pickerDiv">
              <label>Възраст</label>
              <Input
                type="number"
                style={{ width: "380px" }}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              ></Input>
            </div>
            <div className="pickerDiv">
              <label>Пол</label>
              <div>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    data-toggle="dropdown"
                    style={{ width: "380px" }}
                  >
                    {genderText}
                  </DropdownToggle>
                  <DropdownMenu style={{ width: "380px" }}>
                    <DropdownItem
                      onClick={() => {
                        setGenderMulitpler(5);
                        setGenderText("Мъж");
                      }}
                    >
                      Мъж
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setGenderMulitpler(-161);
                        setGenderText("Жена");
                      }}
                    >
                      Жена
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <div className="pickerDiv">
              <label>Ръст</label>
              <Input
                type="number"
                placeholder="Сантиметри..."
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              ></Input>
            </div>
            <div className="pickerDiv">
              <label>Тежест</label>
              <Input
                type="number"
                placeholder="Килограми..."
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              ></Input>
            </div>
            <div className="pickerDiv">
              <label>Цел</label>
              <div>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    data-toggle="dropdown"
                    style={{ width: "380px" }}
                  >
                    {goalText}
                  </DropdownToggle>
                  <DropdownMenu style={{ width: "380px" }}>
                    <DropdownItem
                      onClick={() => {
                        setGoalMultiplier("default");
                        setGoalText("Поддържане на текущото тегло");
                      }}
                    >
                      Поддържане на текущото тегло
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setGoalMultiplier("lower");
                        setGoalText("Намаляване на теглото");
                      }}
                    >
                      Намаляване на теглото
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setGoalMultiplier("higher");
                        setGoalText("Качване на теглото");
                      }}
                    >
                      Качване на теглото
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <div className="pickerDiv">
              <label>Ниво на натоварване</label>
              <div>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    data-toggle="dropdown"
                    style={{ width: "380px" }}
                  >
                    {activityText}
                  </DropdownToggle>
                  <DropdownMenu style={{ width: "380px" }}>
                    <DropdownItem
                      onClick={() => {
                        setActivityMultiplier(1.2);
                        setActivityText("Никакво");
                      }}
                    >
                      Никакво
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setActivityMultiplier(1.375);
                        setActivityText(
                          "Лека активност: Леки тренировки 3-5 дни в седмицата"
                        );
                      }}
                    >
                      Лека активност: Леки тренировки 3-5 дни в седмицата
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setActivityMultiplier(1.55);
                        setActivityText(
                          " Средна активност: Тежки тренировки 3-5 дни в седмицата"
                        );
                      }}
                    >
                      Средна активност: Тежки тренировки 3-5 дни в седмицата
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setActivityMultiplier(1.725);
                        setActivityText(
                          "Тежка активност: Тежки тренировки 6-7 дни в седмицата"
                        );
                      }}
                    >
                      Тежка активност: Тежки тренировки 6-7 дни в седмицата
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="pickerDiv">
                <Button onClick={calculate}>Calculate</Button>
              </div>
            </div>
          </div>
          {finalCalculation === "unused" ? (
            <h1 style={{ marginTop: "60px" }}>Все още няма резултати</h1>
          ) : (
            <div style={{ marginTop: "60px" }}>
              <h1>Резултати:</h1>
              <h2>{Math.round(finalCalculation)} Калории дневно</h2>
              <h4>От които:</h4>
              <h2>{Math.round((finalCalculation * 0.25) / 9)}г мазнини</h2>
              <h2>{Math.round((finalCalculation * 0.2) / 4)}г белтъци</h2>
              <h2>{Math.round((finalCalculation * 0.55) / 4)}г въглехидрати</h2>
            </div>
          )}
        </Container>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
