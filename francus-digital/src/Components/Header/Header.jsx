import * as React from 'react';
import { AppBar, Box, Button, Toolbar, useMediaQuery, useTheme } from '@mui/material';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundColor: '#4A89C2',
        boxShadow: 'none',
        height: 'auto' // Altura automática
      }}>
        <Toolbar sx={{
          justifyContent: 'flex-end',
          minHeight: '64px !important', // Altura padrão do header
          padding: '0 20px'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? 1 : 2,
            '& .MuiButton-root': {
              padding: 0,
              minWidth: 'auto',
              fontWeight: 'bold',
              fontSize: isMobile ? '1rem' : '1.2rem',
              whiteSpace: 'nowrap'
            },
            '& .separator': {
              borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
              height: '1.2em',
              mx: isMobile ? 1 : 2
            }
          }}>
            <Button color="inherit">Soluções</Button>
            <Box className="separator" />
            <Button color="inherit">Cases</Button>
            <Box className="separator" />
            <Button color="inherit">Quem Somos</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;