import list from '../../data/tag'
import styles from '../../../assets/css/select_tag.module.css'
import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react';
import {useRecoilState} from "recoil";
import axios from 'axios';
import {user} from "../modules";


function Select_tag(){
    const [tags, setTags]=useState([]);
    const [tags_sel, setTags_sel]=useState({id:"",tagIdSelectedList:[]});
    const [num, setNum]=useState(0);
    const [imfor,setImfor]=useRecoilState(user);


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
            setTags_sel({
                id: imfor.identifyId,
                tagIdSelectedList: [...tags_sel.tagIdSelectedList, Number(e.target.id)]
            });            
            setNum(num+1);
        }
        else{
            e.target.className="";
            setTags_sel({
                id: imfor.identifyId,
                tagIdSelectedList: tags_sel.tagIdSelectedList.filter(item=>item!==Number(e.target.id))});
            setNum(num-1);
        }
        //console.log(num);
        //console.log(tags_sel);
    }

    const onSend=async()=>{
        const url="http://54.172.178.96:8010/user/rs/tags";
        //const crossOriginIsolated = {withCredentials: true};
        console.log(tags_sel);
        alert("결과를 도출하는 중입니다. 잠시만 기다려주세요.");
        axios
        .post(url,tags_sel)
        .then((res)=>{
            console.log(res);
            
            setImfor({
                ...imfor,
                cocktailId: res.data.data.cocktailId,
                cocktailImgUrl: res.data.data.cocktailImgUrl,
                cocktailName: res.data.data.cocktailName,
            })
            alert("성공했습니다!!");
            console.log(imfor);
            window.location.replace('/sign_up/page4');
        })
        .catch((Error)=>{
            console.log(Error);
            alert("다시 시도해주세요");
        });
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
                <button onClick={onSend}><Link style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} to="">다음 → </Link></button>
                :<button className={styles.hidden_btn}>다음→</button>
            }
            
        </div>
    );
}

export default Select_tag;