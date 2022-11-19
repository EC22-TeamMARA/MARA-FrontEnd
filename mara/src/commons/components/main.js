import React from "react";
import styles from "../../assets/css/main.module.css";
import Menu from "./menu";

function Main(){

    return(
        <div>
            <Menu/>
            <img className={styles.img_main} src="/cock1.png" alt="drink_cock"/>
            <div className={styles.loading}><div className={styles.first}>●</div><div className={styles.other}>●</div><div className={styles.other}>●</div></div>
        </div>
    );
}

export default Main;