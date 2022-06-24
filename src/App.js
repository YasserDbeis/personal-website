import logo from './logo.svg';
import folderContent from './content/FolderContent.json';
import './App.css';
import Folder from './components/Folder/Folder';
import Window from './components/Window/Window';

import { useState } from 'react';

function App() {
  const [folderState, setFolderState] = useState(
    JSON.parse(JSON.stringify(folderContent))
  );

  const [folderSelectionName, setFolderSelectionName] = useState(null);

  const closeFolder = () => {
    const folderStateCopy = JSON.parse(JSON.stringify(folderState));
    folderStateCopy['Experience'].isOpen = false;
    setFolderState(folderStateCopy);
  };

  // console.log(Array.from(Object.keys(folderContent)));
  return (
    <div className="App">
      <div id="foldersContainer">
        {Array.from(Object.keys(folderContent)).map((folderName) => {
          return (
            <Folder
              key={folderName}
              folderState={folderState}
              setFolderState={setFolderState}
              folderName={folderName}
            />
          );
        })}
      </div>
      {Object.entries(folderState).map((folder) => {
        const folderName = folder[0];
        const folderData = folder[1];
        const isOpen = folderData.isOpen;
        const folderContent = folderData.content;

        if (isOpen) {
          return (
            <Window
              key={folderName}
              folderName={folderName}
              folderContent={folderContent}
            />
          );
        }

        // console.log(folder);
        // console.log(index);
        // const isOpen = folder.isOpen;
        // if(isOpen) {
        //   return <Window folderName={folder./>
      })}
    </div>
  );
}

export default App;
