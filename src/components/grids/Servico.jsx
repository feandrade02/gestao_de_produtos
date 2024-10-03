import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import TituloTab from '../layout/TituloTab';

// Traduções para Português brasileiro para DataGrid
const ptBRLocaleText = {
  // Pagination
  columnMenuUnsort: 'Remover ordenação',
  columnMenuSortAsc: 'Ordenar ascendente',
  columnMenuSortDesc: 'Ordenar descendente',
  columnMenuFilter: 'Filtrar',
  columnMenuHideColumn: 'Esconder coluna',
  columnMenuShowColumns: 'Mostrar colunas',
  noRowsLabel: 'Nenhuma linha',
  noResultsOverlayLabel: 'Nenhum resultado encontrado.',
  errorOverlayDefaultLabel: 'Ocorreu um erro.',

  // Pagination
  toolbarDensity: 'Densidade',
  toolbarDensityLabel: 'Densidade',
  toolbarDensityCompact: 'Compacto',
  toolbarDensityStandard: 'Padrão',
  toolbarDensityComfortable: 'Confortável',

  // Pagination
  toolbarColumns: 'Colunas',
  toolbarColumnsLabel: 'Mostrar seletor de colunas',

  // Footer
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount} de ${totalCount}`,
};

const columns = [
    { 
      field: 'prioridade',
      headerName: 'Prioridade', 
      width: 300,
      align: 'right',
      headerAlign: 'center' 
    },
    {
      field: 'servico',
      headerName: 'Serviço',
      width: 300,
      editable: true,
      align: 'left',
      headerAlign: 'center'
    },
    {
      field: 'dataDesativacao',
      headerName: 'Data de Desativação',
      width: 300,
      editable: true,
      align: 'center',
      headerAlign: 'center'
    },
  ];

  const rows = [
    { id: 1, prioridade: 1, servico: 'Correção', dataDesativacao: '-' },
    
  ];

export default function Servico() {
    return(
        <Box>
            <TituloTab titulo="Gestão de Campos" subtitulo="Serviço" />

            <Box sx={{ width: '100%', maxWidth: '90%', margin: '0' }}>
              <DataGrid
                  sx={{marginTop: '20px'}}
                  rows={rows}
                  columns={columns}
                  localeText={ptBRLocaleText} 
                  initialState={{
                      pagination: {
                          paginationModel: {
                              pageSize: 3,
                          },
                      },
                  }}
                  pageSizeOptions={[1, 2, 3, 4, 5, 6]}
              />
            </Box>
            
        </Box>
    )
}