import { useEffect, useState, useRef } from 'react';
import Card from 'react-card-component';
import Draggable from 'react-draggable';
import { isMobile } from 'react-device-detect';

const Welcome = (props) => {
  return (
    <div
      style={{
        height: 'fit-content',
        width: 'fit-content',
        textAlign: 'center',
        padding: '10px',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        bordered
        outlined
        glass
        glassOption={{ blur: 100, transparency: 0.2 }}
        style={{
          padding: '20px',
        }}
      >
        <img height={200} src={require(`../../assets/me.png`)} />
        <div>
          <span
            style={{
              fontSize: '60px',
              fontWeight: 'bolder',
              fontStyle: 'italic',
            }}
          >
            Welcome!
          </span>
          <br />
          <span
            style={{
              fontSize: '24px',
            }}
          >
            My name is <strong>Yasser Dbeis</strong> and I am a{' '}
            <strong>software engineer</strong>.
          </span>
          <br />
          <span
            style={{
              fontSize: '18px',
            }}
          >
            {isMobile
              ? 'Click anywhere to begin!'
              : 'Click anywhere to begin dragging, opening, and expanding folders + windows.'}
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Welcome;
