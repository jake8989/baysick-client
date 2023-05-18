import { createContext, useReducer } from 'react';
export const AuthContext = createContext();
import React from 'react';
export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN': {
			return { user: action.payload };
		}
		case 'LOGOUT': {
			return { user: null };
		}
		default:
			return state;
	}
};
export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});
	console.log('auth state', state);
	// console.log(localStorage.getItem('user'));
	React.useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			dispatch({ type: 'LOGIN', payload: user });
		}
	}, []);
	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
