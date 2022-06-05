import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getContract } from "../../utils/constants";
import { Table } from "../core";

const header = ["Srno", "Matic Amount", "FNT Amount", "FNT Rate", "Type"];

// dummy data
const data = [{}, {}, {}, {}];

function Transactions() {
  const account = useSelector((state) => state.account);
  const [transactions, setTransactions] = useState([]);
  const getTransaction = async () => {
    const contract = await getContract();
    const getTransactions = await contract.getUserTransactions(account);
    setTransactions(getTransactions);
  };
  useEffect(() => {
    const { ethereum } = window;
    console.log(ethereum);
    if (ethereum) {
      getTransaction();
    } else window.alert("ethereum wallet not found");
  }, []);
  console.log(transactions);
  return (
    <div>
      <Table title={"TRANSACTION HISTORY"} tHead={header}>
        <tbody>
          {data.map((item, rIndex) => (
            <tr key={`rKey=${rIndex}`}>
              {header.map((el, dIndex) => (
                <td>item {rIndex + dIndex}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Transactions;
