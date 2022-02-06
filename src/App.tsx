import './style/style.scss';
import React, { Fragment, useEffect, useState } from 'react';
import Home from './pages/Home'
import { Header } from './components/Header';
import { Routes, Route, Router } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import SideBar from './components/SideBar';
import Workspace from './pages/Workspace';
function App() {

  return (
    <RecoilRoot>
      <div className="app">
        <main className="layout-main-container">
          <section className="layout-page-container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/board/:id" element={<Workspace />}></Route>
            </Routes>
          </section>
        </main>
      </div >
    </RecoilRoot >
  );
}

export default App;