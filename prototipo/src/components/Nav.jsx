import React from 'react'
import { Nav } from 'mui-layout'
import ChevronRight from '@material-ui/icons/ChevronRight'
import ChevronLeft from '@material-ui/icons/ChevronLeft'

export default props =>

    <Nav
       renderIcon={collapsed =>
        collapsed ? <ChevronRight /> : <ChevronLeft />
        }
    >
    Menu
    </Nav>