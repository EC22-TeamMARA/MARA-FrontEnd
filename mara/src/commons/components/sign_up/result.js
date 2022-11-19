import list from '../../data/result_cok'
import styles from '../../../assets/css/result.module.css'
import {user} from "../modules";
import {Link} from "react-router-dom"
import {useRecoilState} from "recoil";



function Result(){
    const [imfor,setImfor]=useRecoilState(user);

    return(
        <div id={styles.result}>
            <h1>{imfor.nickname}님을 위한 칵테일은!!!</h1>
            <img src={imfor.cocktailImgUrl} alt="칵테일"/>
            <h2>{imfor.cocktailName}</h2>
            <button><Link style={{textDecoration: 'none', color: 'white', fontSize: '16px'}} to="/main">사이트로 이동하기→</Link></button>
        </div>
    );
}

export default Result;