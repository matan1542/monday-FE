import './style/style.scss';
import React, { Fragment, useEffect, useState } from 'react';
import Home from './pages/Home'
import { Header } from './components/Header';
import { Routes, Route, Router } from "react-router-dom";
<<<<<<< HEAD
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
=======
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import SideBar from './components/SideBar';
>>>>>>> 521ab8cc3c27effbefcf6f70a9cd4435b68edf2b
function App() {

  return (
    <RecoilRoot>
      <div className="app">
<<<<<<< HEAD
        <main className="layout-main-container">
          <section className="layout-page-container">
            <Routes>
              <Route path="/home" element={<Home />}></Route>
            </Routes>
          </section>
        </main>
=======
          <main className="layout-main-container">
            <section className="layout-page-container">
            <SideBar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
              </Routes>
            </section>
          </main>
>>>>>>> 521ab8cc3c27effbefcf6f70a9cd4435b68edf2b
      </div>
    </RecoilRoot>
  );
}

export default App;