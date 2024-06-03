import React , {useContext} from "react";
import {slots} from '../data';
import BsContext from '../Context/BsContext';

const TimeSchdule = () =>{
const context = useContext(BsContext);
const {time , changeTime} = useContext;

const handleTimeChange =(value) =>{
  changeTime(value);

  window.localStorage.setItem("slot",value);
};
    return(
    <>
    <div className="slot_container">
        <div className="slot_heading">Movie Slots</div>
         <div className="main_container">
            {slots.map((ele , index) => {
                return(
                    <RadioComponnt text={ele} data={time} key={index} changeSlection={handleTimeChange}/>
                )
            })}

         </div>
    </div>
    
    </>
    );
};

export default TimeSchdule;