import React, { useState } from "react";
import LoginModal from '../components/login';

function Main(){
    const [modal, setModal]=useState(false);
    
    const onClick=(item, e)=>{
        setModal(!modal);
    }

    return(
        <div>
            ㅇ어어ㅓ어어
            <div onClick={onClick}>로그인</div>
            {modal?<LoginModal open={modal} close={onClick}/>:null}
        </div>
    );
}

export default Main;