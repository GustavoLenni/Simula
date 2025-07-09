import { Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/home';
import Login from './pages/login';
import images from "./assets/images";

import "./css/nav.css";

export default function AppRoutes() {
    const location = useLocation();

    // Rotas que não usam o headerNav
    const noLayoutRoutes = ['/','login'];

    const isNoLayout = noLayoutRoutes.includes(location.pathname);

    return (
        <>
            {/* Renderiza o headerNav apenas se não estiver em uma rota sem layout */}
            {!isNoLayout && (
                <div className="header">
                    <div className="nav">
                        <img alt="Logo" src={images.LogoNome}></img>
                    </div>
                </div>
            )}

            {/* Define as rotas aqui */}
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    {/* Adicione outras rotas conforme necessário */}
                </Routes>
            </div>
        </>
    );
}
