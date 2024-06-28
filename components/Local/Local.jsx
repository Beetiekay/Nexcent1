import { GiAbstract034 } from "react-icons/gi";
import "../Local/Local.css";
import {LuUsers2} from "react-icons/lu";
import { FaHandMiddleFinger, FaToolbox } from "react-icons/fa";


const Local = () =>{

    return(
     <>
     <div className="local">
        <div className="local-wrap">
         <div className="l-txt">
            <div className="knot">
            <h1>Helping a local<br/> <span>business reinvent itself</span></h1>
            <p>We reached here with our hard work and dedication</p></div>
         </div>
         <div className="local-social">
            <div className="f-line">
                <div className="f-icon"><LuUsers2/></div>
                <div className="f-text"><h4>2,245,341</h4><p>Members</p></div>
            </div>
           <div className="f-line">
                <div className="f-icon"><FaHandMiddleFinger/></div>
                <div className="f-text"><h4>828,867</h4><p>Event Booking</p></div>
            </div>
         </div>
           <div className="local-social">
           <div className="f-line">
                <div className="f-icon"><GiAbstract034/></div>
                <div className="f-text"><h4>46,328 </h4><p>Club</p></div>
            </div>
            <div className="f-line">
                <div className="f-icon"><FaToolbox/></div>
                <div className="f-text"><h4>61926,436 </h4><p>Payments</p></div>
            </div>
           </div>
        </div>
     </div>
     </>
    )
};

export default Local;