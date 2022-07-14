import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
// import './TrafficLightDesktop.css';

const TrafficLight = (props) => {
  useEffect(() => {
    if (isMobile) {
      import('./TrafficLightMobile.css');
    } else {
      import('./TrafficLightDesktop.css');
    }
  }, []);

  const closeBtnClickHandler = () => {
    const folderStateCopy = JSON.parse(JSON.stringify(props.folderState));
    folderStateCopy[props.folderName].isOpen = false;
    props.setFolderState(folderStateCopy);
  };

  const expandBtnClickHandler = (isExpanded) => {
    props.setIsExpanded(isExpanded);
  };

  return (
    <strong className="cursor">
      <div className="drag-handle-div-container">
        <div
          style={{
            position: 'absolute',
            width: '100%',
            textAlign: 'center',
            fontSize: '1rem',
            alignSelf: 'center',
          }}
        >
          {props.folderName}
        </div>
        <div className="traffic-lights">
          <button
            className="traffic-light traffic-light-close"
            id="close"
            onTouchStart={isMobile ? closeBtnClickHandler : null}
            onClick={isMobile ? null : closeBtnClickHandler}
          ></button>
          <button
            className="traffic-light traffic-light-minimize"
            id="minimize"
            onClick={isMobile ? null : () => expandBtnClickHandler(false)}
          ></button>
          <button
            className="traffic-light traffic-light-maximize"
            id="maximize"
            onClick={isMobile ? null : () => expandBtnClickHandler(true)}
          ></button>
        </div>
      </div>
    </strong>
  );
};

export default TrafficLight;
