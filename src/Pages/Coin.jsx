import { useParams } from "react-router-dom";
import "./Coin.css";
import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../Context/CoinContext";
import LineChart from "../Components/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinDate, setCoinData] = useState();
  const [histroyDate, setHistroy] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "	CG-oigdX2LnN6EyZx8YuNUZxUHs",
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchHistoryData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "	CG-oigdX2LnN6EyZx8YuNUZxUHs",
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`,
        options
      );
      const data = await response.json();
      setHistroy(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoryData();
  }, [currency, coinId]); // Include coinId in the dependency array

  if (coinDate && histroyDate) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinDate.image.large} alt={coinDate.name} />
          <p>
            <b>
              {coinDate.name} ({coinDate.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="coin-chart">
          <LineChart histroyDate={histroyDate} />
        </div>
        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinDate.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>
              {" "}
              {currency.symbol}{" "}
              {coinDate.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>
              {" "}
              {currency.symbol}{" "}
              {coinDate.market_data.market_cap[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hour High</li>
            <li>
              {" "}
              {currency.symbol}{" "}
              {coinDate.market_data.high_24h[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hour Low</li>
            <li>
              {" "}
              {currency.symbol}{" "}
              {coinDate.market_data.low_24h[currency.name].toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Coin;
