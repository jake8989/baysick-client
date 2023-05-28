import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
export default function AddressForm() {
	const data = new FormData(document.getElementById('form-data'));
	let firstName = data.get('firstName');
	let lastName = data.get('lastName');
	let addressForUser = data.get('address1');
	let houseNo = data.get('house');
	let area = data.get('area');
	let city = data.get('city');
	let state = data.get('state');
	let zip = data.get('zip');
	console.log(
		firstName,
		lastName,
		addressForUser,
		houseNo,
		area,
		state,
		city,
		zip
	);

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Shipping address
			</Typography>
			<Box component="form" id="form-data">
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="firstName"
							name="firstName"
							label="First name"
							fullWidth
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="lastName"
							name="lastName"
							label="Last name"
							fullWidth
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="address1"
							name="address1"
							label="Address line 1"
							fullWidth
							// autoComplete="shipping address-line1"
							variant="standard"
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="house"
							name="house"
							label="House No."
							fullWidth
							// autoComplete="shipping address-level2"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="area"
							name="area"
							label="Area"
							fullWidth
							// autoComplete="shipping address-level2"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="city"
							name="city"
							label="City"
							fullWidth
							// autoComplete="shipping address-level2"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="state"
							name="state"
							label="State/Province/Region"
							fullWidth
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="zip"
							name="zip"
							label="Zip / Postal code"
							fullWidth
							// autoComplete="shipping postal-code"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="country"
							name="country"
							label="Country"
							fullWidth
							// autoComplete="shipping country"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Checkbox color="secondary" name="saveAddress" value="yes" />
							}
							label="Use this address for payment details"
						/>
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	);
}
