import { Box, Typography } from "@mui/material";
import { YellowButton } from "../Buttons/Buttons";
import CustomShape from "../CustomShape/CustomShape";

export default function Background() {
    return (
        <Box
            sx={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                '&::before': {
                    content: '""',
                    position: "absolute",
                    width: "200%",
                    height: "150%",
                    top: "-25%",
                    left: "-50%",
                    background: `
                        linear-gradient(
                            90deg,
                            rgba(161, 211, 255, 1) 20%,
                            rgba(255, 255, 255, 1) 40%,
                            rgba(247, 206, 46, 0.42) 100%
                        )`,
                    borderRadius: "50%",
                    maskImage: "linear-gradient(to right, transparent 10%, black 40%, black 60%, transparent 90%)",
                },
            }}
        >
            {/* <Box sx={{ 
                width: { xs: '90%', sm: '60%', md: '468.63px' }, // Use unidades relativas e breakpoints
                height: 'auto',
                padding: '16px',
                position: 'relative',
                zIndex: 1,
                mx: { xs: 'auto', sm: '360px' }, // Margem horizontal
                transform: { xs: 'none', md: 'translateY(-50%)' } // Ajuste fino de posicionamento vertical
            }}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '33%',
                    height: '4px',
                    backgroundColor: '#F4B400',
                    borderRadius: '8px 8px 0 0'
                }} />
                
                <Typography variant="h4" sx={{ 
                    mt: { xs: 2, md: 3 }, // Margem superior responsiva
                    mb: 3,
                    fontSize: { xs: '1.6rem', sm: '1.8rem' }, // Tamanho de fonte responsivo
                    lineHeight: 1.2,
                    fontWeight: 900
                }}>
                    POTENCIALIZE SUAS VENDAS COM ESTRATÉGIAS QUE REALMENTE FUNCIONAM
                </Typography>
                
                <Typography variant="body1" sx={{
                    mb: 4,
                    fontSize: { xs: '1.0rem', sm: '1.2rem' }, // Tamanho de fonte responsivo
                    lineHeight: 1.5,
                    color: 'text.secondary'
                }}>
                    Imagine enfrentar o desafio de administrar tantas vendas e clientes que precisará se reorganizar.
                    Esse é o tipo de resultado que alcançamos para negócios como o seu com nossa metodologia validada.
                </Typography>
                
                <YellowButton sx={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }} />
            </Box> */}
            <Box sx={{ 
                width: { xs: '90%', sm: '60%', md: '468.63px' }, // Use unidades relativas e breakpoints
                height: 'auto',
                padding: '16px',
                position: 'relative',
                zIndex: 1,
                mx: { xs: 'auto', sm: '360px' }, // Margem horizontal
                transform: { xs: 'none', md: 'translateY(-50%)' } // Ajuste fino de posicionamento vertical
            }}>
                <CustomShape />
            </Box>
        </Box>
    );
}