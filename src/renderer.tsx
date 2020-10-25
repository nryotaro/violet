/** @jsx jsx */
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

import React from 'react'
import ReactDOM from 'react-dom'
import { css, jsx } from '@emotion/core'
import { MdMenu } from "react-icons/md"
const minNavigation = css`
    background-color: pink;
`

const App = () => {
    return (
        <div>
            <nav css={minNavigation}>
                <MdMenu/>
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