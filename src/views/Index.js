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
                <h1 className="text-white">
                  BLK•BG <br />
                </h1>
                <p className="text-white mb-3" style={{ fontSize: "18px" }}>
                  Добре дошли в Bulk BG, вашият източник на естествени и
                  ефективни хранителни добавки. Нашите внимателно разработени
                  хранителни добавки са предназначени да поддържат цялостното ви
                  здраве и благоразположение. Разгледайте нашия уебсайт, за да
                  научите повече за нашите продукти и за ангажимента ни за
                  качество и устойчивост. Заедно нека направим крачка към
                  по-здравословен живот.
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
                <img
                  src="https://img.icons8.com/nolan/1024/heart-with-pulse.png"
                  alt="kur"
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Вашата най-добра полза</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <img
                        src="https://img.icons8.com/external-ddara-lineal-ddara/64/e14eca/external-protein-health-ddara-lineal-ddara.png"
                        alt="kur"
                        style={{ height: "50px" }}
                      />
                      <h4 className="info-title">Защо протеин?</h4>
                      <hr className="line-primary" />
                      <p>
                        Протеиновите добавки поддържат здрави мускули, кости и
                        имунна функция и могат да помогнат за предотвратяване на
                        преяждането. Изборът на висококачествени добавки е важен
                        за оптималното здраве.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <img
                        src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/ff8d72/external-protein-fitness-and-diet-xnimrodx-lineal-xnimrodx.png"
                        alt="kur"
                        style={{ height: "50px" }}
                      />
                      <h4 className="info-title">Защо креатин?</h4>
                      <hr className="line-warning" />
                      <p>
                        Добавките с креатин могат да увеличат силата и размера
                        на мускулите, да подобрят ефективността на упражненията
                        и да осигурят други ползи за здравето.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <img
                        src="https://img.icons8.com/external-out-line-pongsakorn-tan/64/00f2c3/external-biceps-health-out-line-pongsakorn-tan.png"
                        alt="kur"
                        style={{ height: "50px" }}
                      />
                      <h4 className="info-title">Защо хранителни добавки?</h4>
                      <hr className="line-success" />
                      <p>
                        Хранителните добавки могат да осигурят основни
                        хранителни вещества, които може да липсват в диетата ви,
                        което може да подпомогне цялостното здраве и
                        здравословно състояние.
                      </p>
                    </div>
                  </Col>
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
