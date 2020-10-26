/** @jsx jsx */
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { css, jsx } from '@emotion/core'
import { MdMenu } from "react-icons/md"


const minNavigation = css`
    background-color: pink;
    position: fixed;
    top: 2rem;
    left: 0;
`

const expand = css`
    size: 2rem;
    background-color: violet;
    width: 20rem;
    height: 100vh;
    margin-top: 0;
`

const doge = css`
    size: 2rem;
    background-color: violet;
    transition-duration: 2s;
    width: 0rem;
    height: 100vh;
    margin-top: 0;
`
const a = () => {
    console.log('doge')
}
const App = () => {
    const [navStyle, setNavStyle] = useState(expand)

    return (
        <div>
            {/*
            <nav css={minNavigation}>
                <MdMenu size={"2rem"} onClick={a}/>
            </nav>
            */}
            <nav css={navStyle} onClick={() => setNavStyle(doge)}>
                doge
            </nav>
            <div>
            </div>
        </div>
    )
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
 );