import React from "react";
import style from "./Footer.module.css";

export const Footer: React.FC = () => {
    const { root, row } = style;

    return (
        <>
            <div className={root}>
                <div className='container'>
                    <div className={row}>
                        <p>Учебный проект</p>
                        <p>
                            GitHub автора:{" "}
                            <a
                                href='https://github.com/Savitarich'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Savitarich
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
