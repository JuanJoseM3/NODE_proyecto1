import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { getUsersTransfers } from '../../../store/actions/transfers.actions';

// Components
import TransferItem from '../transfer-item/transfer-item.component';

import classes from './transfer-history.module.css';


/* const transfers = [
	{ id: 't1', amount: 200, date: '2022-4-12', user: 'Max' },
	{ id: 't2', amount: 500, date: '2022-5-20', user: 'Joe' },
	{ id: 't3', amount: 700, date: '2022-6-4', user: 'John' },
]; */

const TransferHistory = () => {
	const user = useSelector(state => state.users.user);
	const transfers = useSelector(state => state.transfers);
 
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsersTransfers(user));
	}, [dispatch]);

	return (
		<div>
			{transfers &&
				transfers.map(transfer => <TransferItem transfer={transfer} />)}
		</div>
	);
};

export default TransferHistory;
