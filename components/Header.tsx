import React from 'react';
import { useUserStore } from '../stores/UserStore';

const Header = ({ name }) => {
  const { setName } = useUserStore();

  return (
    <header className="flex items-center justify-between bg-teal-500">
      <p>{name}</p>
      <input onChange={e => setName(e.target.value)} placeholder="Enter name" />
    </header>
  );
};

export default Header;
