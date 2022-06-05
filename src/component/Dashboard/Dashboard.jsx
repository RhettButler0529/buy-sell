import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./dashboard.scss";
import DashboardCard from "./DashboardCard";
import LinkCard from "../core/LinkCard/LinkCard";
import { useNavigate } from "react-router-dom";
import { getContract } from "../../utils/constants";

function Dashboard() {
  const state = useSelector((state) => state);
  const navigate = useNavigate();

  const [deposit, setDeposit] = useState("0 Matic");
  const [balance, setBalance] = useState("0 FNT");
  const [rank, setRank] = useState("");
  const [levelDividen, setLevelDividen] = useState(0);
  const [ROIDividen, setROIDividen] = useState(0);
  const [rate, setRate] = useState(1);
  const [dividendWithdrawn, setDividendWithdrawn] = useState(0);
  const [business, setBusiness] = useState(0);
  const [nextRank, setNextRank] = useState("Business for");
  const [nextBusiness, setNextBusiness] = useState("Business for");
  const [directs, setDirects] = useState(0);

  async function getInformation() {
    let contract = await getContract();
    let user_id = await contract.map_UserIds(
      "0x46c7e313F9f5e8627Fc3d6EF70B310aDd280A856"
    );
    let user_info = await contract.getUserInfo(user_id);
    console.log(user_info);
    setBalance(user_info.CoinsHolding + " FNT");
    setRank(user_info.CurrentRankName);
    setLevelDividen(Number(user_info.TotalLevelDividend));
    setROIDividen(Number(user_info.TotalROIDividend));
    setRate(
      (1 / user_info.CoinRate).toFixed(String(user_info.CoinRate).length - 1)
    );
    setDividendWithdrawn(Number(user_info.UserInfo.DividendWithdrawn));
    setBusiness(Number(user_info.UserInfo.Business));
    setNextRank("Business for " + user_info.NextRankName);
    setNextBusiness(Number(user_info.RequiredBusinessForNextRank));
    setDirects(user_info.UserInfo.DirectIds.length);
  }

  useEffect(() => {
    if (state.account == "") {
      navigate("/login");
    } else {
      getInformation();
    }
  });

  return (
    <div className="dashboard-container">
      <div className="marquee-element">
        <marquee attribute_name="attribute_value">
          <div
            className="marq-content"
            aria-label="Current FNT Price"
            role="banner"
            direction="left"
            loop="infinite"
          >
            <h6> Current FNT Price </h6> <h4>1 FNT ~ {rate} Matic</h4>
          </div>
        </marquee>
      </div>
      <div className="dashboard-cards">
        <DashboardCard heading="Deposit" point={deposit} />
        <DashboardCard heading="Coins Holding" point={balance} />
        <DashboardCard heading="Level Dividend" point={levelDividen} />
        <DashboardCard heading="POI Dividend" point={ROIDividen} />
        <DashboardCard heading="Dividend Withdrawn" point={dividendWithdrawn} />
        <DashboardCard heading="Total Business" point={business} />
        <DashboardCard heading={nextRank} point={nextBusiness} />
        <DashboardCard heading="Current Rank" point={rank} />
        <DashboardCard heading="Total Directs" point={directs} />
      </div>
      <div>
        <LinkCard
          link={` https://fakhama.network/FNT/auth/register/MTk3`}
          heading="Wallet Address"
        />
        <LinkCard
          link={` https://fakhama.network/FNT/auth/register/MTk3`}
          heading="Wallet Address"
        />
      </div>
    </div>
  );
}

export default Dashboard;
