import { Box, Typography } from '@mui/material';
import DoubleArrow from '@mui/icons-material/DoubleArrow';

export default function TituloPagina({ titulo, subtitulo }) {
    return (
    <Box display="flex" alignItems="center" >
      {/* Title */}
      <Typography variant="subtitle1" component="span" sx={{ marginRight: '8px', marginLeft: '20px' }}>
        {titulo}
      </Typography>
      
      <DoubleArrow  sx={{color: '#d3d3d3'}} />

      {/* Subtitle */}
      <Typography sx={{color: '#708090'}} variant="body2" component="span">
        {subtitulo}
      </Typography>
    </Box>
    )
}