import React from "react";
import style from "./Presentational.module.css";

export const Presentational: React.FC = () => {
    const { row, textWithButtons } = style;
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
                        <button>Войдите</button> или{" "}
                        <button>Зарегистрируйтесь</button>
                    </p>
                </div>
            </div>
        </>
    );
};
