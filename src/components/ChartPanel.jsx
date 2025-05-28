import React, { useState, useEffect } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import sampleData from "../data/sampleData.json";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels
);

const ChartPanel = () => {
    const [chartType, setChartType] = useState("bar");
    const [isDarkMode, setIsDarkMode] = useState(
        document.body.dataset.theme === "dark"
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.body.dataset.theme === "dark");
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        return () => observer.disconnect();
    }, []);

    const backgroundColors = isDarkMode
        ? [
              "rgba(255, 99, 132, 0.9)",
              "rgba(24, 153, 240, 0.9)",
              "rgba(255, 206, 86, 0.9)",
              "rgba(75, 192, 192, 0.9)",
              "rgba(153, 102, 255, 0.9)",
              "rgba(255, 159, 64, 0.9)",
          ]
        : [
              "rgba(255, 99, 132, 0.7)",
              "rgba(24, 153, 240, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
              "rgba(153, 102, 255, 0.7)",
              "rgba(255, 159, 64, 0.7)",
          ];

    const chartData = {
        labels: sampleData.labels,
        datasets: [
            {
                label: sampleData.label,
                data: sampleData.data,
                backgroundColor: backgroundColors,
                borderColor: isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                // titleColor: isDarkMode ? "#000" : "#000",
                // bodyColor: isDarkMode ? "#000" : "#000",
                // footerColor: isDarkMode ? "#000" : "#000",
            },
            // datalabels: {
            //     color: isDarkMode ? "#000" : "#000",
            //     font: {
            //         weight: "bold",
            //     },
            //     formatter: (value) => value,
            // },
        },
        scales: {
            x: {
                ticks: {
                    color: isDarkMode ? "#fff" : "#000",
                },
            },
            y: {
                ticks: {
                    color: isDarkMode ? "#fff" : "#000",
                },
            },
        },
    };

    const renderChart = () => {
        switch (chartType) {
            case "bar":
                return <Bar data={chartData} options={options} plugins={[ChartDataLabels]} />;
            case "line":
                return <Line data={chartData} options={options} plugins={[ChartDataLabels]} />;
            case "pie":
                return <Pie data={chartData} options={options} plugins={[ChartDataLabels]} />;
            default:
                return null;
        }
    };

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
            <h2>📊 Student Marks Dashboard</h2>

            <div style={{ marginBottom: "1rem" }}>
                <label style={{ marginRight: "10px" }}>Choose Chart Type:</label>
                <select
                    value={chartType}
                    onChange={(e) => setChartType(e.target.value)}
                >
                    <option value="bar">Bar</option>
                    <option value="pie">Pie</option>
                    <option value="line">Line</option>
                </select>
            </div>

            <div
                style={{
                    backgroundColor: "var(--card-bg)",
                    padding: "1rem",
                    borderRadius: "8px",
                    boxShadow: "var(--card-shadow)",
                }}
            >
                {renderChart()}
            </div>
        </div>
    );
};

export default ChartPanel;
