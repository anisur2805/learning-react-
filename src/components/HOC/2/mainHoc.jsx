import React from 'react'

import HOC from './HOC'
import StockList from "./StockList";
import UserList from "./UserList";
const StocksData = [
	{
		id: 1,
		name: "Krunal",
	},
	{
		id: 2,
		name: "Ankit",
	},
	{
		id: 3,
		name: "Rushabh",
	},
];

const UsersData = [
	{
		id: 1,
		name: "Krunal",
	},
	{
		id: 2,
		name: "Ankit",
	},
	{
		id: 3,
		name: "Rushabh",
	},
];

const Stocks = HOC(StockList, StocksData);
const Users = HOC(UserList, UsersData);

const mainHoc = () => {
	return (
		<div>
			<Stocks></Stocks>
			<Users></Users>
			<h1>Work</h1>
		</div>
	)
}

export default mainHoc
