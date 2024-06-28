import { GiAbstract031, GiAbstract032, GiAbstract034, GiAbstract035, GiAbstract036 } from "react-icons/gi";
import "../Vicon/Vicon.css";
import image4 from "../Vicon/assets/vicon.jpg";


const Vicon = () =>{

    return(
     <>
     <div className="vicon">
        <div className="vicon-wrap">
        <div className="vicon-img"><img src={image4}/></div>
            <div className="vicon-text">
                <p>Donec a eros justo. Fusce egestas tristigque uitrices. Narn tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque eit erat a magna. Donec quis erat at ibero ultrices molis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integen messa. es est, ac, hendrerit venenatis libero. Donec consectetur faucibus ipsumid gravida</p>
                 
                 <p className="sip">Tim Smith</p>
                 <p className="ash">British Dragon Boat Racing Association</p>
                 <div className="l-text">
                    <div className="vicon-i blue"><GiAbstract034/></div>
                    <div className="vicon-i"><GiAbstract032/></div>
                    <div className="vicon-i"><GiAbstract031/></div>
                    <div className="vicon-i"><GiAbstract035/></div>
                    <div className="vicon-i"><GiAbstract036/></div>
                    <div className="meet-all">Meet all customers →</div>
                 </div>
            </div>
        </div>
     </div>
     </>
    )
};

export default Vicon;