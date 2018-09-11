import React from "react";
import styled from "styled-components";
import { lightgray } from "../constants/color";
import zIndex from "../constants/z-index";

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
      {headerNodes.map((node, idx) => (
        <Th isFirst={idx === 0}>{node}</Th>
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
  z-index: ${zIndex.table};
`;

const TableHeader = styled.thead`
  background-color: ${lightgray};
`;

const Th = styled.th`
  width: 180px;
  padding: 12px;
  background-color: ${lightgray};
  position: sticky;
  top: 0;
  left: ${props =>
    props.isFirst && 0}px; // これがないとスクロール時に横に流れる
  z-index: ${props =>
    props.isFirst
      ? 2
      : 0}; // これがないとスクロールされる要素が上に重なり、固定しているように見えない
`;

const Td = styled.td`
  width: 180px;
  padding: 12px;
  background-color: ${props => props.isFirst && lightgray};
  position: ${props => props.isFirst && "sticky"};
  left: ${props => props.isFirst && 0}px;
`;

export default Table;
