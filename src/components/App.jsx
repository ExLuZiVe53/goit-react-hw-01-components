import React from 'react';
import user from './json/user.json';
import { Profile } from './Profile/Profile';
import data from './json/data.json';
import { StatisticsList } from './Statistics/Statistics';
import friends from './json/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactions from './json/transactions.json';
import { Transactions } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />
      <StatisticsList data={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
