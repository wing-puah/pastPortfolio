import React, { useState } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

const Websocket = props => {
  const [inputState, setInputState] = useState();
  const socket = io('http://localhost:5000', { query: { test: inputState } });
  socket.on('connect', () => console.log);
  const handleChange = e => {
    setInputState(e.target.value);
  };
  return (
  <div>
  <input onChange={handleChange} />
		</div>
  );
};

Websocket.propTypes = {};

export default Websocket;
