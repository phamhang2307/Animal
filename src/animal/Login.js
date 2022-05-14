import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [input, setInput] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPass, setErrorPass] = useState("");

    const navigate = useNavigate();
    function handleInput(e){
        const nameInput= e.target.name;
        const value= e.target.value;
        setInput(state=>({...state, [nameInput]:value  }))
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input.email)
        let check= (/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        let test= true;
        if(input.email==undefined || input.email=="" ){
            // errorSubmit.email=("vui long nhap email")
            setErrorEmail("vui long nhap email")
            test= false;
        }else if (check.test(input.email)==false){
            setErrorEmail("nhap sai dinnh dang email")
            test= false;
        }
        else{
        //    errorSubmit.email=("")
           setErrorEmail("")
        }
        if(input.password==undefined || input.password=="" ){
            // errorSubmit.password= ("vui long nhap password")
            setErrorPass("vui long nhap password")
            test= false;
        }else{
            // errorSubmit.password= ("")
            setErrorPass("")
        }
        if(test){
            navigate('/home')
            localStorage.setItem('login', JSON.stringify(true))
        }

    }
    return(
        <div className="login_main">
            <div className="main">
            <h2>LOGIN</h2>
            <form action className="login" onSubmit={handleSubmit} > 
                <div className="content-login">
                    <p>Email</p>
                    <input className="nhap" type="text" name="email" placeholder="xxx@gmail.com" onChange={handleInput} />
                </div>
                <div className="error">
                    <span>{errorEmail}</span>
                </div>
                <div className="content-login">
                    <p>Password</p>
                    <input className="nhap" type="password" name="password" placeholder="******" onChange={handleInput} />
                </div>
                <div className="error">
                    <span>{errorPass}</span>
                </div>
                <button className="submit" type="submit" >Login</button>
            </form>
        </div>
        </div>
    )
}
export default Login;