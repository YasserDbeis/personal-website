import { useEffect, useState, useRef } from 'react';
import Card from 'react-card-component';
import Draggable from 'react-draggable';
import TrafficLights from '../Window/TrafficLights';
import { isMobile } from 'react-device-detect';

const Welcome = (props) => {
  return (
    <div
      style={{
        height: 'fit-content',
        width: 'fit-content',
        'text-align': 'center',
        padding: '10px',
        'z-index': 1,
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
              fontSize: '32px',
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
            My name is Yasser Dbeis and I am a software engineer.
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
