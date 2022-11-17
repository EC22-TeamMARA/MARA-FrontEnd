import styles from "../../assets/css/login.module.css";
import axios from 'axios';
import React, {useState} from 'react';
import {AiOutlineClose } from 'react-icons/ai';


function Login({open, close}){

    const [jdata, setJdata]=useState([]);

    const onClick=async()=>{

        const url="http://54.172.178.96:8010/user/signup/data/tags";
        //const crossOriginIsolated = {withCredentials: true};

        axios
        .get(url)
        .then((res)=>{
            setJdata(res);
            console.log(res);
        })
        .catch((Error)=>{
            console.log(Error);
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
                        <input placeholder="id"/>
                        <input placeholder="passwd"/>
                        <button onClick={onClick}>login</button>
                    </contents>
                    
                </section>
                :null
            }
        </div>
    );
}

export default Login;