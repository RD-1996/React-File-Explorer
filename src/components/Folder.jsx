import React, { useState } from 'react';
import "./Folder.css"

const Folder = ({ explorer }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    if (explorer.type == "folder") {
        return (
            <div style={{ marginTop: 10, marginLeft: 5 }}>
                <div className='folder' onClick={() => setIsExpanded(!isExpanded)}>
                    <span>📁{explorer.name}</span>
                </div>
                <div style={{ display: isExpanded ? "block" : "none", paddingLeft: 30 }}>
                    {explorer.items.map((element) => {
                        return <Folder explorer={element} key={element.id}/>
                    })}
                </div>
            </div>
        )
    }
    else {
        return <span className='file'>📄{explorer.name}</span>
    }
}

export default Folder