import { useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { ptBR } from "@mui/x-data-grid/locales";
import * as XLSX from 'xlsx';

import TituloTab from '../layout/TituloTab';
import BarraFiltro from './BarraFiltro';

const columns = [
    { 
      field: 'prioridade',
      headerName: 'Prioridade', 
      width: 400,
      align: 'right',
      headerAlign: 'center', 
      headerClassName: 'header-align-right'
    },
    {
      field: 'servico',
      headerName: 'Serviço',
      width: 400,
      editable: true,
      align: 'left',
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
    { id: 1, prioridade: 1, servico: 'Correção', dataDesativacao: '-' },
    { id: 2, prioridade: 2, servico: 'Item Novo', dataDesativacao: '-' },
    { id: 3, prioridade: 3, servico: 'Atividade', dataDesativacao: '-' },
    { id: 4, prioridade: 4, servico: 'Melhoria', dataDesativacao: '-' }
  ];

  // Função para converter e baixar os dados em um arquivo Excel
const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Servicos");
  
  // Gerar o arquivo Excel e fazer o download
  XLSX.writeFile(workbook, "tabela_servicos.xlsx");
};

export default function Servico() {

  const [filteredRows, setFilteredRows] = useState(rows);

  const handleFilter = (filters) => {
    const { servico, prioridade } = filters;
    
    // Se ambos os filtros estiverem vazios, mostram-se todos os dados (estado original)
    if (servico === '' && prioridade === '') {
      setFilteredRows(rows);
      return;
    }

    const filteredData = rows.filter((row) => {
      return (
        (servico === '' || row.servico.toLowerCase().includes(servico.toLowerCase())) &&
        (prioridade === '' || row.prioridade === Number(prioridade))
      );
    });

    setFilteredRows(filteredData);
  };

  const handleClear = () => {
    setFilteredRows(rows);  // Reseta para os dados originais
  };

    return(
        <Box>
            <TituloTab titulo="Gestão de Campos" subtitulo="Serviço" />

            <Box sx={{ width: '100%', maxWidth: '1210px', margin: '0' }}>

              <BarraFiltro 
                fields={[
                  { name: 'servico', label: 'Serviço' },
                  { name: 'prioridade', label: 'Prioridade' }
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