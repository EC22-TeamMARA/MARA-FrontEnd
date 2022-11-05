import list from '../../data/caktail';

function select_me(){
    return(
        <>
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
        </>
    );
}

export default select_me;