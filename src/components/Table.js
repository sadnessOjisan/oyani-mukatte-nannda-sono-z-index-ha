import React from "react";
import styled from "styled-components";
import { lightgray } from "../constants/color";

const Table = props => {
  const { headerNodes, dataNodes } = props;
  return (
    <TableView>
      {_renderHeader(headerNodes)}
      {dataNodes.map(dataNode => _renderTableRow(dataNode))}
    </TableView>
  );
};

const _renderHeader = headerNodes => {
  return (
    <TableHeader>
      {headerNodes.map(node => (
        <Th>{node}</Th>
      ))}
    </TableHeader>
  );
};

const _renderTableRow = dataNodes => {
  return (
    <tr>
      {dataNodes.map((node, idx) => (
        <Td isFirst={idx === 0}>{node}</Td>
      ))}
    </tr>
  );
};

const TableView = styled.table`
  table-layout: fixed;
  width: 100%;
  height: 100%;
  border-spacing: 0;
`;

const TableHeader = styled.thead`
  background-color: ${lightgray};
`;

const Th = styled.th`
  width: 180px;
  padding: 12px;
  background-color: ${lightgray};
`;

const Td = styled.td`
  width: 180px;
  padding: 12px;
  background-color: ${props => props.isFirst && lightgray};
`;

export default Table;
