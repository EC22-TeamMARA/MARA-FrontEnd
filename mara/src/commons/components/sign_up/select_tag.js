import list from '../../data/tag'
import styles from '../../../assets/css/select_tag.module.css'
import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Select_tag(){
    const [tags, setTags]=useState([]);
    const [num, setNum]=useState(0);

    useEffect(()=>{

        const url="http://54.172.178.96:8010/user/signup/data/tags";
        //const crossOriginIsolated = {withCredentials: true};

        axios
        .get(url)
        .then((res)=>{
            setTags(res.data.data.dataList);
            //console.log(res.data.data.dataList);
            tags.map((item)=>{
                setNum({
                    ...tags,
                    on: false
                })
            })
        })
        .catch((Error)=>{
            console.log(Error);
        });
        
    },[]);

    const onClick=(e)=>{
        console.log(tags);
        setNum(num+1);
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
                    <tag id={tagId} onClick={onClick}>{tagContent}</tag>
                );
            })}
            </tags>
            {
                num>0?
                <button><Link style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} to="/sign_up/page4">다음 → </Link></button>
                :<button className=''>다음→</button>
            }
            
        </div>
    );
}

export default Select_tag;