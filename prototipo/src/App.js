import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';

import {
 Root,
 Header,
 Nav,
 Content,
 Footer,
 presets,
} from 'mui-layout';

const baseTheme = createMuiTheme(); // or use your own theme;
const config = presets.createStandardLayout();

const App = () => (
  <ThemeProvider theme={baseTheme}>
   <Root config={config}>
     <Header
       renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
     >
       header
     </Header>
     <Nav
       renderIcon={collapsed =>
         collapsed ? <ChevronRight /> : <ChevronLeft />
       }
     >
       nav
     </Nav>
     <Content>
       content
     </Content>
     <Footer>
       footer
     </Footer>
   </Root>
  </ThemeProvider>
)

export default App;