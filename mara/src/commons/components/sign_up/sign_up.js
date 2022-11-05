import "../../../assets/css/sign_up.css"

function SignUp(){
    return(
        <div id="sign_up">
            <contents>
                ID <input placeholder="아이디를 입력하세요."/><br/>
                Nickname <input placeholder="닉네임을 입력하세요."/><br/>
                Password <input placeholder="비밀번호를 입력하세요."/><br/>
                <button>다음 → </button><br/>
            </contents>
        </div>
    );
}

export default SignUp;