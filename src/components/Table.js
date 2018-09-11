import React from "react";
import styled from "styled-components";

const Table = props => {
  console.log("[Table] props: ", props);
  const { headerNodes, dataNodes } = props;
  return (
    <table>
      {_renderHeader(headerNodes)}
      {dataNodes.map(dataNode => _renderTableRow(dataNode))}
    </table>
  );
};

const _renderHeader = headerNodes => {
  return headerNodes.map(node => <Th>{node}</Th>);
};

const _renderTableRow = dataNodes => {
  return (
    <tr>
      {dataNodes.map(node => (
        <Td>{node}</Td>
      ))}
    </tr>
  );
};

const Th = styled.th``;

const Td = styled.td``;

export default Table;
