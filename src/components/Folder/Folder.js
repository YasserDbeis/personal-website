import { useEffect, useState, useRef } from 'react';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import Draggable from 'react-draggable';
import { isMobile } from 'react-device-detect';
import './Folder.css';
import { folder } from 'react-google-svg-icon/dist/icons/18px';

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const eventControl = (event, data) => {
    if (
      (event.type === 'mousemove' || event.type === 'touchmove') &&
      (data.deltaX != 0 || data.deltaY != 0)
    ) {
      setIsDragging(true);
    }

    if (event.type === 'mouseup' || event.type === 'touchend') {
      setTimeout(() => {
        setIsDragging(false);
        console.log('NOT DRAGGING');
      }, 100);
    }
  };

  useEffect(() => {
    const newIsOpen = props.folderState[props.folderName].isOpen;
    if (isOpen == newIsOpen) {
      return;
    }
    setIsOpen(newIsOpen);
  }, [props.folderState]);

  const onFolderClick = () => {
    if (isDragging) {
      return;
    }

    // alert('DOPE MONEY');

    try {
      const newOpenState = !isOpen;
      setIsOpen(newOpenState);
      const folderStateCopy = JSON.parse(JSON.stringify(props.folderState));
      folderStateCopy[props.folderName].isOpen = newOpenState;
      console.log(folderStateCopy);
      props.setFolderState(folderStateCopy);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Draggable onDrag={eventControl} onStop={eventControl}>
      <div className="folderContainer">
        <div
          className="folderIconContainer"
          onTouchEnd={isMobile ? () => onFolderClick() : null}
          onClick={isMobile ? null : () => onFolderClick()}
        >
          {props.folderState[props.folderName].isOpen ? (
            <FcOpenedFolder size={75} />
          ) : (
            <FcFolder size={75} />
          )}
        </div>
        <p className="folderName unselectable" style={{ fontSize: '12px' }}>
          {props.folderName}
        </p>
      </div>
    </Draggable>
  );
};

export default Folder;
