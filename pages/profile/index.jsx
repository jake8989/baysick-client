import React, { useEffect } from 'react';
import { Paper } from '@mui/material';
import { useLogout } from '@/hooks/useLogout';
import { useRouter } from 'next/router';
import {
	InputAdornment,
	IconButton,
	Theme,
	Snackbar,
	Button,
	Alert,
	Typography,
	Box,
} from '@mui/material';
import Nav1 from '@/components/Navbar';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const index = () => {
	const router = useRouter();
	const { logout, isLoggedout } = useLogout();
	const user = useContext(AuthContext);
	// console.log(user.user);
	const logoutF = () => {
		logout(router);
	};
	return (
		<main>
			<Nav1></Nav1>
			<Paper>
				{/* <h1>{'Profile Page'}</h1>
			<Button onClick={logoutF}>Logout</Button>
			{isLoggedout && (
				<Snackbar open={open} autoHideDuration={2000}>
					<Alert severity="success" sx={{ width: '100%' }}>
						Loggedout Succesfully
					</Alert>
				</Snackbar>
			)} */}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						paddingBottom: '5rem',
					}}
				>
					<Box paddingTop={'4rem'}>
						<Typography
							variant="h4"
							textAlign={'center'}
							fontFamily={'cursive'}
						>
							Profile
						</Typography>
						{!user.user && (
							<Typography
								variant="h6"
								textAlign={'center'}
								fontFamily={'cursive'}
								color={'red'}
							>
								User is Not logged in!
							</Typography>
						)}
					</Box>
					<Box
						display={'flex'}
						justifyContent={'space-evenly'}
						alignItems={'center'}
						// flex={'1'}
						marginTop={'4rem'}
						width={'80vw'}
						// border={'2px solid green'}
						flexWrap={'wrap'}
					>
						<Paper>
							<Box height={'500px'} width={'350px'}>
								{/* <Paper> */}
								<Box
									display={'flex'}
									flexDirection={'column'}
									justifyContent={'center'}
									alignItems={'center'}
								>
									<img
										src="https://ssg-prod.s3.amazonaws.com/projects/83ffe5d5-80b2-4c9e-be03-63cfccbeb1c9/dummy2.JPG"
										alt="profile image"
										height={'150px'}
										width={'200px'}
										style={{ borderRadius: '15px 40px' }}
									/>
									{!user.user && (
										<Typography
											variant="h5"
											color={'#334257'}
											fontFamily={'cursive'}
											textAlign={'center'}
										>
											user
										</Typography>
									)}
									{user.user && (
										<Typography
											variant="h5"
											color={'#334257'}
											fontFamily={'cursive'}
											textAlign={'center'}
										>
											{user.user.user.name}
										</Typography>
									)}
									{!user.user && (
										<Typography
											// variant="h5"
											color={'#334257'}
											fontFamily={'cursive'}
											textAlign={'center'}
										>
											Phone
										</Typography>
									)}
									{user.user && (
										<Typography
											// variant="h5"
											color={'#334257'}
											mt={'1rem'}
											fontFamily={'cursive'}
											textAlign={'center'}
										>
											Phone:
											{user.user.user.phone}
											<span style={{ fontSize: '10px' }}>( not verified)</span>
										</Typography>
									)}
									{!user.user && (
										<Typography
											// variant="h5"
											color={'#334257'}
											fontFamily={'cursive'}
											textAlign={'center'}
										>
											Email
										</Typography>
									)}
									{user.user && (
										<Typography
											// variant="h5"
											color={'#334257'}
											mt={'1rem'}
											fontFamily={'cursive'}
											textAlign={'center'}
										>
											Email:
											{user.user.user.email}
											<span style={{ fontSize: '10px' }}>( not verified)</span>
										</Typography>
									)}
									{!user.user && (
										<Typography
											// variant="h5"
											color={'#334257'}
											fontFamily={'cursive'}
											textAlign={'center'}
										>
											Address
										</Typography>
									)}
									{user.user && (
										<Typography
											// variant="h5"
											color={'#334257'}
											mt={'1rem'}
											fontFamily={'cursive'}
											textAlign={'center'}
										>
											Address:
											{user.user.user.address}
										</Typography>
									)}
									<Typography textAlign={'center'}>
										<Button
											sx={{ mt: '2rem', background: 'red' }}
											variant="contained"
											onClick={logoutF}
											disabled={!user.user}
										>
											Logout
										</Button>
									</Typography>
								</Box>
								{/* </Paper> */}
							</Box>
						</Paper>
						{/* <Paper> */}
						<Box height={'500px'} width={'350px'}>
							{/* <Paper> */}
							<Box>
								<Paper>
									<Typography
										variant="h6"
										color={'#334257'}
										fontFamily={'cursive'}
										textAlign={'center'}
									>
										Liked Items
									</Typography>
									<Box display={'flex'} flexDirection={'column'} mt="1rem">
										<Box height={'40px'}>
											<Typography
												color={'#334257'}
												fontFamily={'cursive'}
												textAlign={'center'}
											>
												Item-1
												<Button>
													<DeleteOutlineIcon></DeleteOutlineIcon>
												</Button>
											</Typography>
										</Box>
										<Box height={'40px'}>
											<Typography
												color={'#334257'}
												fontFamily={'cursive'}
												textAlign={'center'}
											>
												Item-2
												<Button>
													<DeleteOutlineIcon></DeleteOutlineIcon>
												</Button>
											</Typography>
										</Box>
										<Box height={'40px'}>
											<Typography
												color={'#334257'}
												fontFamily={'cursive'}
												textAlign={'center'}
											>
												Item-3
												<Button>
													<DeleteOutlineIcon></DeleteOutlineIcon>
												</Button>
											</Typography>
										</Box>
										<Box height={'40px'}>
											<Typography
												color={'#334257'}
												fontFamily={'cursive'}
												textAlign={'center'}
											>
												Item-4
												<Button>
													<DeleteOutlineIcon></DeleteOutlineIcon>
												</Button>
											</Typography>
										</Box>
										<Box height={'40px'}>
											<Typography
												color={'#334257'}
												fontFamily={'cursive'}
												textAlign={'center'}
											>
												Item-5
												<Button>
													<DeleteOutlineIcon></DeleteOutlineIcon>
												</Button>
											</Typography>
										</Box>
									</Box>
								</Paper>
							</Box>
							<Box mt={'84px'}>
								<Paper>
									<Typography
										variant="h6"
										color={'#334257'}
										fontFamily={'cursive'}
										textAlign={'center'}
									>
										Orders (last-3)
									</Typography>
									<Box display={'flex'} flexDirection={'column'} mt="1rem">
										<Box height={'40px'}>
											<Typography
												color={'#334257'}
												fontFamily={'cursive'}
												textAlign={'center'}
											>
												Item-1
											</Typography>
										</Box>
										<Box height={'40px'}>
											<Typography
												color={'#334257'}
												fontFamily={'cursive'}
												textAlign={'center'}
											>
												Item-2
											</Typography>
										</Box>
										<Box height={'40px'}>
											<Typography
												color={'#334257'}
												fontFamily={'cursive'}
												textAlign={'center'}
											>
												Item-3
											</Typography>
										</Box>
									</Box>
								</Paper>
							</Box>
							{/* </Paper> */}
						</Box>
						{/* </Paper> */}
					</Box>
				</Box>
			</Paper>
		</main>
	);
};

export default index;
