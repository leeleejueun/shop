import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

const Detail = (props) => {
  let [num, setNum] = useState("");
  let [alert1, setAlert1] = useState(true);
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => {
    return x.id == id;
  });
  useEffect(() => {
    setTimeout(() => {
      setAlert1(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("경고경고");
    }
  }, [num]);

  return (
    <div className="container">
      {alert1 == true ? (
        <div className="alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <YellowBtn bg="yellow">버튼</YellowBtn>
      <YellowBtn bg="blue">버튼</YellowBtn>
      {isNaN(id) ? (
        <div>페이지가 없습니다</div>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                parseInt(id) + 1
              }.jpg`}
              width="100%"
              alt={id}
            />
          </div>
          <div className="col-md-6">
            <input onChange={(e) => setNum(e.target.value)} />
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
