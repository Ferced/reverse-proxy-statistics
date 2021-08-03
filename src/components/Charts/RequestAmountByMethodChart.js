
/*eslint-disable*/
import React, { useState } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";

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


function RequestAmountByMethodChart() {
  const [data_amounts, setData] = useState(0);

 
  React.useEffect(() => {

    // METHOD COUNT
    axios({
      method: 'get',
      url: process.env.REACT_APP_API_URL + process.env.REACT_APP_API_COUNT+"method"
      
    })
      .then(function (response) {
        setData(response.data)
      });

    }, []);
    let chartExample3 = {
        data: (canvas) => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
          gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
          gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
      
          return {
            labels: Object.keys(data_amounts),
            datasets: [
              {
                label: "Requests",
                fill: true,
                backgroundColor: gradientStroke,
                hoverBackgroundColor: gradientStroke,
                borderColor: "#d048b6",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: Object.values(data_amounts),
              },
            ],
          };
        },
        options: {
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
                gridLines: {
                  drawBorder: false,
                  color: "rgba(225,78,202,0.1)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  suggestedMin: 60,
                  suggestedMax: 120,
                  padding: 20,
                  fontColor: "#9e9e9e",
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  drawBorder: false,
                  color: "rgba(225,78,202,0.1)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 20,
                  fontColor: "#9e9e9e",
                },
              },
            ],
          },
        },
      };
  return (
    <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Periodo: una semana</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-primary" />{" "}
                  Cantidad de requests por metodo
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
  );
}

export default RequestAmountByMethodChart;
