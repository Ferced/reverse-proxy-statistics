/*eslint-disable*/
import React, { useState } from "react";
import axios from "axios";
// reactstrap components
import {
    Card,
    Table,
    CardHeader,
    CardBody,
    CardTitle,} from "reactstrap";

function LastRequestsTable() {
const [data, setData] = useState([]);
    
    React.useEffect(() => {
        axios({
            method: 'get',
            url: process.env.REACT_APP_API_URL + process.env.REACT_APP_API_ACCESS_LOGS
        })
        .then(function (response) {
            setData(response.data.data)
            });
        }, []);
    
  return (
    <Card>
    <CardHeader>
      <CardTitle tag="h4"></CardTitle>
      <h4 className="title d-inline">Ultimas 100 requests</h4>
      <p className="card-category d-inline" style={{marginLeft:"5px"}}> Hoy</p>
     
    </CardHeader>
    <CardBody style={{overflowY:"auto",maxHeight:"500px"}}>
      <Table className="tablesorter" responsive  >
        <thead className="text-primary">
          <tr>
            <th>IP</th>
            <th>METODO</th>
            <th>TIEMPO</th>
            <th>PATH</th>
          </tr>
        </thead>
        <tbody>
          {data.map((request) => (
              <tr>
              <td> {request.ip} </td>
              <td> {request.method}</td>
              <td> {(new Date(request.request_end_time).getTime() - new Date(request.request_start_time).getTime()) /1000 } </td>
              <td> {request.path} </td>
              </tr>
    ))}
        </tbody>
      </Table>
    </CardBody>
  </Card>
  );
}

export default LastRequestsTable;
