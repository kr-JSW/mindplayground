import React from "react";
import style from "./loading.module.css";

function Loading({ text }) {
  return (
    <div>
      <section className={style.dotSec}>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
      </section>
      <div style={{ textAlign: "center" }}>
        <h3 className={style.mainText}>{text}</h3>
      </div>
    </div>
  );
}

export default Loading;
