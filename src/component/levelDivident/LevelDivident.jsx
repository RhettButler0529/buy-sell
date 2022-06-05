import React from "react";
import { Table } from "../core";

const header = [
  "Level",
  "Dividend Amount",
  "Percentage",
  "Business",
  "Members Count",
];

// dummy data
const data = [{}, {}, {}, {}];

function LevelDivident() {
  return (
    <div>
      <Table tHead={header} title={"Level Dividend"}>
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

export default LevelDivident;
