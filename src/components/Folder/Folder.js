import { useEffect, useState } from 'react';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import Draggable from 'react-draggable';
import './Folder.css';

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const newIsOpen = props.folderState[props.folderName].isOpen;
    if (isOpen == newIsOpen) {
      return;
    }
    setIsOpen(newIsOpen);
  }, [props.folderState]);

  const onFolderClick = () => {
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);
    const folderStateCopy = JSON.parse(JSON.stringify(props.folderState));
    folderStateCopy[props.folderName].isOpen = newOpenState;
    props.setFolderState(folderStateCopy);
  };

  return (
    <div id="folderContainer">
      <div id="folderIconContainer" onClick={onFolderClick}>
        {props.folderState[props.folderName].isOpen ? (
          <FcOpenedFolder size={50} />
        ) : (
          <FcFolder size={50} />
        )}
      </div>
      <p
        id="folderName"
        className="unselectable"
        style={{ margin: '0', fontSize: '12px' }}
      >
        {props.folderName}
      </p>
    </div>
  );
};

export default Folder;
