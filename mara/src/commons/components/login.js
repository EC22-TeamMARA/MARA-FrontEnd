import styles from "../../assets/css/login.module.css";
import axios from 'axios';
import React, {useState} from 'react';
import {AiOutlineClose } from 'react-icons/ai';


function Login({open, close}){

    const [login,setLogin]=useState({
        identifyId:"",
        password: "",
    })

    const onChangeId=(e)=>{
        setLogin({
            ...login,
            identifyId: e.target.value,
        })
    }

    const onChangePwd=(e)=>{
        setLogin({
            ...login,
            password: e.target.value,
        })
    }

    const onClick=async()=>{

        const url="http://54.172.178.96:8010/user/login";
        //const crossOriginIsolated = {withCredentials: true};

        axios
        .post(url,login)
        .then((res)=>{
            alert("성공했습니다!!");
            window.location.replace('/main');
        })
        .catch((Error)=>{
            console.log(Error);
            alert("아이디 또는 비밀번호가 틀렸습니다.");
        });
        
    };

    return(
        <div id={styles.modalOpen}>
            {
                open?
                <section>
                    <close>
                        <AiOutlineClose className="button" size="20px" color="gray" onClick={close}/>
                    </close>
                    <contents>
                        <h1>LOGIN</h1>
                        <input placeholder="id" onChange={onChangeId}/>
                        <input placeholder="passwd" onChange={onChangePwd}/>
                        <button onClick={onClick}>login</button>
                    </contents>
                    
                </section>
                :null
            }
        </div>
    );
}

export default Login;