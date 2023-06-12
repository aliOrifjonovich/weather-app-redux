import { useSelector } from "react-redux";
import cls from "./moreInfos.module.scss";
const MoreInfos = () => {
  const data = useSelector((store) => store.search);

  return (
    <div className={cls.wrapper}>
      <h1 className={cls.header}>weather details</h1>
      <div className={cls.climate_infos}>
        <p className={cls.infos}>
          Cloudy
          <span>{data.coulds}%</span>
        </p>
        <p className={cls.infos}>
          Huminity
          <span>{data.huminity}%</span>
        </p>
        <p className={cls.infos}>
          Wind
          <span>{data.wind}km/h</span>
        </p>
        <p className={cls.infos}>
          Rain
          <span>{data.rain}mm</span>
        </p>
      </div>
    </div>
  );
};

export default MoreInfos;
