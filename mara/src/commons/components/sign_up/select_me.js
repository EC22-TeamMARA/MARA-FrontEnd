import list from '../../data/caktail'
import styles from '../../../assets/css/select_me.module.css'
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';
import {useRecoilState} from "recoil";
import {user} from "../modules";



function Select_me(){

    const [cock, setCock]=useState([]);
    const [cock_sel, setCock_sel]=useState({id:"",cocktailIdSelectedList:[]});
    const [num, setNum]=useState(0);
    const [checkSel, setcheck]=useState(0);
    const [imfor,setImfor]=useRecoilState(user);


    useEffect(()=>{

        const url="http://54.172.178.96:8010/user/signup/data/cocktails";
        //const crossOriginIsolated = {withCredentials: true};
        
        axios
        .get(url)
        .then((res)=>{
            setCock(res.data.data.dataList);
        })
        .catch((Error)=>{
            console.log(Error);
        });
        
    },[]);

    const select_img=(e)=>{
        if(e.target.parentNode.className===styles.cock){
            e.target.parentNode.className=styles.me_sel;
            setCock_sel({
                id: imfor.identifyId,
                cocktailIdSelectedList: [...cock_sel.cocktailIdSelectedList, Number(e.target.id)]
            })
            setNum(num+1);
        }
        else{
            e.target.parentNode.className=styles.cock;
            setCock_sel({
                id: imfor.identifyId,
                cocktailIdSelectedList: cock_sel.cocktailIdSelectedList.filter(item=>item!==Number(e.target.id))});
            setNum(num-1);
        }
    }

    const onClick=async()=>{
        const url="http://54.172.178.96:8010/user/rs/cocktails";
        //const crossOriginIsolated = {withCredentials: true};
        axios
        .post(url,cock_sel)
        .then((res)=>{
            //alert("성공했습니다!!");
            
            window.location.replace('/sign_up/page3');
        })
        .catch((Error)=>{
            console.log(Error);
            alert("다시 시도해주세요");
        });
    }

    const onEnter=(e)=>{
        console.log(e.target.parentNode.children[1]);
        setcheck(e.target.className);
        e.target.className=styles.me_hover;
        e.target.parentNode.children[1].className=styles.name;
    }

    const onLeave=(e)=>{
        e.target.className=checkSel;
        e.target.parentNode.children[1].className=styles.hidden;
    }

    return(
        
        <div id={styles.me}>
            <div id={styles.level}>
                <div id={styles.square}></div>
                <div id={styles.square_empty}></div>
            </div>
            
            <h1>좋아하는 칵테일을 1개 이상 선택 해주세요</h1>
            <image>
            {
                cock.map((Item)=>{
                var {cocktailId, cocktailImgUrl, cocktailName}=Item;

                return(
                    <div className={styles.cock} >
                        <img className={styles.me} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={select_img} id={cocktailId} src={cocktailImgUrl} alt={cocktailName}/>
                        <div className={styles.hidden}>{cocktailName}</div>
                    </div>
                    
                );
            })}
            </image>
            {num>0?
            <button onClick={onClick}><Link style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} to="">다음 → </Link></button>
            :<button className={styles.hidden_btn}><div className={styles.font} >다음→</div></button>
            }

        </div>
    );
}

export default Select_me;