import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { storeAccountAddress } from "../../redux/actions/index";
import { ethers } from "ethers";
import { getContract } from "../../utils/constants";

// const contractABI = require("../../contractABI.json");

function Login() {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const navigate = useNavigate();
  const [btn, setConnButtonText] = useState(" ");
  const [invalid, setInvalid] = useState(false);

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new ethers.providers.Web3Provider(window.ethereum);
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      if (chainId != "0x89") {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x89" }],
          });
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code == 4902) {
            try {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x89",
                    rpcUrl: "https://polygon-rpc.com",
                  },
                ],
              });
            } catch (addError) {
              // handle "add" error
            }
          }
          // handle other "switch" errors
        }
        window.ethereum.on("chainChanged", handleChainChanged);
        function handleChainChanged(_chainId) {
          // We recommend reloading the page, unless you must do otherwise
          window.location.reload();
        }
      }

      await window.ethereum
        .enable()
        .then((result) => {
          var str = result[0];
          if (typeof result != "undefined" && result.length > 0) {
            var start5 = str.substring(0, 42);
            var joined = start5;
            setConnButtonText(joined);
            dispatch(storeAccountAddress(joined));
            window.localStorage.setItem("account", joined);
            navigate("/dashboard");
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (window.web3) {
      window.web3 = new ethers.providers.Web3Provider(window.ethereum);
      new ethers.providers.Web3Provider(window.ethereum).providers.HttpProvider(
        "https://polygon-rpc.com"
      );
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    // getbearxofwallet();
  }

  async function login() {
    loadWeb3();
    let contract = await getContract();
    // let login = await contract.doesUserExist(state.account);
    let login = await contract.doesUserExist(
      "0x46c7e313F9f5e8627Fc3d6EF70B310aDd280A856"
    );
    if (login) {
      navigate("/dashboard");
    } else {
      setInvalid(!invalid);
    }
  }

  useEffect(() => {
    loadWeb3();
  });

  return (
    <div className="background">
      <div className="login">
        <div className="window">
          <div className="content">
            <div className="logo">
              <img
                src="https://fakhama.network/FNT/assets/Fakhama.png"
                alt=""
              />
            </div>
            <div className="main">
              <form className="input">
                <h3>Sign In</h3>
                <div className="address">
                  <p>{btn === " " ? "" : "Address"}</p>
                  <span>{btn === " " ? "Address" : btn}</span>
                </div>
                <div className="loginbutton" onClick={login}>
                  login
                </div>
                <div className="join">
                  <h5>If you haven't joined yet!</h5>
                  <button className="joinbutton">join here</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
