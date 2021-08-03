 
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import LastRequestsTable from "components/Charts/LastRequestsTable";
import RequestAmountTable from "components/Charts/RequestAmountTable";
import RequestAmountByMethodChart from "components/Charts/RequestAmountByMethodChart";
import RequestPerDayChart from "components/Charts/RequestPerDayChart";
import RequestAvgTimePerDay from "components/Charts/RequestAvgTimePerDay";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <RequestPerDayChart />
         
          </Col>
        </Row>
        <Row>
          <Col lg="4">
           <RequestAvgTimePerDay />
          </Col>
          <Col lg="4">
          <RequestAmountByMethodChart/>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Completed Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 12,100K
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col lg="8" md="12">
        <LastRequestsTable/>
          </Col>
        <Col lg="4" md="12">
        <RequestAmountTable/>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
