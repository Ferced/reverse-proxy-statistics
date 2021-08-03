
/*eslint-disable*/
import React, { useState } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import classNames from "classnames";

// reactstrap components
import {
  Card,
  Table,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  ButtonGroup,
  Col,
  Row
} from "reactstrap";
import { map } from "jquery";


function RequestPerDayChart() {
    const [bigChartData, setbigChartData] = useState("data1");
    const [dataAll, setDataAll] = useState(0);
    const [dataErrors, setDataErrors] = useState(0);
    const [data, setData] = useState(0);
    const setBgChartData = (name) => {
      setbigChartData(name);
    };
    const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab','Dom'];
    let arr = []
    //   const [data_amounts, setData] = useState();

 
  React.useEffect(() => {

    // ALL REQUESTS
    axios({
      method: 'get',
      url: process.env.REACT_APP_API_URL + process.env.REACT_APP_API_ACCESS_LOGS
      
    })
      .then(function (response) {
        arr = []
        // console.log(response)
        response.data.data.map((request) => (
            arr.push(days[new Date(request.request_start_time).getDay()])
        ))
        const count = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map())
        setDataAll(Array.from(count.values()))
        setData(Array.from(count.values()))
        // console.log(Array.from(count.values()))
        // console.log(count)
      });


      axios({
        method: 'get',
        url: process.env.REACT_APP_API_URL + process.env.REACT_APP_API_ERRORS
        
      })
        .then(function (response) {
          // console.log(response)
          arr=[]
          response.data.data.map((request) => (
              arr.push(days[new Date(request.request_start_time).getDay()])
          ))
          const count = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map())
          console.log(Array.from(count.values()))
          console.log(process.env.REACT_APP_API_URL + process.env.REACT_APP_API_ERRORS)
          setDataErrors(Array.from(count.values()))
          
          console.log(count)
        });




    }, []);
    

    let chart1_2_options = {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          backgroundColor: "#f5f5f5",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.0)",
                zeroLineColor: "transparent",
              },
              ticks: {
                suggestedMin: 60,
                suggestedMax: 125,
                padding: 20,
                fontColor: "#9a9a9a",
              },
            },
          ],
          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.1)",
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a",
              },
            },
          ],
        },
      };
    let chartExample1 = {
        data1: (canvas) => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
          gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
          gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      
          return {
            labels: days,
            datasets: [
              {
                label: "Requests",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#1f8ef1",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#1f8ef1",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#1f8ef1",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: data,
              },
            ],
          };
        },
        data2: (canvas) => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
          gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
          gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      
          return {
            labels: [
              "LUN",
              "MAR",
              "MIE",
              "JUE",
              "VIE",
              "SAB",
              "DOM",
           
            ],
            datasets: [
              {
                label: "Requests",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#1f8ef1",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#1f8ef1",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#1f8ef1",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: [80, 120, 105, 110, 95, 105, 90],
              },
            ],
          };
        },
        data3: (canvas) => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
          gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
          gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      
          return {
            labels: [
              "JAN",
              "FEB",
              "MAR",
              "APR",
              "MAY",
              "JUN",
              "JUL",
              "AUG",
              "SEP",
              "OCT",
              "NOV",
              "DEC",
            ],
            datasets: [
              {
                label: "Requests",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#1f8ef1",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#1f8ef1",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#1f8ef1",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
              },
            ],
          };
        },
        options: chart1_2_options,
      };
      
  return (
    <Card className="card-chart">
    <CardHeader>
      <Row>
        <Col className="text-left" sm="6">
          <h5 className="card-category">periodo: una semana</h5>
          <CardTitle tag="h2">Cantidad de request por dia</CardTitle>
        </Col>
        <Col sm="6">
          <ButtonGroup
            className="btn-group-toggle float-right"
            data-toggle="buttons"
          >
            <Button
              tag="label"
              className={classNames("btn-simple", {
                active: data === dataAll,
              })}
              color="info"
              id="0"
              size="sm"
              onClick={() =>setData(dataAll)}
            >
              <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                Todo
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
                active: data === dataErrors,
              })}
              onClick={() => setData(dataErrors)}
            >
              <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                Errores
              </span>
              <span className="d-block d-sm-none">
                <i className="tim-icons icon-gift-2" />
              </span>
            </Button>
            
          </ButtonGroup>
        </Col>
      </Row>
    </CardHeader>
    <CardBody>
      <div className="chart-area">
        <Line
          data={chartExample1[bigChartData]}
          options={chartExample1.options}
        />
      </div>
    </CardBody>
  </Card>
  );
}

export default RequestPerDayChart;
