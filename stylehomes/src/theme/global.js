import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle `
    body{
        margin:0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osm-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }
`


export default Global;