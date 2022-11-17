import list from '../../data/caktail'
import styles from '../../../assets/css/select_me.module.css'
import React, { useState } from 'react';
import {Link} from "react-router-dom"

function Select_me(){

    const [cock, setCock]=useState({});

    const select=(e)=>{
        console.log(e);
    }



    return(
        <div id={styles.me}>
            <div id={styles.level}>
                <div id={styles.square}></div>
                <div id={styles.square_empty}></div>
            </div>
            
            <h1>좋아하는 칵테일을 3개 선택 해주세요</h1>
            <image>
            {
                list.map((Item)=>{
                var {id, img}=Item;
                return(
                    <img className={styles.me} src={img} alt={id} onClick={select}/>
                );
            })}
            </image>
            <button><Link style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} to="/sign_up/page3">다음 → </Link></button><br/>
        </div>
    );
}

export default Select_me;