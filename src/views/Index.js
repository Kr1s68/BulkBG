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
import React from "react";
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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import "./animations.css";

import bigChartData from "variables/charts.js";
import { useHistory } from "react-router-dom";

export default function LandingPage() {
  const navigate = useHistory();

  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper" style={{ marginTop: "-100px" }}>
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-dark" style={{ fontWeight: "bold" }}>
                  BIKE🌲BG <br />
                </h1>
                <p
                  className="mb-3"
                  style={{ fontSize: "18px", color: "black" }}
                >
                  Добре дошли в BIKE BG, вашата крайна дестинация за всичко,
                  свързано с колоезденето! Независимо дали сте опитен колоездач,
                  или тепърва започвате, ние сме ви осигурили широка гама от
                  велосипеди, аксесоари и екипировка, които да отговарят на
                  нуждите на всеки колоездач. От елегантни шосейни велосипеди до
                  здрави планински велосипеди, от удобни градски кросоувъри до
                  високопроизводителни хибриди - ние имаме идеалното колело за
                  вас. Разгледайте колекцията ни от най-добрите марки, опознайте
                  най-новите тенденции и се подгответе за следващото си
                  приключение на две колела с BIKE BG. Успешно каране!
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">Към магазина</p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="/store"
                    onClick={() => navigate.push("/store")}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
              </Col>
              <Col lg="4" md="5">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                  className="bikeImage"
                  onClick={() => navigate.push("/store")}
                >
                  <h2
                    style={{
                      width: "100%",
                      marginRight: "20%",
                    }}
                    className="buttonText"
                  >
                    To Bikes >
                  </h2>
                  <img
                    width="420"
                    height="180"
                    src="https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/1024/external-bike-public-service-photo3ideastudio-gradient-photo3ideastudio.png"
                    alt="external-bike-public-service-photo3ideastudio-gradient-photo3ideastudio"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Container>
          <h1
            className="text-center"
            style={{ color: "black", marginBottom: "200px" }}
          >
            Нашите Препоръки
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div className="homePageBikeImgSecond">
              <div className="cover">
                <h2 className="text-center" style={{ color: "black" }}>
                  Тrek Marlin 6 Gen 2
                </h2>
                <p style={{ color: "black" }}>
                  Marlin 6 е планински велосипед за крос-кънтри, създаден за
                  ефективно офроуд каране с вилка с окачване, която се заключва,
                  и проста задвижваща система 1x. Създаден е за планинско
                  колоездене, но е оборудван и с функции като стойки за багажник
                  и стойка за ритник, които го правят чудесен избор за
                  приключенски ежедневни пътувания.
                </p>
                <h2
                  className="text-center"
                  style={{ color: "black", marginTop: "210px" }}
                >
                  1199лв
                </h2>
                <Button
                  className="btn-round"
                  color="primary"
                  size="lg"
                  style={{ marginLeft: "30%" }}
                  onClick={() => navigate.push("/MountainBike3")}
                >
                  Към Велосипеда
                </Button>
              </div>
              <img
                src="https://img001.prntscr.com/file/img001/FVPGvtnrTvasGld_8J1T1g.png"
                alt="kur"
              ></img>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div className="homePageBikeImgFirst">
              <img
                src="https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/DomaneAL4-24-41607-C-Portrait"
                alt="kur"
              ></img>
              <div className="cover">
                <h2 className="text-center" style={{ color: "black" }}>
                  Domane AL 4 Gen 4
                </h2>
                <p style={{ color: "black" }}>
                  Domane AL 4 е бърз и универсален шосеен велосипед, който е
                  идеална отправна точка за всеки, който иска да започне да кара
                  шосеен велосипед. С рамка Alpha Aluminum, просвет за по-големи
                  гуми, 10-скоростна трансмисия Shimano Tiagra, монтиране на
                  горната тръба и удобна геометрия за цял ден - Domane AL 4 е
                  идеален за обикновено въртене на педалите, групови карания,
                  бързи пътувания и дори за излизане извън асфалтираните пътеки
                  до повечето чакълени пътища.
                </p>
                <h2
                  className="text-center"
                  style={{ color: "black", marginTop: "150px" }}
                >
                  3199лв
                </h2>
                <Button
                  className="btn-round"
                  color="primary"
                  size="lg"
                  style={{ marginLeft: "30%" }}
                  onClick={() => navigate.push("/RoadBike2")}
                >
                  Към Велосипеда
                </Button>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div className="homePageBikeImgSecond">
              <div className="cover">
                <h2 className="text-center" style={{ color: "black" }}>
                  FX 1 Disc
                </h2>
                <p style={{ color: "black" }}>
                  FX 1 Disc е лек алуминиев хибриден велосипед, който изглежда
                  страхотно и се кара също толкова добре. Той има много
                  предавки, за да можете да се движите удобно по всеки терен, а
                  мощните дискови спирачки ви осигуряват уверена спирачна сила,
                  независимо дали вали или грее. Той е идеален за всеки, който
                  иска да излиза повече навън, да прави малко упражнения или да
                  се придвижва до работа с универсален велосипед с доживотна
                  гаранция.
                </p>
                <h2
                  className="text-center"
                  style={{ color: "black", marginTop: "170px" }}
                >
                  999лв
                </h2>
                <Button
                  className="btn-round"
                  color="primary"
                  size="lg"
                  style={{ marginLeft: "30%" }}
                  onClick={() => navigate.push("/DirtBike2")}
                >
                  Към Велосипеда
                </Button>
              </div>
              <img
                src="https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/FX1Disc_22_35001_B_Portrait"
                alt="kur"
              ></img>
            </div>
          </div>
        </Container>

        <section className="section section-lg">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid justify-content-center">
                  <Col lg="3"></Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Button
                className="btn-round"
                color="primary"
                size="lg"
                style={{ marginTop: "90px", marginBottom: "40px" }}
                onClick={() => navigate.push("/store")}
              >
                Към магазина
              </Button>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
