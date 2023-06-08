import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const drawerWidth = 240;
import { useAuthContext } from '@/hooks/useAuthContext';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
function Nav1(props) {
	const router = useRouter();
	// const [user, setUser] = React.useState(true);
	// let user = true;
	const user = useContext(AuthContext);
	console.log(user);
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	// const navigate = useNavigate();

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{
				textAlign: 'center',
				backgroundColor: '#EEEEEE',
				color: 'black',
				height: '100%',
			}}
		>
			<Typography variant="h6" sx={{ my: 2, textAlign: '-webkit-center' }}>
				BaySick
			</Typography>
			{/* <Divider /> */}
			<List>
				<ListItem>
					<Button
						onClick={() => {
							router.push('/');
						}}
					>
						Home
					</Button>
				</ListItem>

				<ListItem>
					<Button
						onClick={() => {
							router.push('/products/him');
						}}
					>
						<ManIcon></ManIcon>
						he
					</Button>
				</ListItem>
				<ListItem>
					<Button
						onClick={() => {
							router.push('/products/her');
						}}
					>
						<WomanIcon></WomanIcon>
						she
					</Button>
				</ListItem>
				{user.user && (
					<ListItem>
						<Button
							onClick={() => {
								router.push('/profile');
							}}
						>
							<AccountCircleIcon fontSize="medium"></AccountCircleIcon>
							Profile
						</Button>
					</ListItem>
				)}
				{!user.user && (
					<ListItem>
						<Button
							onClick={() => {
								router.push('/signup');
							}}
							variant="contained"
						>
							Signup
						</Button>
					</ListItem>
				)}

				<ListItem>
					<Button
						onClick={() => {
							router.push('/products/cart');
						}}
					>
						<ShoppingBagTwoToneIcon></ShoppingBagTwoToneIcon>
						Cart
					</Button>
				</ListItem>
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div id="home">
			<Box sx={{ display: 'flex' }}>
				{/* <CssBaseline /> */}
				<AppBar
					component="nav"
					sx={{
						color: 'black',
						backgroundColor: '#EEEEEE',
						zIndex: '1000000',
					}}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							letterSpacing={4}
							fontFamily={'cursive'}
							color={'#334257'}
							sx={{
								flexGrow: 1,
								display: { xs: 'none', sm: 'block' },
								userSelect: 'none',
							}}
						>
							{/* <img height="60px" width="100px" src={'/next.svg'} />
							 */}
							BaySick
						</Typography>
						<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
							<Typography
								variant="h6"
								component="div"
								letterSpacing={4}
								fontFamily={'cursive'}
								color={'#334257'}
								sx={{
									flexGrow: 1,
									display: { xs: 'none', sm: 'block' },
									userSelect: 'none',
								}}
							>
								{/* <img height="60px" width="100px" src={'/next.svg'} />
								 */}
								BaySick
							</Typography>
						</Box>
						<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							<List sx={{ display: 'flex' }}>
								<ListItem>
									<Button
										onClick={() => {
											router.push('/');
										}}
									>
										Home
									</Button>
								</ListItem>
								<ListItem>
									<Button
										onClick={() => {
											router.push('/products/him');
										}}
									>
										<ManIcon></ManIcon>
										he
									</Button>
								</ListItem>
								<ListItem>
									<Button
										onClick={() => {
											router.push('/products/her');
										}}
									>
										<WomanIcon></WomanIcon>
										she
									</Button>
								</ListItem>
								{/* {user && (
									<ListItem>
										<Button>
											<AccountCircleIcon fontSize="medium"></AccountCircleIcon>
										</Button>
									</ListItem>
								)} */}
								{user.user && (
									<ListItem>
										<Button
											onClick={() => {
												router.push('/profile');
											}}
										>
											<AccountCircleIcon fontSize="medium"></AccountCircleIcon>
											Profile
										</Button>
									</ListItem>
								)}

								<ListItem>
									<Button
										onClick={() => {
											router.push('/products/cart');
										}}
									>
										<ShoppingBagTwoToneIcon></ShoppingBagTwoToneIcon>
										Cart
									</Button>
								</ListItem>

								{!user.user && (
									<ListItem>
										<Button
											onClick={() => {
												router.push('/signup');
											}}
											variant="contained"
										>
											Signup
										</Button>
									</ListItem>
								)}
							</List>
						</Box>
					</Toolbar>
				</AppBar>
				<Box
					component="nav"
					sx={{ background: 'rgb(30, 30, 30)', height: '100%' }}
				>
					<Drawer
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: {
								xs: 'block',
								sm: 'none',
								backgroundColor: 'rgb(29, 32, 38)',
							},
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
				</Box>
				<Box component="main">
					<Toolbar />
				</Box>
			</Box>
		</div>
	);
}

Nav1.propTypes = {
	window: PropTypes.func,
};

export default Nav1;
