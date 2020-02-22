import React from 'react';
import Counter from './Counter';
import { Floss } from '../utils/types';

const FlossCard = ({ brand, color, r, g, b }: Floss) => {
  return (
    <div className="flex m-4 p-1 w-1/4 justify-between border border-indigo-800">
      <div
        className="w-16 h-16 relative"
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          right: '15px',
        }}
      />
      <div className="flex flex-col justify-around">
        <p className="font-sans tracking-wide font-medium">{brand}</p>
        <p className="font-sans">{color}</p>
      </div>
      <p className="text-4xl">0</p>
      <Counter
        add={() => console.log('Add')}
        remove={() => console.log('Remove')}
      />
    </div>
  );
};

export default FlossCard;
