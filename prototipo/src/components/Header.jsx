import React from 'react'
import { Header } from 'mui-layout'
import Typography from '@material-ui/core/Typography'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import MenuRounded from '@material-ui/icons/MenuRounded'

export default props => 

    <Header
    renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
    >
        <Typography component="h1" variant="h6" color="inherit" noWrap>
            {props.title}
        </Typography>
    </Header>