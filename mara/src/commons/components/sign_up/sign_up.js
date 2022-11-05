import "../../../assets/css/sign_up.css"
import {Link} from "react-router-dom"


function SignUp(){
    return(
        <div id="sign_up">
            ID <input placeholder="아이디를 입력하세요."/><br/>
            Nickname <input placeholder="닉네임을 입력하세요."/><br/>
            Password <input placeholder="비밀번호를 입력하세요."/><br/>
            <button><Link style={{textDecoration: 'none', color: 'white', fontSize: '20px'}} to="/sign_up/page2">다음 → </Link></button><br/>
        </div>
    );
}

export default SignUp;