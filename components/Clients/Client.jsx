import "../Clients/Client.css";
import {TbBuildingBank} from "react-icons/tb"
import {FaUsers} from "react-icons/fa";
import {GiAbstract002, GiAbstract003, GiAbstract004, GiAbstract005, GiAbstract006, GiAbstract007, GiAbstract008, GiAbstract009, GiAbstract010, GiAbstract034} from "react-icons/gi";


const Client = () =>{

    return(
     <>
     <div className="clien-main">
        <div className="client-wrap">
            <div className="ourclient">
                <h1>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="companys">
               <div className="company-i"><GiAbstract002/></div>
               <div className="company-i"><GiAbstract003/></div>
               <div className="company-i"><GiAbstract004/></div>
               <div className="company-i"><GiAbstract005/></div>
               <div className="company-i"><GiAbstract006/></div>
               <div className="company-i"><GiAbstract007/></div>
               <div className="company-i"><GiAbstract008/></div>
               <div className="company-i"><GiAbstract009/></div>
               <div className="company-i"><GiAbstract010/></div>
            </div>
            <div className="manage-txt">
                <h1>Manage your entire community<br/> in a single system </h1>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className="mg-boxwrap">
                <div className="bx-wrap">
                    <div className="mid"><div className="mg-i"><FaUsers/></div></div>
                     <h1>Membership <br/>Organisations</h1>
                     <p>Our membership management <br/>software provides full automation of<br/> membership renewals and payments.</p>
                </div>
                <div className="bx-wrap">
                    <div className="mid"><div className="mg-i"><TbBuildingBank/></div></div>
                     <h1>National <br/>Associations</h1>
                     <p>Our membership management <br/>software provides full automation of<br/> membership renewals and payments.</p>
                </div>
                <div className="bx-wrap">
                    <div className="mid"><div className="mg-i"><GiAbstract034/></div></div>
                     <h1>Clubs And<br/> Groups</h1>
                     <p>Our membership management <br/>software provides full automation of<br/> membership renewals and payments.</p>
                </div>
            </div>
        </div>
     </div>
     </>
    )
};

export default Client;