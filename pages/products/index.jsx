import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
const Products = () => {
	const router = useRouter();
	return (
		<Box>
			<Typography
				letterSpacing={4}
				fontFamily={'cursive'}
				variant="h2"
				marginTop={'3rem'}
				fontWeight={'600'}
				color={'#334257'}
				textAlign={'center'}
				sx={{
					userSelect: 'none',
					'@media(max-width:452px)': {
						fontSize: '40px',
					},
				}}
			>
				T-Shirt's for Him/Her
			</Typography>
			<Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
				<Box
					sx={{
						':hover': { cursor: 'pointer' },
						border: '1px solid black',
						borderRadius: '10px',
					}}
					margin={'2rem'}
				>
					<Image
						onClick={() => {
							router.push('/products/him');
						}}
						src="/him.png"
						height="300"
						width={'300'}
					></Image>
				</Box>
				<Box
					sx={{
						':hover': { cursor: 'pointer' },
						border: '1px solid black',
						borderRadius: '10px',
					}}
					margin={'2rem'}
				>
					<Image
						onClick={() => {
							router.push('/products/him');
						}}
						src="/her.png"
						height="300"
						width={'300'}
					></Image>
				</Box>
				{/* <Box></Box> */}
			</Box>
		</Box>
	);
};

export default Products;
