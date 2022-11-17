import styles from  "../../../assets/css/sign_up.module.css"
import axios from 'axios';
import {Link} from "react-router-dom"


function SignUp(){
    return(
        <div id={styles.sign_up}>
            <imfor>ID</imfor> <input placeholder="아이디를 입력하세요."/><br/>
            <imfor>Nickname</imfor> <input placeholder="닉네임을 입력하세요."/><br/>
            <imfor>Password</imfor> <input placeholder="비밀번호를 입력하세요."/><br/>
            <button><Link style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} to="/sign_up/page2">다음 → </Link></button><br/>
        </div>
    );
}

export default SignUp;