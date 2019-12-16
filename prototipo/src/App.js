import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import {
 Root,
 Content,
 Footer,
 presets,
} from 'mui-layout';

import Nav from './components/Nav'
import Header from './components/Header'

const baseTheme = createMuiTheme();
const config = presets.createStandardLayout();

export default props => (
  <ThemeProvider theme={baseTheme}>
   <Root config={config}>
     <Header />
     <Nav />
     <Content>
       content
     </Content>
     <Footer>
       footer
     </Footer>
   </Root>
  </ThemeProvider>
)