import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

import PaginaBase from "../layout/PaginaBase";
import Servico from "../grids/Servico";
import Acao from "../grids/Acao";
import StatusAcao from "../grids/StatusAcao";
import TituloPagina from "../layout/TituloPagina";

export default function GestaoCampos({ titulo, subtitulo }) {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <PaginaBase>
            <Box sx={{ml: '1.5rem'}}>
                <TituloPagina titulo={titulo} subtitulo={subtitulo} /> 
                <Tabs 
                    value={activeTab}
                    onChange={handleChange}
                    aria-label="tabs example"
                    style={{marginTop: ".5rem", marginBottom: "1rem"}}
                >
                    <Tab label="Serviço" />
                    <Tab label="Ação" />
                    <Tab label="Status da Ação" />
                </Tabs>
                <Box className="tab-content">
                    {activeTab === 0 && <Servico />}
                    {activeTab === 1 && <Acao />}
                    {activeTab === 2 && <StatusAcao />}
                </Box>
            </Box>
        </PaginaBase>
    );
}