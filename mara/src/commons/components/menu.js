import React from "react";
import styles from "../../assets/css/menu.module.css";


function Menu(){
    const onClick=(e)=>{
        window.location.replace('/');
    }

    return(
        <div className={styles.menu}>
            <div className={styles.bar}>
                <div className={styles.cate}>
                    <div className={styles.font}>Cocktail</div>
                    <div className={styles.font}>Receip</div>
                    <div className={styles.font}>Purchase</div>
                    <div className={styles.font}>Rank</div>
                </div>
                <div className={styles.font} onClick={onClick}>
                    logout
                </div>
            </div>
        </div>
    );
}

export default Menu;