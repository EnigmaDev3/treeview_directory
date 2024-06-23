
import React, { useState } from 'react';
import TreeView from './TreeView';
import { returnTreeView } from './DirectoryViewer';
import './App.css';

function App() {
    const [directoryStructure, setDirectoryStructure] = useState(null);

    const handleDirectoryChange = (event) => {
        const files = event.target.files;
        const structure = returnTreeView(files);
        setDirectoryStructure(structure);
    };

    return (
        <div className="App">
           <label className="custom-file-upload">
             Выбрать директорию
            <input
                type="file"
                webkitdirectory="true"
                directory="true"
                multiple
                onChange={handleDirectoryChange}
            />
            </label>
            
            <div>
                {directoryStructure && <TreeView tree={directoryStructure} />}
            </div>
        </div>
    );
}

export default App;

