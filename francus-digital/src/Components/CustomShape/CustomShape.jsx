import React from 'react';
import { Box } from '@mui/material';

const CustomShape = () => {
  return (
    <Box
      sx={{
        width: 411.36,
        height: 504,
        overflow: 'hidden',
        backgroundColor: '#21598B',
        position: 'relative',
        clipPath: 'polygon(10% 0%, 8% 10%, 8% 2%, 0% 100%, 100% 100%, 100% 0% )',
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          transition: 'transform 0.3s ease',
          position: 'absolute',
          top: 0,
          left: 0,
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }
      }}
    >
      <img 
        src='Image/radhe.jpg' 
        alt="Imagem decorativa" 
        style={{
          // Garante que a imagem cubra todo o espaço mesmo se o caminho do clipping mudar
          minWidth: '100%',
          minHeight: '100%'
        }}
      />
    </Box>
  );
};

export default CustomShape;