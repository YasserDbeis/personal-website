import logo from './logo.svg';
import folderContent from './content/FolderContent.json';
import './App.css';
import Folder from './components/Folder/Folder';
import Window from './components/Window/Window';

import { useState } from 'react';
import Draggable from 'react-draggable';

function App() {
  const [folderState, setFolderState] = useState(
    JSON.parse(JSON.stringify(folderContent))
  );

  const [folderSelectionName, setFolderSelectionName] = useState(null);

  // console.log(Array.from(Object.keys(folderContent)));
  return (
    <div className="App">
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
              folderState={folderState}
              setFolderState={setFolderState}
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
