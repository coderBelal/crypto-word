import { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ histroyDate }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]]; // Change to "Date" instead of "date"
    if (histroyDate.prices) {
      histroyDate.prices.map((item) => {
        dataCopy.push([
          new Date(item[0]), // Use Date object instead of formatted string
          item[1],
        ]);
      });
      setData(dataCopy);
    }
  }, [histroyDate]);

  return (
    <div>
      <Chart chartType="LineChart" data={data} height="100%" legendToggle />
    </div>
  );
};

export default LineChart;
