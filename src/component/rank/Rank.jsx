import React from "react";
import { Table } from "../core";

const header = ["Srno", "Rank Name", "Business", "Status"];

// dummy data
const data = [{}, {}, {}, {}];

function Rank() {
  return (
    <div>
      <Table title={"Rank"} tHead={header}>
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

export default Rank;
