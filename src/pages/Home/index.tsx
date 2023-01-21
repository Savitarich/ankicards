import React from "react";
import { Presentational } from "../../components/Presantational";

export const Home: React.FC = () => {
    const isAuth = false;
    //!!!!

    return <>{isAuth ? <></> : <Presentational></Presentational>}</>;
};
