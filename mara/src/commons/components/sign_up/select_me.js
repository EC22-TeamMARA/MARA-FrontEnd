import list from '../../data/caktail'
import styles from '../../../assets/css/select_me.module.css'
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';


function Select_me(){

    const [cock, setCock]=useState([]);
    const [cock_sel, setCock_sel]=useState([]);
    const [num, setNum]=useState(0);
    

    useEffect(()=>{

        const url="http://54.172.178.96:8010/user/signup/data/cocktails";
        //const crossOriginIsolated = {withCredentials: true};

        axios
        .get(url)
        .then((res)=>{
            setCock(res.data.data.dataList);
            //console.log(res.data.data.dataList);
        })
        .catch((Error)=>{
            console.log(Error);
        });
        
    },[]);

    const select=(e)=>{
        if(e.target.className===styles.me){
            e.target.className=styles.me_sel;
            setCock_sel(sel=>[...sel, e.target.id])
            setNum(num+1);
        }
        else{
            e.target.className=styles.me;
            setCock_sel(cock_sel.filter(item=>item!==e.target.id));
            setNum(num-1);
        }
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
                cock.map((Item)=>{
                var {cocktailId, cocktailImgUrl, cocktailName}=Item;
                //console.log(cocktailName);
                return(
                    <img className={styles.me} id={cocktailId} src={cocktailImgUrl} alt={cocktailName} onClick={select}/>
                );
            })}
            </image>
            {num>0?
            <button><Link style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} to="/sign_up/page3">다음 → </Link></button>
            :<button className={styles.hidden_btn}>다음→</button>
            }

        </div>
    );
}

export default Select_me;