import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLogin, setIsRegister } from "../../redux/slices/modalsSlice";

export const Header: React.FC = () => {
    const { root, row, logoBlock, nav, buttonRow } = style;
    const dispatch = useDispatch();

    const onClickIsLogin = () => {
        dispatch(setIsLogin());
    };
    const onClickIsRegister = () => {
        dispatch(setIsRegister());
    };

    const isAuth = false;
    //!!!

    return (
        <>
            <div className={root}>
                <div className='container'>
                    <div className={row}>
                        <Link to='/'>
                            <div className={logoBlock}>
                                <span>AnkiCards</span>
                                <svg
                                    viewBox='0 0 64 64'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={60}
                                    height={60}
                                    fill='#f1f8e9'
                                >
                                    <defs></defs>
                                    <title />
                                    <g
                                        data-name='Layer 2'
                                        id='Layer_2'
                                    >
                                        <path d='M16.47,60H47.1A4.9,4.9,0,0,0,52,55.1V16.9A4.9,4.9,0,0,0,47.1,12H13a5,5,0,0,0-5,5V51.53A8.47,8.47,0,0,0,16.47,60Zm3.43-28.91,3.86-.56A2.74,2.74,0,0,0,25.81,29l1.73-3.5a2.74,2.74,0,0,1,4.92,0L34.19,29a2.74,2.74,0,0,0,2.06,1.5l3.86.56a2.74,2.74,0,0,1,1.52,4.68l-2.79,2.72A2.74,2.74,0,0,0,38,40.91l.66,3.84a2.74,2.74,0,0,1-4,2.89l-3.45-1.81a2.74,2.74,0,0,0-2.55,0l-3.45,1.81a2.74,2.74,0,0,1-4-2.89L22,40.91a2.74,2.74,0,0,0-.79-2.43l-2.79-2.72A2.74,2.74,0,0,1,19.89,31.09Z' />
                                        <path d='M45,4.4,16.27,7.31a.35.35,0,0,0,0,.69H47.06A.94.94,0,0,0,48,7.06,2.68,2.68,0,0,0,45,4.4Z' />
                                    </g>
                                </svg>
                            </div>
                        </Link>
                        <nav className={nav}>
                            {isAuth ? (
                                <button>Выйти</button>
                            ) : (
                                <div className={buttonRow}>
                                    <button onClick={onClickIsLogin}>
                                        Войти
                                    </button>
                                    <button onClick={onClickIsRegister}>
                                        Зарегистрироваться
                                    </button>
                                </div>
                            )}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};
