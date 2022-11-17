import list from '../../data/tag'
import styles from '../../../assets/css/select_tag.module.css'
import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Select_tag(){
    const [jdata, setJdata]=useState([]);

    useEffect(()=>{

        const url="http://54.172.178.96:8010/user/signup/data/tags";
        //const crossOriginIsolated = {withCredentials: true};

        axios
        .get(url)
        .then((res)=>{
            setJdata(res.data.data);
            console.log(jdata);
            //console.log(res.data.data.dataList);
        })
        .catch((Error)=>{
            console.log(Error);
        });
        
    },[]);

    return(
        <div id={styles.tag}>
            <div id={styles.level}>
                <div id={styles.square}></div>
                <div id={styles.square}></div>
            </div>
            
            <h1>추천받고 싶은 키워드를 3개 선택 해주세요</h1>
            <tags>
            {
                list.map((Item)=>{
                var {id, tag}=Item;
                return(
                    <tag id={id}>{tag}</tag>
                );
            })}
            </tags>
            <button><Link style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} to="/sign_up/page4">다음 → </Link></button><br/>
        </div>
    );
}

export default Select_tag;