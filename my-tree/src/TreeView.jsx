
import React, { useState } from 'react';

const TreeView = ({ tree }) => {
    const [opened, setOpened] = useState(false);

    return (
        <div>
            <div onClick={() => setOpened(!opened)} style={{ cursor: 'pointer' }}>
                {tree.children && tree.children.length > 0 && (
                    <span>{opened ? '▼' : '►'}</span>
                )}
                {tree.name}
            </div>

            {opened && tree.children && tree.children.length > 0 && (
                <div style={{ paddingLeft: 20 }}>
                    {tree.children.map((child, index) => (
                        <TreeView key={index} tree={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TreeView;
