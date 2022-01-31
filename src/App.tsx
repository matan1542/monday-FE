import './style/style.scss';
import React, { Fragment } from 'react';
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
function App() {
  return (
    <RecoilRoot>
      <div className="app">
          <main className="layout-main-container">
            <section className="layout-page-container">
              <Routes>
                <Route path="/home" element={<Home />}></Route>
              </Routes>
            </section>
          </main>
      </div>
    </RecoilRoot>
  );
}

export default App;
