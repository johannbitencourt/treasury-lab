import React from 'react'
import { Header } from 'mui-layout'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import MenuRounded from '@material-ui/icons/MenuRounded'

export default props => 

    <Header
    renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
    >
    Teste
    </Header>