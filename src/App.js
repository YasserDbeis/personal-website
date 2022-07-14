import logo from './logo.svg';
import folderContent from './content/FolderContent.json';
import socialLinks from './content/SocialLinks.json';

import './App.css';
import Folder from './components/Folder/Folder';
import Window from './components/Window/Window';

import { useState } from 'react';
import Draggable from 'react-draggable';
import Welcome from './components/Welcome/Welcome';
import SocialLinks from './components/SocialLinks/SocialLinks';

import { PreventOrientation } from 'prevent-orientation';

function App() {
  // Prevent to landscape orientation for mobile
  new PreventOrientation().preventLandscape();

  const [folderState, setFolderState] = useState(
    JSON.parse(JSON.stringify(folderContent))
  );

  const [folderSelectionName, setFolderSelectionName] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

  const links = JSON.parse(JSON.stringify(socialLinks));
  // console.log(Array.from(Object.keys(folderContent)));
  return (
    <div className="App">
      {showWelcome ? (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => {
            setShowWelcome(false);
          }}
        >
          <Welcome />{' '}
        </div>
      ) : (
        <div>
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
      )}

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

      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '0px',
          WebkitTransform: 'translateX(-50%)',
          transform: 'translateX(-50%)',
          marginBottom: '-15px',
          textAlign: 'center',
        }}
      >
        <SocialLinks links={links} />
      </div>
    </div>
  );
}

export default App;
