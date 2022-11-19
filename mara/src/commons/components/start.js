import React, { useState } from "react";
import LoginModal from '../components/login';
import styles from "../../assets/css/start.module.css";
import {Link} from "react-router-dom"


function Start(){
    const [modal, setModal]=useState(false);
    
    const onClick=(item, e)=>{
        setModal(!modal);
    }

    return(
        <div className={styles.img_start}>
            <div class={styles.login} onClick={onClick}>로그인</div>
            <div class={styles.ment}>정말 향기롭고 조화로운 칵테일을 원하신다면 어쩌구어쩌구 이 사이트는 마라탕팀이 만든겁니다!! 이 사이트를 통해 당신은 자신이 원하고 못먹어본 자신의 취향 껏 칵테일을 추천받고 맛보고 즐길 수 있으며, 새로운 칵테일에 실패없이 성공하게 될 것입니다 굿~</div>
            {modal?<LoginModal open={modal} close={onClick}/>:null}
            <img className={styles.img_start} src="/start4.jpg" alt="drink_cock"/>
            <button className={styles.btn}><Link style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} to="/sign_up">시작하기 → </Link></button>
        </div>
    );
}

export default Start;