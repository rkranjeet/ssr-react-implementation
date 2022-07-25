import React from 'react';
import { useSelector } from 'react-redux';

const Second = () => {
  const setData = useSelector(state => state.setData);
  return (
    <div style={{ flexDirection: 'column' }}>
      <div style={{ flexDirection: 'row' }}>
        <h3>Data Shared by First</h3>
        <h2>{JSON.stringify(setData)}</h2>
      </div>
    </div>
  );
};

export default Second;
