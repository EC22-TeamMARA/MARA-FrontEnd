import styles from  "../../../assets/css/sign_up.module.css"
import axios from 'axios';
import {Link} from "react-router-dom"
import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import {user} from "../modules/atom";



function SignUp(){
    const [user_imfor,setImfor]=useRecoilState(user);

    const [submit,setSubmit]=useState({
        identifyId:"",
        nickname: "",
        password: "",
    })

    const [id,setId]=useState({
        identifyId:"",
    })

    const [nick,setNick]=useState({
        nickname:"",
    })

    const onChangeId=(e)=>{
        setSubmit({
            ...submit,
            identifyId: e.target.value,
        })
        setId({
            ...id,
            identifyId: e.target.value,
        })
        //console.log(login);
    }

    const onChangeNick=(e)=>{
        setSubmit({
            ...submit,
            nickname: e.target.value,
        })
        setNick({
            ...nick,
            nickname: e.target.value,
        })
        //console.log(login);
    }

    const onChangePwd=(e)=>{
        setSubmit({
            ...submit,
            password: e.target.value,
        })
        //console.log(login);
    }


    const onClick_submit=async()=>{

        const url="http://54.172.178.96:8010/user/signup/submit";
        //const crossOriginIsolated = {withCredentials: true};
        console.log(submit);
        setImfor(submit);

        axios
        .post(url,submit)
        .then((res)=>{
            console.log(res);
            alert("성공했습니다!!");
            
            
            window.location.replace('/sign_up/page2');
        })
        .catch((Error)=>{
            console.log(Error);
            alert("회원가입에 실패했습니다.");
        });
        
    };
    const onClick_nickname=async()=>{
        const url="http://54.172.178.96:8010/user/signup/check/nickname";
        //const crossOriginIsolated = {withCredentials: true};
        console.log(nick);
        axios
        .post(url,nick)
        .then((res)=>{
            console.log(res);
            if(res.data.data.check===true){
                alert("사용가능한 닉네임입니다.");
            }
            else{
                alert("이미 사용 중인 닉네임입니다.");
            }
        })
        .catch((Error)=>{
            console.log(Error);
            alert("연결에 실패했습니다.");
        });
        
    };
    const onClick_id=async()=>{

        const url="http://54.172.178.96:8010/user/signup/check/id";
        //const crossOriginIsolated = {withCredentials: true};
        console.log(id);
        axios
        .post(url,id)
        .then((res)=>{
            console.log(res.data.data.check);
            if(res.data.data.check===true){
                alert("사용가능한 아이디입니다.");
            }
            else{
                alert("이미 사용 중인 아이디입니다.");
            }
        })
        .catch((Error)=>{
            console.log(Error);
            alert("연결에 실패했습니다.");
        });
        
    };

    return(
        <div id={styles.sign_up}>
            <imfor>ID</imfor> <div className={styles.checkbox}><input id="id" onChange={onChangeId} className={styles.sign} placeholder="아이디를 입력하세요."/><button onClick={onClick_id} className={styles.check}>중복 확인</button></div><br/>
            <imfor>Nickname</imfor> <div className={styles.checkbox}><input id="nick" onChange={onChangeNick} className={styles.sign} placeholder="닉네임을 입력하세요."/><button onClick={onClick_nickname} className={styles.check}>중복 확인</button></div><br/>
            <imfor>Password</imfor> <input className={styles.password} id="pwd" onChange={onChangePwd} placeholder="비밀번호를 입력하세요."/><br/>
            <button onClick={onClick_submit} className={styles.sign_btn}><Link style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} to="">다음 → </Link></button><br/>
        </div>
    );
}

export default SignUp;