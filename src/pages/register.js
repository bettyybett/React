import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {doRegister,reqRegisterData,clearRegisterData,userSlice} from './../slice/userSlice';
import {useHistory} from 'react-router-dom';

export function Register(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirm_password, setConfirmPassword] = useState();
    const [isNotValid, setIsNotValid] = useState(false);
    const dispatch = useDispatch();
    const registerResponse = useSelector(reqRegisterData)
    const history = useHistory(); 
    useEffect(()=>{
        if (registerResponse && registerResponse._id) {
            history.push("/login");
            dispatch(clearRegisterData());
        }
            setIsNotValid(!(name && email && password && confirm_password));
        }, [registerResponse, name, email, password, confirm_password]);
      
    const handleSubmit = ()=>{
        //
    };
    
    const register  = () => { 
        const data = {
            name,
            email,
            passwords:{
                password,
                confirm_password,
            },
        };
        console.log(data);
        if (!isNotValid) dispatch(doRegister(data));
    };
    return (
        <>
        <div className = "text-center"><h4>REGISTER</h4></div>
        <form >
        <div className = "form-group col-auto">
        <input 
        type = "text" 
        className = "form-control" 
        placeholder ="Nume" 
        onChange = {(event)=> setName(event.target.value)} 
        value= {name}/> 
        <input type = "text" className = "form-control" placeholder ="Email"  onChange = {(event)=> setEmail(event.target.value)} value= {email}/>
        <input type = "password" className = "form-control"  placeholder ="Parola"  onChange = {(event)=> setPassword(event.target.value)} value= {password}/>
        <input type = "password" className = "form-control" placeholder ="Confirma Parola"  onChange = {(event)=> setConfirmPassword(event.target.value)} value= {confirm_password}/></div>
        </form>
        <button className = "btn btn-light btn btn-raised float-right btn btn-success" disabled={isNotValid} onClick = {register}>
            Inregistreaza-te
        </button>
        </>
    );
};
export default Register;