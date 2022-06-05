import React, { useState } from "react";
import "./buysell.scss";
import { Tab, Tabs } from "react-bootstrap";
import { Button, Input } from "../core";
import { ShowInput } from "../core";

function BuyAndSell() {
  const [matricAmount, setMaticAmount] = useState();
  const [fntAmount, setFntAmount] = useState();
  const [matricOrFnt, setMatricOrFnt] = useState("matic");
  const isFnt = matricOrFnt === "fnt";
  const tabElement = (
    <div className="tab-container">
      <div className="flex-center bold-block">
        {isFnt
          ? "Sell Price: 1 FNT ~ 0.0000303269 Matic"
          : "Buy Price: 1Matic ~ 31922 FNT"}
      </div>
      <div className="text-right my-3 ">
        Balance:
        <span className="bold-block">104.4571 {isFnt ? "FNT" : "Matic"}</span>
      </div>
      <ShowInput
        title={isFnt ? "FNT Amount" : "Matic Amount"}
        value={isFnt ? fntAmount : matricAmount}
        onChange={(e) => {
          const value = e.target.value;
          isFnt ? setFntAmount(value) : setMaticAmount(value);
        }}
      />
      <div className="tab-container-buttons">
        {matricOrFnt === "fnt" && <Button className="btn-md mx-3">10%</Button>}
        <Button className="btn-md">25%</Button>
        <Button className="btn-md">50%</Button>
        <Button className="btn-md">75%</Button>
        <Button className="btn-md">100%</Button>
      </div>
      <div className="flex-center">
        <img
          onClick={() =>
            setMatricOrFnt((pProp) => (pProp === "matic" ? "fnt" : "matic"))
          }
          className="rotate-90"
          src="/assets/images/exchange.png"
          alt="exchange"
          width={30}
        />
      </div>
      <div>
        <ShowInput
          title={isFnt ? "Matic Amount" : "FNT Amount"}
          value={isFnt ? matricAmount : fntAmount || 1010}
        />
      </div>
      <div className="text-right">
        Deduction: <span className="bold-block">40%</span>
      </div>
      <div>
        <ShowInput
          value={1923}
          title={`${isFnt ? "Matic" : "FNT"} Amount Received`}
        />
      </div>
      <div className="flex-center my-3">
        <Button className="btn-md ">Buy</Button>
      </div>
    </div>
  );
  return (
    <div className="bg-default">
      <div className="buy-sell-container ">
        <Tabs
          defaultActiveKey="buy"
          activeKey={matricOrFnt}
          onSelect={(k) => {
            setMatricOrFnt(k);
          }}
          className="mb-3"
        >
          <Tab eventKey="matic" title="Buy Token">
            {tabElement}
          </Tab>
          <Tab eventKey="fnt" title="Sell Token">
            {tabElement}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default BuyAndSell;
