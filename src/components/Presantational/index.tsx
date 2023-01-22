import React from "react";
import style from "./Presentational.module.css";
import { useDispatch } from "react-redux";
import { setIsLogin, setIsRegister } from "../../redux/slices/modalsSlice";

export const Presentational: React.FC = () => {
    const { row, textWithButtons } = style;
    const dispatch = useDispatch();

    const onClickIsLogin = () => {
        dispatch(setIsLogin());
    };
    const onClickIsRegister = () => {
        dispatch(setIsRegister());
    };
    return (
        <>
            <div className='container'>
                <div className={row}>
                    <p>
                        <span>AnkiCards</span> - это программа, которая упрощает
                        запоминание. Поскольку это намного эффективнее
                        традиционных методов обучения, вы можете либо
                        значительно сократить время, затрачиваемое на учебу,
                        либо значительно увеличить объем знаний.
                    </p>
                    <p className={textWithButtons}>
                        Чтобы воспользоваться всеми возможностями AnkiCards
                        <button onClick={onClickIsLogin}>
                            Войдите
                        </button> или{" "}
                        <button onClick={onClickIsRegister}>
                            Зарегистрируйтесь
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
};
