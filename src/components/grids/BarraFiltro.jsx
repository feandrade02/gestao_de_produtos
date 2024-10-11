import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import SearchIcon from '@mui/icons-material/Search';

export default function FiltroTabela({ fields, onFilter, onClear, onDownload }) {
  const [filters, setFilters] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const handleInputChange = (fieldName, value) => {
    setFilters(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSearch = () => {
    onFilter(filters);  // Passa os filtros para o componente pai
  };

  const handleClear = () => {
    const clearedFilters = fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {});
    setFilters(clearedFilters);
    onClear();  // Limpa os filtros no componente pai
  };

  return (
    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop:'20px', marginBottom: '20px' }}>
      {fields.map((field) => (
        <TextField
            sx={{
                width:'40%'
            }}
            key={field.name}
            label={field.label}
            variant="outlined"
            size="small"
            value={filters[field.name]}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
        />
      ))}

      {/* Botão de pesquisar */}
      <Button 
        variant="contained" 
        color="primary"
        onClick={handleSearch}
        startIcon={<SearchIcon />}
      >
        Pesquisar
      </Button>

      {/* Botão de limpar filtros */}
      <Button 
        variant="outlined" 
        color="secondary"
        onClick={handleClear}
        startIcon={<DeleteOutline />}
      >
        Limpar
      </Button>

      {/* botão de download da planilha em xlsx*/}
      <Button 
        variant="outlined" 
        color="primary"
        onClick={onDownload}
      >
        <DownloadIcon />
      </Button>
    </Box>
  );
}
