import React from 'react';
type BoardProps = {
    toggleSideBar:() => void,
    classIsShowBoard:string
}
export default function Board({toggleSideBar,classIsShowBoard}:BoardProps) {
  
    return <section className={`board-container ${classIsShowBoard}`}>
        <button onClick={toggleSideBar}>Toggle side-bar</button>
        Board
    </section>;
}
