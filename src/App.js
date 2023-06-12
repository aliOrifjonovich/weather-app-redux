import { createContext, useEffect, useState } from "react";
import Location from "./Components/Locations/Location";
import MainInfo from "./Components/MainInfo/MainInfo";
import MoreInfos from "./Components/moreInfos/MoreInfos";
import "./styles/style.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SearchAction } from "./Redux/TakingValue";
import img from ".//imgs/pngwing.com.png";
import clear from "./imgs/clear.jpg";
export const Context = createContext();

function App() {
  const dispatch = useDispatch();
  const [values, setValues] = useState("London");
  const [isLoding, setIsLoading] = useState(false);
  const APIKEY = "f6363b23154d6b7d3c0c40c1e8d6a98e";
  const data = useSelector((store) => store.search);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${values}&units=metric&appid=${APIKEY}`
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        const weatherKeys = {
          name: data.name,
          degree: Math.ceil(data.main.temp),
          huminity: data.main.humidity,
          coulds: data.clouds.all,
          wind: data.wind.speed,
          weather: data.weather[0].main,
          rain: data.rain?.["1h"],
        };
        dispatch(SearchAction(weatherKeys));
      });
  }, [values]);
  return (
    <Context.Provider
      value={{
        values,
        setValues,
      }}
    >
      <div className="App">
        {/* {data.weather == "Rain" || "Clouds" ? (
          <img src={img} alt="img" className="bg_img" />
        ) : (
          <img src={clear} alt="clear_img" className="bg_img" />
        )} */}
        <div className="first">
          <nav>
            <h1>the.weather</h1>
          </nav>
          <div className="mainInfo">
            <MainInfo />
          </div>
        </div>
        <div className="second">
            <Location />
            <MoreInfos />
          </div>
      </div>
    </Context.Provider>
  );
}

export default App;
