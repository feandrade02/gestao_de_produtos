import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import TituloTab from '../layout/TituloTab';

const columns = [
    { field: 'prioridade', headerName: 'Prioridade', width: 500 },
    {
      field: 'servico',
      headerName: 'Serviço',
      width: 500,
      editable: true,
    },
    {
      field: 'dataDesativacao',
      headerName: 'Data de Desativação',
      width: 500,
      editable: true,
    },
  ];

  const rows = [
    { id: 1, prioridade: 1, servico: 'Correção', dataDesativacao: '-' },
    
  ];

export default function Servico() {
    return(
        <Box>
            <TituloTab titulo="Gestão de Campos" subtitulo="Serviço" />

            <DataGrid
                sx={{marginTop: '20px'}}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 3,
                        },
                    },
                }}
                pageSizeOptions={[3]}
            />
        </Box>
    )
}