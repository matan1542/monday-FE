import { useEffect, useState } from "react"
import useWindowSize from './resize'

export function Header() {
  const [toggle, setToggle] = useState(false)
  const [width, height] = useWindowSize()
  let matches = width < 800 ? false : true
  useEffect(() => {
    if (matches && toggle) {
      setToggle(false)
    }
  }, [matches])
  const toggleMenu = () => {
    setToggle(!toggle)
  }
  const onOutSideClick = (ev) => {
    if (ev.target.classList.contains("header-page-container")) {
      toggleMenu()
    }
  }
  return (
    <div className="header">
      <div className="navbar-header ">
        <h1 className="logo">StarWars</h1>
        {((matches && !toggle) || (toggle && !matches) || matches) && (
          <>
            <div className="navbar-list-href flex ">
              <ul className="nav-list clean-list flex">
                <li>
                  <a href="#" className="decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="decoration-none">
                    Favorites
                  </a>
                </li>
              </ul>
            </div>
            {!matches && (
              <div
                className="header-page-container"
                onClick={onOutSideClick}></div>
            )}
          </>
        )}
        {!matches && (
          <button onClick={toggleMenu} className="btn btn-open-menu">
            <i className="fas fa-bars"></i>
          </button>
        )}
      </div>
    </div>
  )
}
