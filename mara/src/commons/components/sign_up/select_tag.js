import list from '../../data/tag'
import styles from '../../../assets/css/select_tag.module.css'
import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Select_tag(){
    const [tags, setTags]=useState([]);
    const [tags_sel, setTags_sel]=useState([]);
    const [num, setNum]=useState(0);

    useEffect(()=>{

        const url="http://54.172.178.96:8010/user/signup/data/tags";
        //const crossOriginIsolated = {withCredentials: true};

        axios
        .get(url)
        .then((res)=>{
            setTags(res.data.data.dataList);
            //console.log(res.data.data.dataList);
        })
        .catch((Error)=>{
            console.log(Error);
        });
        
    },[]);

    const onClick=(e)=>{
        if(e.target.className===""){
            e.target.className=styles.tag_sel;
            setTags_sel(sel=>[...sel, e.target.id])
            setNum(num+1);
        }
        else{
            e.target.className="";
            setTags_sel(tags_sel.filter(item=>item!==e.target.id));
            setNum(num-1);
        }
        //console.log(num);
        //console.log(tags_sel);
    }

    return(
        <div id={styles.tag}>
            <div id={styles.level}>
                <div id={styles.square}></div>
                <div id={styles.square}></div>
            </div>
            
            <h1>추천받고 싶은 키워드를 3개 선택 해주세요</h1>
            <tags>
            {                
                tags.map((Item)=>{
                var {tagId, tagContent}=Item;
                console.log(tagId, tagContent);
                return(
                    <tag id={tagId} className="" onClick={onClick}>{tagContent}</tag>
                );
            })}
            </tags>
            {
                num>0?
                <button><Link style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} to="/sign_up/page4">다음 → </Link></button>
                :<button className={styles.hidden_btn}>다음→</button>
            }
            
        </div>
    );
}

export default Select_tag;