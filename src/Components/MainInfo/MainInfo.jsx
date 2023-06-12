import { useSelector } from "react-redux";
import cls from "./mainInfo.module.scss";
import "boxicons";
const MainInfo = () => {
  const data = useSelector((store) => store.search);
  const day = new Date();
  const hours = day.getHours();
  const minute = day.getMinutes();
  const getWeek = day.toDateString();
  return (
    <div className={cls.wrapper}>
      <>
        <h1 className={cls.degree}>
          <span>{data.degree}</span> <span>&#xb0;</span>
        </h1>
        <div className={cls.city_time}>
          <h1 className={cls.city}>{data.name}</h1>
          <p className={cls.time}>
            {hours}:{minute} - {getWeek}
          </p>
        </div>
        <div className={cls.weather_icon}>
          <p className={cls.icon}>
            {data.weather == "Rain" || "Clouds" ? (
              <>
                {console.log("clouds")}
                <i class="bx  bxs-cloud"></i>
              </>
            ) : (
              <>
                {console.log("sun")}
                <i class="bx bx-sun"></i>
              </>
            )}
          </p>
          <p className={cls.climate_text}>{data.weather}</p>
        </div>
      </>
    </div>
  );
};

export default MainInfo;
