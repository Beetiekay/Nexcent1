import "../Login/Login.css";
import image2 from "../Login/assets/f2.png";


const Login = () =>{

    return(
     <>
     <div className="Log">
        <div className="log-wrap">
            <div className="log-img"><img src={image2}/></div>
            <div className="log-text">
                <h1>The unseen of spending three <br/>  years at Pixelgrade</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elt. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. </p>
                <button>Lear More..</button>
            </div>
        </div>
     </div>
     </>
    )
};

export default Login;