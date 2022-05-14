
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    const getLocal= localStorage.getItem("login");

    function handleClick(){
           localStorage.setItem('login', JSON.stringify(false))
           navigate('/login')
    }
    
    function handleLogin(){
        if(getLocal=="true"){
            return(
                <li className="subnav">
                    <a className="subnav-a" href>ACCOUNT <i className="fa fa-caret-down" /></a>
                    <div className="subnav-content">
                        <a href="#">Name</a>
                        <a href="#">Email</a>
                        <a href="#" onClick={handleClick} >LOGOUT</a>
                    </div>
                </li>
            )
        }else{
            return(
                <li className="subnav">
                    <a className="subnav-a" onClick={handleClick}>LOGIN</a>
                </li>
            )
        }
        
    }
    function handleImg(){
        if(getLocal=="false"){
            return(
                <div className="wrapImg">
                    <div className="wellcome">
                        <h1>WELL COME !</h1>
                        <h1>PLEASE LOG IN TO SEE PAGE</h1>
                        {/* <button><a href="login">LOGIN</a></button> */}
                    </div>
                    <div className="imgHome">
                        <img className="image" src="https://wallpapercave.com/uwp/uwp462173.jpeg"/>
                    </div>
                </div>
            )
        }/* else{
            return(
                <div className='wrapImg'>
                <img className='imgHome' src='' />
            </div>
            )
        } */
    }
    return(
        <div>
            <div className="header">
                <h1>ANIMAL</h1>
                <div className="menu">
                    <ul className="menu-header">
                        <li><a href="#"> <i className="fa fa-home" /> HOME</a></li>
                        <li><a href="#" >A-Z ANIMAL</a></li>
                        <li><a href="#">EXTINCT ANIMALS</a></li>
                        {/* <li className="subnav">
                            <a className="subnav-a" href>ACCOUNT <i className="fa fa-caret-down" /></a>
                            <div className="subnav-content">
                                <a href="#">Name</a>
                                <a href="#">Email</a>
                                <a href="#" onClick={handleClick} >LOGOUT</a>
                            </div>
                        </li> */}
                        {handleLogin()}
                    </ul>
                </div>
            </div>
            {handleImg()}

        </div>
    )
}
export default Header;