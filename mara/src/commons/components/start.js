import React, { useState } from "react";
import LoginModal from '../components/login';
import styles from "../../assets/css/start.module.css";
import {Link} from "react-router-dom"


function Start(){
    const [modal, setModal]=useState(false);
    const [checkSel, setcheck]=useState(0);

    
    const onClick=(item, e)=>{
        setModal(!modal);
    }

    const onEnter=(e)=>{
        console.log(e.target.parentNode.children);
        e.target.parentNode.children[2].className=styles.img_hover;
        e.target.parentNode.children[1].className=styles.ment_hover;
    }

    const onLeave=(e)=>{
        e.target.parentNode.children[2].className=styles.img_start;
        e.target.parentNode.children[1].className=styles.ment_hidden;
    }

    return(
        <div>
            <div class={styles.login} onClick={onClick}>로그인</div>
            <div class={styles.ment_hidden}>자신에게 어울리는 칵테일을 찾고싶으신가요?<br/>
혹은 분위기에 어울리는 칵테일을 찾고싶으신가요?<br/>
???에서 실패 없는 칵테일을 만나보세요</div>
            {modal?<LoginModal open={modal} close={onClick}/>:null}
            <img className={styles.img_start} src="/start5.png" alt="drink_cock"/>
            <button className={styles.btn} onMouseEnter={onEnter} onMouseLeave={onLeave}><Link style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} to="/sign_up">시작하기 → </Link></button>
        </div>
    );
}

export default Start;