import cls from "./location.module.scss";
import "boxicons";

import { regions } from "../../Api/regions";
import { useContext } from "react";
import { Context } from "../../App";

const Location = () => {
  const {setValues} = useContext(Context);
  const onSubmit = (e) => {
    e.preventDefault()
    setValues(e.target['input'].value );
  }
  return (
    <div className={cls.wrapper}>
      <form className={cls.search_input} onSubmit={onSubmit}>
        <div className={cls.search}>
          <input type="text" placeholder="Another Location" name="input"/>
        </div>
        <button type="submit" >
          <box-icon size="md" name="search"></box-icon>
        </button>
      </form>
      <div className={cls.regions_wrapper}>
        <div className={cls.scrollbar}>
          {regions.map((region) => (
            <p onClick={()=>setValues(region)}>{region}</p>
          ))}
        </div>
        <span className={cls.line}></span>
      </div>
    </div>
  );
};

export default Location;
