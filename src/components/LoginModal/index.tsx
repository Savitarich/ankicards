import React from "react";
import style from "./LoginModal.module.css";
import { useDispatch } from "react-redux";
import { setIsLogin, setIsRegister } from "../../redux/slices/modalsSlice";

export const LoginModal: React.FC = () => {
    const { popupFade, popup, buttonRegistr } = style;
    const dispatch = useDispatch();

    const onClickIsLogin = () => {
        dispatch(setIsLogin());
    };
    const onClickIsRegister = () => {
        dispatch(setIsRegister());
    };

    return (
        <>
            <div className={popupFade}>
                <div className={popup}>
                    <button onClick={onClickIsLogin}>
                        <svg
                            viewBox='0 0 512 512'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='#01579b'
                            width={52}
                            height={52}
                            style={{
                                position: "absolute",
                                top: "2",
                                right: "5",
                                cursor: "pointer",
                            }}
                        >
                            <path d='M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z' />
                        </svg>
                    </button>

                    <h2>Авторизация</h2>
                    <form>
                        <label>Электронная почта</label>
                        <input
                            type='email'
                            required
                        />
                        <label>Пароль</label>
                        <input
                            type='password'
                            required
                            minLength={5}
                        />
                        <button>Войти</button>
                    </form>
                    <button
                        className={buttonRegistr}
                        onClick={onClickIsRegister}
                    >
                        Нет аккаунта?
                    </button>
                </div>
            </div>
        </>
    );
};
