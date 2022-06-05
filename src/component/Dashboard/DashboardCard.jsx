import React from "react";
import "./dashboard.scss";
function DashboardCard({ heading, point }) {
  return (
    <div className="dashboard-card-container">
      <img src="/assets/images/F.png" width={100} height={100} alt="coin" />
      <div className="card-desc">
        <div className="card-heading">{heading} </div>
        <div className="card-point">{point}</div>
      </div>
    </div>
  );
}

export default DashboardCard;
