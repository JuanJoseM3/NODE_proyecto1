import axios from 'axios';

import { usersActions } from '../slices/user.slice';

const API_URL = 'http://localhost:3016/api/v1/users';

export const login = (accountNumber, password) => {
	return async dispatch => {
		try {
			const loginAttempt = { accountNumber, password };
			// API REQUEST
			const res = await axios.post(`${API_URL}/login`, loginAttempt);
			const { loginData } = res.data;
			console.log(loginData);

 			dispatch(usersActions.login({ loginData }));
 		} catch (error) {
			console.log(error);
		}
	};
};

export const signup = (name, email, password) => {
	return async dispatch => {
		try {
			const signUpData = { name, email, password }
			const API_URL = `${API_URL}/signup`;
			await axios.post(API_URL, signUpData);
		} catch (error) {
			console.log(error);
		}
	};
};

export const logout = () => {
	return async dispatch => {
		try {
			dispatch(usersActions.logout());
		} catch (error) {
			console.log(error);
		}
	};
};
