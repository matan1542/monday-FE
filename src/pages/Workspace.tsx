import React, { useMemo, useState } from 'react';
import Board from '../components/Board';
import SideBar from '../components/SideBar';
import WorkspaceSideBar from '../components/WorkspaceSideBar';

export default function Workspace() {
  const [isShow,setIsShow] = useState(false) 

  const classIsShowWorkSpace = useMemo(()=>{
    return isShow ? 'show-workspace' : '';
  },[isShow])
  const classIsShowBoard = useMemo(()=>{
    return isShow ? 'slide-board' : '';
  },[isShow])
  const toggleSideBar = () => {
    setIsShow(!isShow)
  }
  // const props = { classIsShow: classIsShow<};
  return (<>
    <SideBar />
    <div className='app-container workspace-container'>
      <WorkspaceSideBar classIsShowWorkSpace={classIsShowWorkSpace} />
      <Board toggleSideBar={toggleSideBar} classIsShowBoard={classIsShowBoard}/>
    </div>
  </>)
}
