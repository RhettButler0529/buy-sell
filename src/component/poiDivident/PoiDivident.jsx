import React from "react";
import { Table } from "../core";

const header = [
  "Srno",
  "Distribution Amount",
  "Rate (Matic per FNT)",
  "Total FNT Supply",
  "Tokens Holding",
  "Amount Received",
  "On",
];

// dummy data
const data = [{}, {}, {}, {}];

function PoiDivident() {
  return (
    <div>
      <Table title={"POI Dividend"} tHead={header}>
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

export default PoiDivident;
