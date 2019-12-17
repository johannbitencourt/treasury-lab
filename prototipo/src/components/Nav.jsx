import React from 'react'
import { Nav } from 'mui-layout'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronRight from '@material-ui/icons/ChevronRight'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';


export default props =>

    <Nav
       renderIcon={collapsed =>
        collapsed ? <ChevronRight /> : <ChevronLeft />
        }
    >
    <Divider />
        <List>
            <ListItem button component={Link} to="/">
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Início" />
            </ListItem>
            <ListItem button component={Link} to="/perfil">
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
            </ListItem>
            <ListItem button component={Link} to="/perguntas">
                <ListItemIcon>
                    <QuestionAnswerIcon />
                </ListItemIcon>
                <ListItemText primary="Perguntas" />
            </ListItem>
            <ListItem button component={Link} to="/suporte">
                <ListItemIcon>
                    <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Suporte" />
            </ListItem>
        </List>
    <Divider />
    </Nav>