import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./navigation.styles.scss";
import Button from "../button/button.component";
import { useMediaQuery } from "react-responsive";
import SvgIcons from "../../../svg/SvgIcons";

const unauthLinks = [
  { title: "", label: "HOME", icon: "" },
  { title: "introduction", label: "INTRODUCTION", icon: "" },
  { title: "dapp", label: "DAPP", icon: "" },
  { title: "benefits", label: "BENEFITS", icon: "" },
  { title: "launchpad", label: "LAUNCHPAD", icon: "" },
  { title: "document", label: "DOCUMENT", icon: "" },
];

const authLinks = [
  { title: "dashboard", label: "Home", icon: "" },
  { title: "directs", label: "Directs", icon: "" },
  {
    title: "level-dividend",
    label: "Level Dividend",
    icon: "",
  },
  {
    title: "poi-dividend",
    label: "POI Dividend",
    icon: "",
  },
  { title: "rank", label: "Rank", icon: "" },
  { title: "buy-sell", label: "Buy/Sell Token", icon: "" },
  {
    title: "withdraw-dividend",
    label: "Withdraw Dividend",
    icon: "",
  },
  {
    title: "transactions",
    label: "Transactions",
    icon: "",
  },
];

const Navigation = () => {
  const navigate = useNavigate();
  const account = useSelector((state) => state.account);
  const [allLinks, setAllLinks] = useState(unauthLinks);
  const [show, setShow] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1100px)" });
  useEffect(() => {
    if (account) setAllLinks(authLinks);
  }, [account]);

  const checkSameElement = (path, nodeEl) =>
    path.some(
      (element) =>
        typeof element?.isEqualNode === "function" &&
        element?.isEqualNode(nodeEl)
    );

  const handleEventListener = ({ path }) => {
    if (show && isTabletOrMobile) {
      const menuElement =
        document.getElementsByClassName("nav-link-element")[0];
      const btnElement = document.getElementsByClassName("menu-icon-box")[0];
      if (path?.length && menuElement) {
        const check = checkSameElement(path, menuElement);
        const onButton = checkSameElement(path, btnElement);
        console.log(onButton, btnElement);
        if (!check && !onButton) {
          setShow(false);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleEventListener);
    return () => window.removeEventListener("click", handleEventListener);
  }, []);

  const handleLoginAndLogout = () => {
    if (account) {
      window.localStorage.removeItem("account");
      navigate("/");
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className={`nav-container ${account ? "" : "logged-out"} `}>
        <NavLink to="/">
          <img
            className="nav-logo-image"
            src={"/taurus.jpg"}
            alt="webCript"
            height="50px"
          />
        </NavLink>
        <div className="nav-link-items">
          {isTabletOrMobile && (
            <div className="menu-icon-box">
              <Button
                className="btn-sm"
                onClick={() => setShow((pProps) => !pProps)}
              >
                <SvgIcons type="menu-icon" />
              </Button>
            </div>
          )}
          {((show && isTabletOrMobile) || !isTabletOrMobile) && (
            <div className="nav-link-element">
              <>
                {allLinks.map((link) => (
                  <NavLink
                    to={`/${link.title}`}
                    key={link.title}
                    onClick={() => setShow(false)}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {link.label}
                  </NavLink>
                ))}

                <Button className="btn-md m-l-3" onClick={handleLoginAndLogout}>
                  {account ? "Logout" : "Login"}
                </Button>
              </>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
