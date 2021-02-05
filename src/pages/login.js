import React,{useState,useEffect} from 'react';
import {doLogin, reqLoginError, reqLoggedIn } from './../slice/userSlice';
import {useDispatch,useSelector} from "react-redux";

export function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const [isNotValid, setIsNotValid] = useState(false);
    const [serverError, setServerError] = useState(false);
    const serverErrorSelector = useSelector(reqLoginError);
    const serverIsLoggedIn = useSelector(reqLoggedIn);
    const handleSubmit = ()=>{
        //
    };
    const login  = () => { 
        const data = {
            email,
            password
            
        };
        dispatch(doLogin(data));
    };

    useEffect(()=>{
        setServerError(serverErrorSelector);
        setIsNotValid(!(email && password));
    },[email,password,serverErrorSelector]);

    return (
        <>
        <div className = "text-center"><h4>LOGIN</h4></div>
        {serverError && (
        <div className="alert alert-danger">
          Server Error: email or password is invalid
        </div>
        )}
        <form >
        <div className = "form-group col-auto">
        <input type = "text" className = "form-control" placeholder ="Email"  onChange = {(event)=> setEmail(event.target.value)} value= {email}/>
        <input type = "password" className = "form-control"  placeholder ="Parola"  onChange = {(event)=> setPassword(event.target.value)} value= {password}/>
        </div>
        </form>
        <button className = "btn btn-light btn btn-raised float-right btn btn-success" disabled = {isNotValid} onClick = {login}>
            Login
        </button>
        </>
    );
};
export default Login;