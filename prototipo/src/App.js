import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import {
 Root,
 Content,
 presets,
} from 'mui-layout';

import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './Routes'

const baseTheme = createMuiTheme();
const config = presets.createStandardLayout();

export default props => (

<BrowserRouter>
    <ThemeProvider theme={baseTheme}>
        <Root config={config}>
            <Header />
            <Nav />
            <Content>
            content
            </Content>
            <Routes />
            <Footer />
        </Root>
    </ThemeProvider>
</BrowserRouter>
)