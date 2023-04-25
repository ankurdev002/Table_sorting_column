import React, { useContext } from "react";
import { TableData } from "../TableContext/Context";

const Table = () => {
  const DataValues = useContext(TableData);
  return (
    <div className="contain">
      <div className="backdrop">
        <table>
          <thead>
            <tr>{DataValues.heading}</tr>
          </thead>
          <tbody>{DataValues.headingData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
