import { useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { ptBR } from "@mui/x-data-grid/locales";
import * as XLSX from 'xlsx';

import TituloTab from '../layout/TituloTab';
import BarraFiltro from './BarraFiltro';

const columns = [
    { 
      field: 'statusAcao',
      headerName: 'Status da Ação', 
      width: 400,
      align: 'left',
      headerAlign: 'center', 
      headerClassName: 'header-align-right'
    },
    {
      field: 'rotulo',
      headerName: 'Rótulo',
      width: 400,
      editable: true,
      align: 'center',
      headerAlign: 'center',
      headerClassName: 'header-align-right'
    },
    {
      field: 'dataDesativacao',
      headerName: 'Data de Desativação',
      width: 400,
      editable: true,
      align: 'center',
      headerAlign: 'center',
      headerClassName: 'header-align-right'
    },
  ];

  const rows = [
    { id: 1, statusAcao: 'Pendente/Catálogo', rotulo: '', dataDesativacao: '-' },
    { id: 2, statusAcao: 'Pendente/Comprador', rotulo: '', dataDesativacao: '-' },
    { id: 3, statusAcao: 'Pendente/Marca Própria', rotulo: '', dataDesativacao: '-' },
    { id: 4, statusAcao: 'Pendente/Fornecedor', rotulo: '', dataDesativacao: '-' },
    { id: 5, statusAcao: 'Em Andamento', rotulo: '', dataDesativacao: '-' },
    { id: 6, statusAcao: 'Concluída', rotulo: '', dataDesativacao: '-' },
    { id: 7, statusAcao: 'Cancelada', rotulo: '', dataDesativacao: '-' }
  ];

  // Função para converter e baixar os dados em um arquivo Excel
const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "StatusAcao");
  
  // Gerar o arquivo Excel e fazer o download
  XLSX.writeFile(workbook, "tabela_statusAcoes.xlsx");
};

export default function Servico() {

    const [filteredRows, setFilteredRows] = useState(rows);

    const handleFilter = (filters) => {
        const { statusAcao, rotulo } = filters;
        
        if (statusAcao === '' && rotulo === '') {
            setFilteredRows(rows);
            return;
        }

        const filteredData = rows.filter((row) => {
        return (
            (statusAcao === '' || row.statusAcao.toLowerCase().includes(statusAcao.toLowerCase())) &&
            (rotulo === '' || row.rotulo === Number(rotulo))
        );
        });

        setFilteredRows(filteredData);
    };

    const handleClear = () => {
        setFilteredRows(rows);  // Reseta para os dados originais
    };

    return(
        <Box>
            <TituloTab titulo="Gestão de Campos" subtitulo="Status Ação" />

            <Box sx={{ width: '100%', maxWidth: '1210px', margin: '0' }}>

            <BarraFiltro 
                fields={[
                  { name: 'statusAcao', label: 'Status da Ação' },
                  { name: 'rotulo', label: 'Rótulo' }
                ]}
                onFilter={handleFilter} 
                onClear={handleClear}
                onDownload={exportToExcel}
              />  
              
              <DataGrid
                  sx={{
                    marginTop: '20px',
                    "& .MuiDataGrid-menuIcon": {
                      display: "none",
                    },
                    "& .header-align-right .MuiDataGrid-columnHeaderTitleContainer": {
                      display: 'flex',
                      justifyContent: 'space-between', // Usa o espaço entre os itens
                      alignItems: 'center',
                    },
                    "& .header-align-right .MuiDataGrid-columnHeaderTitleContainer span": {
                      flexGrow: 1, // O título ocupa o espaço central
                      textAlign: 'center',
                    },
                    "& .header-align-right .MuiDataGrid-columnHeaderTitleContainer::before": {
                      content: '""', // Elemento invisível à esquerda
                      width: '24px',
                      height: '1px',
                      visibility: 'hidden',
                    }
                  }}
                  rows={filteredRows}
                  columns={columns}
                  // pageSize={5}
                  localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}  
                  initialState={{
                      pagination: {
                          paginationModel: {
                              pageSize: 5,
                          },
                      },
                  }}
                  pageSizeOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              />
            </Box>
            
        </Box>
    )
}