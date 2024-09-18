import { useState } from "react";
import { Container, Tabs, Tab, Box } from "@mui/material";

import PaginaBase from "../layout/PaginaBase";
import Servico from "../grids/Servico";
import Acao from "../grids/Acao";
import StatusAcao from "../grids/StatusAcao";

export default function GestaoCampos() {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (e, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <PaginaBase>
            <Container>
                <Box>
                    <Tabs 
                        value={activeTab}
                        onChange={handleChange}
                        aria-label="tabs example"
                        style={{marginTop: "1.5rem", marginBottom: "3rem"}}
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
            </Container>
        </PaginaBase>
    );
}