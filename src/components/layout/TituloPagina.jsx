import { Box, Typography } from '@mui/material';
import DoubleArrow from '@mui/icons-material/DoubleArrow';

export default function TituloPagina({ titulo, subtitulo }) {
    return (
    <Box display="flex" alignItems="center" mt={2}>
      {/* Title */}
      <Typography variant="h6" component="span" sx={{ marginRight: '8px' }}>
        {titulo}
      </Typography>
      
      <DoubleArrow  sx={{color: '#d3d3d3'}} />

      {/* Subtitle */}
      <Typography sx={{color: '#708090'}} variant="body1" component="span">
        {subtitulo}
      </Typography>
    </Box>
    )
}