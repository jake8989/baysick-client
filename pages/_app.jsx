import '@/styles/globals.css';
import { makeStyles } from '@material-ui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { AuthContextProvider } from '@/context/AuthContext';
const theme = createTheme({
	palette: {
		background: {
			default: '#EEEEEE',
			paper: '#EEEEEE',
		},
		primary: {
			main: '#334257',
		},
		secondary: {
			main: '#476072',
			light: '#EEEEEE',
		},
	},
});

const useStyles = makeStyles((theme) => ({
	root: {
		color: theme.palette.primary.main,
	},
}));

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<AuthContextProvider>
				<Component {...pageProps} />
			</AuthContextProvider>
		</ThemeProvider>
	);
}
