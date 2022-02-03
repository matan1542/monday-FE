import React, { useEffect, useMemo, useState } from 'react'
import { useRecoilState } from 'recoil'

export default function Home() {
    const [num, setNum] = useState(0)
    useEffect(() => {
        console.log('isNumber', num);
        // return ()=> destroy
    },[])
    const calcNum = useMemo(() => {
        return num / 3
    }, [num])
    const clickMe = () => {
        let sum = num + 10
        setNum(sum)
    }
    return (
        <div className="home-container">
            <button onClick={clickMe}>Click!</button>
            <h2>Hello: {calcNum}</h2>
        </div>
    )
}
