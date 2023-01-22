import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { Presentational } from "../../components/Presantational";
import { RegisterModal } from "../../components/RegisterModal";
import { LoginModal } from "../../components/LoginModal";

export const Home: React.FC = () => {
    const isAuth = false;
    //!!!!
    const isLoginModalShow = useSelector(
        (state: RootState) => state.modals.isLogin
    );
    const isRegisterModalShow = useSelector(
        (state: RootState) => state.modals.isRegister
    );

    return (
        <>
            {isAuth ? (
                <></>
            ) : (
                <>
                    <Presentational></Presentational>
                </>
            )}
            {isLoginModalShow && <LoginModal></LoginModal>}
            {isRegisterModalShow && <RegisterModal></RegisterModal>}
        </>
    );
};
