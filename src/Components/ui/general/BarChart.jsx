/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ contestants }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const names = contestants?.map((item) => item.name);
  const votes = contestants?.map((item) => item.vote);
  console.log(names, votes);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: [...names],
        datasets: [
          {
            label: "Votes",
            data: [...votes],
            borderColor: [
              "#400095",
              "#000000",
              "#EA5322",
              "#6E5782",
              "#6E5782",
            ],

            borderWidth: 2,
            backgroundColor: [
              "#40009550",
              "#00000050",
              "#EA532250",
              "#6E578620",
              "#6E578670",
            ],
          },
        ],
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="my-12 w-full lg:max-w-[800px] mx-auto text-base font-semibold">
      <canvas ref={chartRef} className="text-base font-bold" />
    </div>
  );
};

export default BarChart;
