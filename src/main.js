import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Table from "./components/Table";
import data from "./constants/tableData";
import Tooltip from "./components/Tooltip";
import Text from "./components/Text";
import { lightgray } from "./constants/color";
import Modal from "./components/ModalPortal";
// import Modal from './components/Modal';
import "../vendor/css/reset.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.tableName = data.tableName;
    this.headerItems = this._constructHeaderNodes(
      data.tableName,
      data.frameworks
    );
    this.rowsItems = this._constructRowsData(
      data.frameworks,
      data.students,
      data.favorite
    );
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Text size={24}>JavaScript 成績表</Text>
          <TableViewr>
            <Table headerNodes={this.headerItems} dataNodes={this.rowsItems} />
          </TableViewr>
        </Wrapper>
        <Modal>
          <Text>も〜だる　ちるどれん</Text>
        </Modal>
      </React.Fragment>
    );
  }

  _constructHeaderNodes(tableName, headerItems) {
    return [
      <HeaderNode>
        <Text>{tableName}</Text>
      </HeaderNode>,
      ...headerItems.map(item => (
        <HeaderNode>
          <Text>{item}</Text>
          <Tooltip>aaaaaaaaaaaaaa</Tooltip>
        </HeaderNode>
      ))
    ];
  }

  _constructRowsData(frameworks, students, favorite) {
    return students.map(student => [
      <DataNode>
        <Text>{student}</Text>
      </DataNode>,
      ...frameworks.map(framework => (
        <DataNode>
          <Text>{data.favEnum[favorite[student][framework]]}</Text>
        </DataNode>
      ))
    ]);
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;

const TableViewr = styled.div`
  width: 80%;
  height: 600px;
  margin-top: 24px;
  border: solid 1px lightgray;
  overflow: scroll;
`;

const HeaderNode = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    margin-right: 8px;
  }
`;

const DataNode = styled.div`
  width: 100%;
  height: 100%;
`;

ReactDOM.render(<App />, document.getElementById("root"));
