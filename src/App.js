import "./App.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import bg from "./sweet.jpg";
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">JUJUCLUB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              LEE
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(-1);
              }}
            >
              JU
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              EUN
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>
              <button
                onClick={() => {
                  let copy = [...shoes];
                  let titleSort = copy.sort(function (a, b) {
                    if (a.title < b.title) {
                      return -1;
                    } else if (a.title > b.title) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                  console.log(titleSort);
                  setShoes(titleSort);
                }}
              >
                정렬
              </button>
              <Container>
                <Row>
                  {shoes.map((a, i) => {
                    return <Product key={i} shoes={a} i={i} />;
                  })}
                </Row>
              </Container>
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>맴버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <Link to="/">홈</Link>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <Link to="/">홈</Link>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Product(props) {
  return (
    <Col>
      <Link to={`/detail/${props.i}`}>
        <img
          src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
          width="80%"
          alt={props.i}
        />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Link>
    </Col>
  );
}

export default App;
