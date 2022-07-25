import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBrowserData } from '../actions';

const First = () => {
  const { serverData } = useSelector(state => state.setData);
  const { browserData } = useSelector(state => state.setData);
  const dispatch = useDispatch();
  useEffect(() => {
    setBrowserData(dispatch, 'Dummy Data from Browser');
  }, []);

  return (
    <div style={{ flexDirection: 'column' }}>
      <div style={{ flexDirection: 'row' }}>
        <h3>Data from Server</h3>
        <h2>{JSON.stringify(serverData)}</h2>
      </div>
      <div style={{ flexDirection: 'row' }}>
        <h3>Data from Browser</h3>
        <h2>{JSON.stringify(browserData)}</h2>
      </div>
    </div>
  );
};

export default First;
