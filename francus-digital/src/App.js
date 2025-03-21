import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GreenButton, YellowButton } from './Components/Buttons/Buttons';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GreenButton />
      <YellowButton />
    </ThemeProvider>
  );
}
