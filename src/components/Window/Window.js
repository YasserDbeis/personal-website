import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import Card from 'react-card-component';
import ContentItem from '../ContentItem/ContentItem';
import './Window.css';
import './TrafficLight.css';
import ScrollArea from 'react-scrollbar';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';
import { Resizable } from 're-resizable';
import GitHubCalendar from 'react-github-calendar';

const MAXIMIZED_SIZE = 80;
const MINIMIZED_SIZE = 60;

const Window = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const windowSize = isExpanded ? MAXIMIZED_SIZE : MINIMIZED_SIZE;
  const windowHeight = windowSize;
  const windowWidth = windowSize * 1.1;

  const itemHorizMargin = windowSize / 2;

  const closeBtnClickHandler = () => {
    const folderStateCopy = JSON.parse(JSON.stringify(props.folderState));
    folderStateCopy[props.folderName].isOpen = false;
    props.setFolderState(folderStateCopy);
  };

  const expandBtnClickHandler = (isExpanded) => {
    setIsExpanded(isExpanded);
  };

  return (
    <Draggable
      // bounds={{ top: -200, left: -200, right: 200, bottom: 200 }}
      handle="strong"
    >
      <div
        className="window-container"
        style={{
          top: `calc(50% - ${windowHeight / 2}vh)`,
          left: `calc(50% - ${windowWidth / 2}vw)`,
          minHeight: `${windowHeight}vh`,
          minWidth: `${windowWidth}vw`,
        }}
      >
        <div
          className="box no-cursor"
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            // overflow: 'auto',
          }}
        >
          <Card
            bordered
            outlined
            glass
            glassOption={{ blur: 100, transparency: 0.2 }}
            style={{ height: '100%', width: '100%' }}
          >
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
                    onTouchStart={
                      isMobile ? () => expandBtnClickHandler(false) : null
                    }
                    onClick={
                      isMobile ? null : () => expandBtnClickHandler(false)
                    }
                  ></button>
                  <button
                    className="traffic-light traffic-light-maximize"
                    id="maximize"
                    onTouchStart={
                      isMobile ? () => expandBtnClickHandler(true) : null
                    }
                    onClick={
                      isMobile ? null : () => expandBtnClickHandler(true)
                    }
                  ></button>
                </div>
              </div>
            </strong>
            <div
              className="window-content-container"
              style={{ height: '100%', width: '100%' }}
            >
              <ScrollArea>
                <div
                  className="window-content-subcontainer"
                  style={{
                    fontSize: '12px',
                    color: 'white',
                    height: `calc(${windowHeight}vh - 35px)`,
                    width: `calc(${windowWidth}vw)`,
                    overflow: 'auto',
                  }}
                >
                  {props.folderName == 'Projects' && isBrowser ? (
                    <GitHubCalendar
                      style={{
                        paddingLeft: '4vw',
                        paddingRight: '4vw',
                        paddingTop: '20px',
                        paddingBlock: '20px',
                      }}
                      username="YasserDbeis"
                    />
                  ) : null}
                  {props.folderContent.map((entry, index) => {
                    return (
                      <div key={index} className="card-item-container">
                        <Card
                          key={entry['contentTitle']}
                          bordered
                          outlined
                          glass
                          hoverType="zoom"
                          glassOption={{ blur: 100, transparency: 0.7 }}
                          className="window-content-item"
                        >
                          <ContentItem
                            folderName={props.folderName}
                            content={entry}
                          />
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </div>
          </Card>
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
