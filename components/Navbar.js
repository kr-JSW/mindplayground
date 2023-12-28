import React, { useEffect, useRef, useState } from 'react';
import style from './navbar.module.css';
import Link from 'next/link';

function Navbar() {
    const [menu, setMenu] = useState(false);

    const [testModal, setTestModal] = useState(false);

    const ref1 = useRef(null);

    const clickHandler = () => {
        return (
            <div className={style.burgerMenu}>
                <div
                    onClick={() => {
                        setMenu(!menu);
                    }}
                >
                    X
                </div>
                <Link href="/" legacyBehavior>
                    <a
                        onClick={() => {
                            if (typeof window !== 'undefined') window.location.href = '/';
                        }}
                    >
                        흑막 테스트
                    </a>
                </Link>
                <Link href="/" legacyBehavior>
                    <a
                        onClick={() => {
                            if (typeof window !== 'undefined') window.location.href = '/test/Sociopath/intro';
                        }}
                    >
                        소시오패스 테스트
                    </a>
                </Link>
            </div>
        );
    };

    const burger = () => {
        return (
            <div
                className={style.burger}
                onClick={() => {
                    setMenu(!menu);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    };
    return (
        <div className={style.navBoard}>
            <span>Mind Playground</span>
            <Link href="/" legacyBehavior>
                <a
                    onClick={() => {
                        if (typeof window !== 'undefined') window.location.href = '/';
                    }}
                >
                    흑막 테스트
                </a>
            </Link>
            {/* <Link href="/he" legacyBehavior> */}
            <div
                ref={ref1}
                onClick={() => {
                    if (typeof window !== 'undefined') {
                        setTestModal(!testModal);
                    }
                }}
            >
                어둠의 심리 테스트
            </div>
            {/* </Link> */}
            {burger()}
            {menu ? clickHandler() : null}
            {testModal ? (
                <div
                    style={{
                        background: '#ffffff',
                        position: 'absolute',
                        top: ref1.current.offsetTop + 30,
                        left: ref1.current.offsetLeft,
                        width: '150px',
                        height: '100px',
                        color: 'black',
                        border: '1px solid gray',
                        borderRadius: '10px',
                    }}
                    className={style.testModal}
                >
                    <div>
                        {/* <Link href="/" legacyBehavior> */}
                        <a
                            onClick={() => {
                                if (typeof window !== 'undefined') window.location.href = '/test/Sociopath/intro';
                            }}
                        >
                            소시오패스 테스트
                        </a>
                        {/* </Link> */}
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Navbar;
