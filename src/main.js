import React from "react";
import ReactDOM from "react-dom";
import Table from "./components/Table";
import data from "./constants/tableData";
import "../vendor/css/reset.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.tableName = data.tableName;
    this.headerItems = data.frameworks;
    this.rowsItems = this._constructRowsData(
      data.frameworks,
      data.students,
      data.favorite
    );
  }

  render() {
    return (
      <Table
        headerNodes={[this.tableName, ...this.headerItems]}
        dataNodes={this.rowsItems}
      />
    );
  }

  _constructRowsData(frameworks, students, favorite) {
    return students.map(student => [
      student,
      ...frameworks.map(framework => favorite[student][framework])
    ]);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
