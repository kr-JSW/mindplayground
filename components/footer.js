import React from "react";
import style from "./footer.module.css";

function Footer() {
  return (
    <div className={style.footerBoard}>
      <span>ⓒ 2023. Mind Playground, All Rights Reserved</span>
      <span>
        Mind Playground의 이미지테스트 및 심리테스트는 오직 재미를 위한것으로,
        전문적인 근거가 없는것을 알려드리며, 본 테스트의 맹신으로 인한 피해는 Mind
        Playground에서 책임지지 않습니다.
      </span>
    </div>
  );
}

export default Footer;
