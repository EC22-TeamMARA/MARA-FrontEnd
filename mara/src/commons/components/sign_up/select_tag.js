import list from '../../data/tag'
import '../../../assets/css/select_tag.css'
import {Link} from "react-router-dom"

function select_me(){
    return(
        <div id="tag">
            <div id="level">
                <div id="square"></div>
                <div id="square"></div>
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
            <button><Link style={{textDecoration: 'none', color: 'white'}} to="/sign_up/page4">다음 → </Link></button><br/>
        </div>
    );
}

export default select_me;