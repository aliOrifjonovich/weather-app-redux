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
  const [isLoding, setIsLoading] = useState(true);
  const APIKEY = "f6363b23154d6b7d3c0c40c1e8d6a98e";
  const data = useSelector((store) => store.search);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${values}&units=metric&appid=${APIKEY}`
      )
      .then((response) => {
        const data = response.data;
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
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [values]);
  return (
    <Context.Provider
      value={{
        values,
        setValues,
      }}
    >
      <div className="App">
        {isLoding ? (
          <div className="loading_wrapper">
            <h1 className="loading">loading...</h1>
          </div>
        ) : (
          <>
            <div className="img_wrapper">
              {data.weather == "Clouds" || data.weather == "Rain" ? (
                <img src={img} width="250px" height="250px" alt="img" />
              ) : (
                <img src={clear} width="250px" height="250px" alt="img" />
              )}
            </div>
            <div className="first">
              <nav>
                <h1>the.weather</h1>
              </nav>
              <div className="mainInfo">
                {console.log("data.name", data.name, "values", values)}
                {data.name == values ? (
                  <MainInfo />
                ) : (
                  <h1 className="notFounded">
                    Please write City or Country name correctly!
                  </h1>
                )}
              </div>
            </div>
            <div className="second">
              <Location />
              <MoreInfos />
            </div>
          </>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
