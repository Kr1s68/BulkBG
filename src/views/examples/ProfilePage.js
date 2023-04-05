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
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";
import {
  doc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { firestore } from "../../firebase";
import { Toaster, toast } from "react-hot-toast";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import { useAuth } from "contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { createUnparsedSourceFile } from "typescript";
import MealItem from "components/OtherComponents/MealItem/MeaItem";
import "../examples/InputStyles.css";

let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1);
  const {
    currentUser,
    updateProfilePicture,
    updateProfileName,
    updatePassword,
  } = useAuth();
  const [pictureInput, setPictureInput] = useState();
  const [nameInput, setNameInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [mealItems, setMealItems] = useState([]);
  const [displayable, setDisplayable] = useState(true);
  const [breakfast, setBreakfast] = useState();
  const [lunch, setLunch] = useState();
  const [dinner, setDinner] = useState();
  const navigate = useHistory();

  async function addItem() {
    const docRef = await addDoc(
      collection(firestore, "Meals", currentUser.email, "MealCollection"),
      {
        dinner: dinner,
        lunch: lunch,
        breakfast: breakfast,
        date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      }
    );
    toast.success("Item added");
    console.log("Document written with ID: ", docRef.id);
  }
  async function loadMealData() {
    const Snapshot = await getDocs(
      collection(
        firestore,
        "Meals",
        currentUser && currentUser.email,
        "MealCollection"
      )
    );
    Snapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setMealItems((prevItems) => [
        ...prevItems,
        {
          id: doc.id,
          breakfast: doc.data().breakfast,
          date: doc.data().date,
          dinner: doc.data().dinner,
          lunch: doc.data().lunch,
        },
      ]);
    });
  }
  function reloadData() {
    window.location.reload();
  }
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  useEffect(() => {
    loadMealData();
  }, [currentUser]);
  console.log(mealItems);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png")}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">
                  {currentUser ? currentUser.displayName : "John Doe"}
                </h1>
                <h5 className="text-on-back">01</h5>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={currentUser && currentUser.photoURL}
                    />
                    <h4 className="title">Редактирай профила си:</h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Снимка
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Име
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          Парола
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div style={{ marginBlock: "5px" }}>Image Link:</div>
                          <input
                            type="text"
                            style={{
                              width: "100%",
                              height: "30px",
                              marginTop: "10px",
                              background: "transparent",
                              borderStyle: "solid",
                              borderWidth: "0.8px",
                              borderColor: "white",
                              borderRadius: "9px",
                              color: "white",
                              fontSize: "11px",
                            }}
                            value={pictureInput}
                            onChange={(e) => setPictureInput(e.target.value)}
                          ></input>
                          <Button
                            className="btn-round"
                            color="primary"
                            size="lg"
                            onClick={() => {
                              updateProfilePicture(pictureInput);
                              window.location.reload();
                            }}
                            style={{ marginTop: "15px", marginBottom: "10px" }}
                          >
                            Запази
                          </Button>
                        </div>
                      </TabPane>
                      <TabPane tabId="tab2">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div style={{ marginBlock: "5px" }}>Ново име:</div>
                          <input
                            type="text"
                            style={{
                              width: "100%",
                              height: "30px",
                              marginTop: "10px",
                              background: "transparent",
                              borderStyle: "solid",
                              borderWidth: "0.8px",
                              borderColor: "white",
                              borderRadius: "9px",
                              color: "white",
                              fontSize: "11px",
                            }}
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                          ></input>
                          <Button
                            className="btn-round"
                            color="primary"
                            size="lg"
                            onClick={() => {
                              updateProfileName(nameInput);
                              window.location.reload();
                            }}
                            style={{ marginTop: "15px", marginBottom: "10px" }}
                          >
                            Запази
                          </Button>
                        </div>
                      </TabPane>
                      <TabPane tabId="tab3">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div style={{ marginBlock: "5px" }}>Имейл:</div>
                          <input
                            type="text"
                            style={{
                              width: "100%",
                              height: "30px",
                              marginTop: "10px",
                              background: "transparent",
                              borderStyle: "solid",
                              borderWidth: "0.8px",
                              borderColor: "white",
                              borderRadius: "9px",
                              color: "white",
                              fontSize: "11px",
                            }}
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                          ></input>
                          <div
                            style={{ marginTop: "15px", marginBottom: "5px" }}
                          >
                            Нова парола:
                          </div>
                          <input
                            type="text"
                            style={{
                              width: "100%",
                              height: "30px",
                              marginTop: "10px",
                              background: "transparent",
                              borderStyle: "solid",
                              borderWidth: "0.8px",
                              borderColor: "white",
                              borderRadius: "9px",
                              color: "white",
                              fontSize: "11px",
                            }}
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                          ></input>
                          <Button
                            className="btn-round"
                            color="primary"
                            size="lg"
                            onClick={() => {
                              updatePassword(emailInput, passwordInput);
                            }}
                            style={{ marginTop: "15px", marginBottom: "10px" }}
                          >
                            Запази
                          </Button>
                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                {displayable ? (
                  <Row className="justify-content-between align-items-center meal-items-div">
                    {" "}
                    {mealItems.map((item) => (
                      <MealItem key={item.id} item={item} />
                    ))}
                  </Row>
                ) : (
                  <Col>
                    <Row style={{ marginBlock: "5px" }}>
                      <Label>Закуска: </Label>
                      <Input
                        type="number"
                        placeholder="Калории.."
                        value={breakfast}
                        onChange={(e) => setBreakfast(e.target.value)}
                      ></Input>
                    </Row>
                    <Row style={{ marginBlock: "5px" }}>
                      <Label>Обяд: </Label>
                      <Input
                        type="number"
                        placeholder="Калории.."
                        value={lunch}
                        onChange={(e) => setLunch(e.target.value)}
                      ></Input>
                    </Row>
                    <Row style={{ marginBlock: "5px" }}>
                      <Label>Вечеря: </Label>
                      <Input
                        type="number"
                        placeholder="Калории.."
                        value={dinner}
                        onChange={(e) => setDinner(e.target.value)}
                      ></Input>
                    </Row>
                    <Row>
                      <Button
                        className="btn-simple"
                        color="secondary"
                        href="#pablo"
                        onClick={() => {
                          setDisplayable(true);
                          addItem();
                          reloadData();
                        }}
                      >
                        <i className="tim-icons icon-plus" /> Завърши
                      </Button>
                    </Row>
                  </Col>
                )}
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Храненя</h1>
                <h5 className="text-on-back">02</h5>

                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={() =>
                      displayable ? setDisplayable(false) : setDisplayable(true)
                    }
                  >
                    <i className="tim-icons icon-plus" /> Добави хранене
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">
                      Свържете се с нас
                    </h1>
                    <h5 className="text-on-back">03</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Име</label>
                            <Input
                              defaultValue={
                                currentUser && currentUser.displayName
                              }
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Имейл</label>
                            <Input
                              defaultValue={currentUser && currentUser.email}
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Телефон</label>
                            <Input placeholder="001-12321345" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Фирма</label>
                            <Input placeholder="Сот 161" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Съобщение</label>
                            <Input placeholder="Здравейте..." type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        Изпрати
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Елате на място</h4>
                    <p>
                      Булевард Клошарево 23, <br />
                      2308 Мошино, <br />
                      България
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Обадете се</h4>
                    <p>
                      Васко Тигъра <br />
                      +359 876 321 762 <br />
                      Понеделник - Петък, 8:00-22:00
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
