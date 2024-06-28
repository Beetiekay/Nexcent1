import "../Home/Home.css";
import image from "./assets/f1.png"

const Home = () =>{

    return(
     <>
     <div className="home">
        <div className="H-wrapper">
            <div className="Home-text">
                <h1>Lessons and insights <span>from 8 years.</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button>Register</button>
            </div>

            <div className="homeimg"><div className="image1"><img src={image}/></div></div>
        </div>
     </div>
     </>
    )
};

export default Home;