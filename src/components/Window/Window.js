import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import Card from 'react-card-component';
import './Window.css';
import ScrollArea from 'react-scrollbar';

const MAXIMIZED_SIZE = 70;
const MINIMIZED_SIZE = 40;

const Window = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const windowSize = isExpanded ? MAXIMIZED_SIZE : MINIMIZED_SIZE;
  const itemHorizMargin = windowSize / 2;

  return (
    <Draggable
      // bounds={{ top: -200, left: -200, right: 200, bottom: 200 }}
      handle="strong"
    >
      <div
        className="window-container"
        style={{
          top: `calc(50% - ${windowSize / 2}vh)`,
          left: `calc(50% - ${windowSize / 2}vw)`,
          height: `${windowSize}vh`,
          width: `${windowSize}vw`,
        }}
      >
        <div
          className="box no-cursor"
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: 'inherit',
            width: 'inherit',
            // overflow: 'auto',
          }}
        >
          <Card
            bordered
            outlined
            glass
            glassOption={{ blur: 100, transparency: 0.2 }}
            style={{ height: 'inherit', width: 'inherit' }}
          >
            <strong className="cursor">
              <div className="drag-handle-div-container">
                <div className="traffic-lights">
                  <button
                    className="traffic-light traffic-light-close"
                    id="close"
                    onClick={() => {
                      alert('I am an alert box!');
                    }}
                  ></button>
                  <button
                    className="traffic-light traffic-light-minimize"
                    id="minimize"
                    onClick={() => setIsExpanded(false)}
                  ></button>
                  <button
                    className="traffic-light traffic-light-maximize"
                    id="maximize"
                    onClick={() => setIsExpanded(true)}
                  ></button>
                </div>
              </div>
            </strong>
            <div
              className="window-content-container"
              style={{ height: 'inherit', width: 'inherit' }}
            >
              <ScrollArea>
                <div
                  className="window-content-subcontainer"
                  style={{
                    fontSize: '12px',
                    textAlign: 'center',
                    color: 'white',
                    height: `calc(${windowSize}vh - 45px)`,
                    width: `calc(${windowSize}vw - 10px)`,
                    overflow: 'auto',
                  }}
                >
                  {props.folderContent.map((entry, index) => {
                    return (
                      <div
                        key={index}
                        className="card-item-container"
                        style={{
                          marginLeft: `${itemHorizMargin.toString()}px`,
                          marginRight: `${itemHorizMargin.toString()}px`,
                        }}
                      >
                        <Card
                          key={entry['contestTitle']}
                          bordered
                          outlined
                          glass
                          hoverType="zoom"
                          glassOption={{ blur: 100, transparency: 0.7 }}
                          className="window-content-item"
                        >
                          <p>{entry['contentTitle']}</p>
                          <p>{entry['contentDesc']}</p>
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
