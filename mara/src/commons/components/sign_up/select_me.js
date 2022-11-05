import list from '../../data/caktail'
import '../../../assets/css/select_me.css'
import {Link} from "react-router-dom"

function select_me(){
    return(
        <div id="me">
            <div id="level">
                <div id="square"></div>
                <div id="square_empty"></div>
            </div>
            
            <h1>좋아하는 칵테일을 3개 선택 해주세요</h1>
            <image>
            {
                list.map((Item)=>{
                var {id, img}=Item;
                return(
                    <img src={img} alt={id}/>
                );
            })}
            </image>
            <button><Link style={{textDecoration: 'none', color: 'white'}} to="/sign_up/page3">다음 → </Link></button><br/>
        </div>
    );
}

export default select_me;