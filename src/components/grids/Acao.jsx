import { useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { ptBR } from "@mui/x-data-grid/locales";
import * as XLSX from 'xlsx';

import TituloTab from '../layout/TituloTab';
import BarraFiltro from './BarraFiltro';

const columns = [
    {
      field: 'acao',
      headerName: 'Ação',
      flex: 1,
      editable: true,
      align: 'left',
      headerAlign: 'center',
      headerClassName: 'header-align-right'
    },
    {
      field: 'dataDesativacao',
      headerName: 'Data de Desativação',
      flex: 1,
      editable: true,
      align: 'center',
      headerAlign: 'center',
      headerClassName: 'header-align-right'
    },
];

const rows = [
  { id: 1, acao: 'Campanha eFácil (Subir/Retirar)', dataDesativacao: '-' },
  { id: 2, acao: 'Categorização', dataDesativacao: '-' },
  { id: 3, acao: 'Correção Marketplace in', dataDesativacao: '-' },
  { id: 4, acao: 'Download', dataDesativacao: '-' }
];

// Função para converter e baixar os dados em um arquivo Excel
const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Acao");
  XLSX.writeFile(workbook, "tabela_acao.xlsx");
};

export default function Acao() {
  const [filteredRows, setFilteredRows] = useState(rows);

  const handleFilter = (filters) => {
    const { acao } = filters;
    
    if (acao === '') {
      setFilteredRows(rows);
      return;
    }
    
    const filteredData = rows.filter((row) => {
      return (
        (acao === '' || row.acao.toLowerCase().includes(acao.toLowerCase()))
      );
    });

    setFilteredRows(filteredData);
  };

  const handleClear = () => {
    setFilteredRows(rows);  // Reseta para os dados originais
  };

  return (
    <Box>
      <TituloTab titulo="Gestão de Campos" subtitulo="Ação" />

      <Box sx={{ width: '100%', maxWidth: '90%', margin: '0' }}>
        
        <BarraFiltro
          fields={[
            { name: 'acao', label: 'Ação' }
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
                justifyContent: 'space-between', 
                alignItems: 'center',
              },
              "& .header-align-right .MuiDataGrid-columnHeaderTitleContainer span": {
                flexGrow: 1,
                textAlign: 'center',
              },
              "& .header-align-right .MuiDataGrid-columnHeaderTitleContainer::before": {
                content: '""',
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
  );
}
