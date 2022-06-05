import React, { useState } from "react";
import "./withdraw.scss";
import { ShowInput, Button } from "../core";

function WithdrawDivident() {
  const [amount, setAmount] = useState(0.1);
  return (
    <div className="withdraw-container">
      <header>Withdraw Dividend</header>
      <div className="withdraw-container-body-card">
        <div className="withdraw-container-body-card-label">
          Dividend Balance:<span> 0.92700941 Matic</span>
        </div>
        <ShowInput
          title={"Amount to Withdraw (Matic)"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="withdraw-container-body-card-label">
          Deduction:<span>10%</span>
        </div>
        <ShowInput
          title={"Amount Received (Matic)"}
          value={0.09000000000000001}
        />
        <div className="withdraw-container-button">
          <Button className="btn-md">Withdraw</Button>
        </div>
      </div>
    </div>
  );
}

export default WithdrawDivident;
