import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import {
 Root,
 presets,
} from 'mui-layout';

import Nav from './components/Nav'
import Routes from './Routes'
import Footer from './components/Footer'

const baseTheme = createMuiTheme();
const config = presets.createStandardLayout();

export default props => (

<BrowserRouter>
    <ThemeProvider theme={baseTheme}>
        <Root config={config}>
            <Routes />
            <Nav />
            <Footer />
        </Root>
    </ThemeProvider>
</BrowserRouter>
)