import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GreenButton, YellowButton } from './Components/Buttons/Buttons';
import Header from './Components/Header/Header';
import Company from './Components/Company/Company';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Company />
    </ThemeProvider>
  );
}