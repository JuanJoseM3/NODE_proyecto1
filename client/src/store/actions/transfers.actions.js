import axios from 'axios';

import { transfersActions } from '../slices/transfers.slice';

const API_URL = 'http://localhost:3016/api/v1/transfers';

export const getUsersTransfers = userId => {
	return async dispatch => {
		try {

			// API REQUEST
			const res = await axios.get('http://localhost:3016/api/v1/users/:id/history');
			const { transactions } = res.data;
			dispatch(transfersActions.getTransfers({ transactions }));
		} catch (error) {
			console.log(error);
		}
	};
};

export const newTransfer = (accountNumber, amount) => {
	return async dispatch => {
		try {
			
			const transfer = { accountNumber, amount };
			const res = await axios.post(API_URL, transfer);
			const { transferData } = res.data
			// API REQUEST
			dispatch(transfersActions.newTransfer({ transferData }));
		} catch (error) {
			console.log(error);
		}
	};
};
