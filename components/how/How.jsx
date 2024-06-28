import "../how/How.css";
import image3 from "../how/assets/f2.png";

const How = () =>{
    return(
        <>
        <div className="how">
            <div className="How-wrap">
            <div className="How-img"><img src={image3}/></div>
            <div className="How-text">
                <h1>How to design your site footer like we did.</h1>
                <p>Donec a eros justo. Fusce egestas tristigque uitrices. Narn tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque eit erat a magna. Donec quis erat at ibero ultrices molis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integen messa. es est, ac, hendrerit venenatis libero. Donec consectetur faucibus ipsumid gravida</p>
                <button>Lear More..</button>
            </div>
            </div>
        </div>
        </>
    )
};

export default How;