import React, { useEffect, useMemo, useState } from 'react'
import { useRecoilState } from 'recoil'
import { Link } from "react-router-dom"

export default function Home() {
    // const [num, setNum] = useState(0)
    // useEffect(() => {
    //     console.log('isNumber', num);
    //     // return ()=> destroy
    // }, [])
    // const calcNum = useMemo(() => {
    //     return num / 3
    // }, [num])
    // const clickMe = () => {
    //     let sum = num + 10
    //     setNum(sum)
    // }
    return (
        <div className="home-container">
            {/* <button onClick={clickMe}>Click!</button> */}
            {/* <h2>Hello: {calcNum}</h2> */}
            <h1>Home page</h1>
            <Link to={`/board/123`}>Go to board</Link>
        </div>
    )
}
