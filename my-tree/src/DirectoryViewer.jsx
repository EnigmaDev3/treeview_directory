import React, { useState } from 'react';
const fs = require('fs');

const DirectoryViewer = () => {
  const [files, setFiles] = useState([]);
  const [directoryName, setDirectoryName] = useState('');

  const handleDirectoryChange = (event) => {
    const directory = event.target.files;
    const fileList = [];
    for (let i = 0; i < directory.length; i++) {
      fileList.push(directory[i].webkitRelativePath);
    }
    setFiles(fileList);

  
    if (directory.length > 0) {
      const fullPath = directory[0].webkitRelativePath;
      const dirName = fullPath.split('/');
      setDirectoryName(dirName);
    }
  };
  const fs = require('fs');
  const path = require('path');
  
  function dirTree(filename) {
      let stats = fs.lstatSync(filename);
      let info = {
          path: filename,
          name: path.basename(filename)
      };
  
      if (stats.isDirectory()) {
          info.type = "folder";
          info.children = fs.readdirSync(filename).map(function(child) {
              return dirTree(filename + '/' + child);
          });
      } else {
          info.type = "file";
      }
  
      return info;
  }
  return (
    <div>
      <input
        type="file"
        webkitdirectory="true"
        onChange={handleDirectoryChange}
        style={{ display: 'none' }}
        id="directoryInput"
      />
      <button onClick={() => document.getElementById('directoryInput').click()}>
        Выбрать каталог
      </button>
      <input
        type="text"
        value={directoryName[0]}
        readOnly
        placeholder="Выбранный каталог"
      />
    </div>

  );
};

export default DirectoryViewer;

