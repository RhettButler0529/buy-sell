import React from "react";
import "./table.scss";
import { Table } from "react-bootstrap";
import { TableBlock } from "../../HOC";

function aTable({ title, tHead, children }) {
  return (
    <TableBlock title={title}>
      <Table responsive striped hover className="table-box">
        {tHead?.length && (
          <thead>
            <tr>
              {tHead?.map((item, index) => (
                <th key={`key=${index}`}>{item}</th>
              ))}
            </tr>
          </thead>
        )}
        {children}
        {/* children include tBody tag with tr and td    */}
      </Table>
    </TableBlock>
  );
}

export default aTable;
