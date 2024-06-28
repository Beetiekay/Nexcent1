import "../Market/Market.css";
import image1 from "../Market/assets/lab1.png";
import image2 from "../Market/assets/lab2.jpg";
import image3 from "../Market/assets/lab3.jpg";



const Market = () =>{

    return(
     <>
     <div className="market">
        <div className="market-wrap">
            <div className="caring-text">
                <h1>Caring is the new marketing</h1>
                <div className="ctr"><p>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p></div>
            </div>
            <div className="m-box-wrap">
                <div className="vtre">
            
                  <div className="box-img"><img src={image1}/></div>
                
                  <div className="box-img"><img src={image2}/></div>
                
                  <div className="box-img ls"><img src={image3}/></div>
            </div>
            </div>
              <div className="boxtext-wrap">
                  <div className="boxTxt nv">
                    <h4>Creating Streamlined Safeguarding with Processes Oneren.</h4>
                     <p>Readmore→</p>
                  </div>
                  <div className="boxTxt nv">
                    <h4>What Are your Safeguarding Responsible And How Can You Manage Them.</h4>
                     <p>Readmore→</p>
                  </div>
                  <div className="boxTxt">
                    <h4>Revamping The Membership Model With Triathlon Australia</h4>
                     <p>Readmore→</p>
                  </div>
            </div>
        </div>
     </div>
     </>
    )
};

export default Market;