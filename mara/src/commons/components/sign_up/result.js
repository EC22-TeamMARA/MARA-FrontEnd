import list from '../../data/result_cok'
import '../../../assets/css/result.css'

function result(){
    return(
        <div id="result">
            <h1>()님을 위한 칵테일은!!!</h1>
            <img src={list.img} alt="칵테일"/>
            <h2>{list.name}</h2>
            <button>사이트로 이동하기→</button>
        </div>
    );
}

export default result;