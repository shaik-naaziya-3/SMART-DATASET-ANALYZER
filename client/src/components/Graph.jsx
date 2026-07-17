import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function Graph({ data }) {

    if (!data) {

        return null;

    }

    const graphData = {

        labels: Object.keys(data),

        datasets: [

            {

                label: "Model Accuracy (%)",

                data: Object.values(data),

                backgroundColor: [
                    "#38bdf8",
                    "#0ea5e9",
                    "#0284c7",
                    "#0369a1"
                ],

                borderRadius: 10,

                borderWidth: 1

            }

        ]

    };


    const options = {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                display: true,

                position: "top"

            },

            title: {

                display: true,

                text: "Machine Learning Model Comparison"

            }

        },

        scales: {

            y: {

                beginAtZero: true,

                max: 100,

                ticks: {

                    stepSize: 10

                }

            }

        }

    };


    return (

        <div className="card">

            <h2>

                MODEL COMPARISON GRAPH

            </h2>

            <div
                style={{
                    height: "400px",
                    width: "100%"
                }}
            >

                <Bar
                    data={graphData}
                    options={options}
                />

            </div>

        </div>

    );

}


export default Graph;