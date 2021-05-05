import React from 'react';
import { Circle } from 'better-react-spinkit';

const Loading = () => {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <img
          src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"
          alt="logo"
          style={{ marginBottom: 10, width: 200, height: 200 }}
        />
        <Circle color="#3cbc28" size={60} />
      </div>
    </div>
  );
};

export default Loading;
