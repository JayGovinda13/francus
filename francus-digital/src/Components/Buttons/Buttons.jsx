import React from 'react'
import { Button} from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const GreenButton = () => {
    return (
      <Button
        variant="contained"
        sx={{
          width: 318,
          height: 58,
          position: 'relative',
          overflow: 'hidden',
          color: '#FFFFFF',
          borderRadius: 0, // ← Aqui está o ajuste para pontas retas
          fontSize: {
            xs: '1rem',
            md: '1.25rem',
            lg: '1.5rem'
          },
          backgroundColor: '#4D7B13',
          transition: 'background-color 0.4s ease',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, #6CAD1B 50%, #86C736 50%)',
            opacity: 1,
            transition: 'opacity 0.4s ease'
          },
          '&:hover': {
            backgroundColor: '#4D7B13',
            borderRadius: 0, // Mantém as bordas retas no hover
            '&::before': {
              opacity: 0
            }
          }
        }}
      >
        <span style={{ position: 'relative', zIndex: 1 }}>
          Vender Mais
        </span>
      </Button>
    )
  }

  export const YellowButton = () => {
    return (
      <Button
        variant="contained"
        sx={{
          width: 296.54,
          height: 68,
          position: 'relative',
          overflow: 'hidden',
          color: '#FFFFFF',
          fontSize: {
            xs: '1.2rem',
            md: '1.45rem',
            lg: '1.7rem'
          },
          borderRadius: '12px', 
          fontWeight: '800',
          backgroundColor: '#FFC300',
          transition: 'background-color 0.4s ease',

          '&:hover': {
            backgroundColor: '#CE9800',
            '&::before': {
              opacity: 0
            }
          }
        }}
      >
        <span style={{ 
          position: 'relative', 
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          Vender Mais<ArrowOutwardIcon sx={{ fontSize: '1.2em' }} />
        </span>
      </Button>
    )
  }