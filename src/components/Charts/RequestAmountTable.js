
/*eslint-disable*/
import React, { useState } from "react";
import axios from "axios";
import classNames from "classnames";
// reactstrap components
import {
  Card,
  Table,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  ButtonGroup
} from "reactstrap";

function RequestAmountTable() {
  const [ip_data_amounts, setDataIp] = useState([]);
  const [path_data_amounts, setDataPath] = useState([]);
  const [data_amounts, setData] = useState([]);
  const [bigChartData, setbigChartData] = useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  React.useEffect(() => {
    // IP COUNT
    axios({
      method: 'get',
      url: process.env.REACT_APP_API_URL + process.env.REACT_APP_API_COUNT+"ip"
       
    })
      .then(function (response) {
        setDataIp(response.data)
        setData(response.data)
      });


    //PATH COUNT
    axios({
      method: 'get',
      url: process.env.REACT_APP_API_URL + process.env.REACT_APP_API_COUNT+"path"
    })
      .then(function (response) {
        setDataPath(response.data)
      });

  }, []);



  return (
    <Card >
      <CardHeader>
        <CardTitle tag="h4"></CardTitle>
        <h4 className="title d-inline">Cantidad de requests por ip / path</h4>
        <p className="card-category d-inline" style={{ marginLeft: "5px" }}> Hoy</p>
        <ButtonGroup
          className="btn-group-toggle float-right"
          data-toggle="buttons"
        >
          <Button
            tag="label"
            className={classNames("btn-simple", {
              active:data_amounts === ip_data_amounts,
            })}
            color="info"
            id="0"
            size="sm"
            onClick={() =>  setData(ip_data_amounts)}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              IP
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-single-02" />
            </span>
          </Button>
          <Button
            color="info"
            id="1"
            size="sm"
            tag="label"
            className={classNames("btn-simple", {
              active: data_amounts === path_data_amounts,
            })}
            onClick={() => setData(path_data_amounts)}
          >
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
              PATH
            </span>
            <span className="d-block d-sm-none">
              <i className="tim-icons icon-gift-2" />
            </span>
          </Button>

        </ButtonGroup>
      </CardHeader>
      <CardBody style={{overflowY:"auto",maxHeight:"495px"}}>
        <Table style={{ overflow: "hidden" }} className="tablesorter" responsive>
          <thead className="text-primary">
            <tr>
              <th>IP</th>
              <th>CANTIDAD</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data_amounts).map((key) => (
              <tr>
                <td> {key} </td>
                <td> {data_amounts[key]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

export default RequestAmountTable;
