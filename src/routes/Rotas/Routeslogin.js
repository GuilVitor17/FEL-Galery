import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Login from '../../componentes/Auth/login';
import Register from '../../componentes/Auth/register';
import RoutesPrivates from '../../componentes/Auth/RoutesPrivate';
import Home from '../../componentes/Auth/home';
import ForgotPassword from '../../componentes/Auth/forgot-password';
import ForgotPasswordToken from '../../componentes/Auth/forgotPasswordToken';



function routesLogin() {


    const user = localStorage.getItem("token");




    return (

        <>
            <Routes>
                {/* routes public */}
                <Route path="/" element={<Home />} />

                {/* routes register */}
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/forgot-password-token" element={<ForgotPasswordToken />} />
                <Route path="/create" element={<Register />} />


                {/* Routes login post */}

                {/* routes homepage private */}
                {user && <Route path="/livros/user" element={<RoutesPrivates />} />}

            </Routes>
        </>
    );
}

export default routesLogin;
