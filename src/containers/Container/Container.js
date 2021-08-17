

import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import LowPriorityIcon from '@material-ui/icons/LowPriority';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../logo.svg"
import ContainerWrapper from './ContainerWrapper';

import { Menu } from '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSidebar} from '../../redux/actions/globalAction'
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import AlbumIcon from '@material-ui/icons/Album';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import CommentIcon from '@material-ui/icons/Comment';


const menus =[ 
    {to: "/dashboard/home", icon: <HomeIcon/> ,title:"Home" },
    {to: "/dashboard/users", icon: <GroupIcon/> ,title:"Users" },
    {to: "/dashboard/todos", icon: <LowPriorityIcon/> ,title:"Todos" },
    {to: "/dashboard/photos", icon: <PhotoSizeSelectActualIcon/> ,title:"Photos" },
    {to: "/dashboard/albums", icon: <AlbumIcon/> ,title:"Albums" },
    {to: "/dashboard/posts", icon: <MarkunreadMailboxIcon/> ,title:"Posts" },
    {to: "/dashboard/Comments", icon: <CommentIcon/> ,title:"Comments" },
]

const Container = ({ children }) => {
     const isSidebarShow = useSelector(state =>state.global.isSidebarShow);
    const dispatch = useDispatch();


    return (
        <ContainerWrapper>
            <div className={`sidebar  ${isSidebarShow ? "show" : ""}`}>
                <h2>Menu</h2>
                <List>

                    {menus.map( v =><Link to={v.to}>
                        <ListItem button>
                            <ListItemIcon>
                                {v.icon } 
                            </ListItemIcon>
                            <ListItemText primary={v.title} />
                        </ListItem>
                    </Link> )}
                </List>
            </div>
            <div className="rightside">
                <header className="shadow p-3 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="div">
                    <Button onClick={()=>toggleSidebar(dispatch)  }>
                        <Menu/>
                    </Button>
                    <img src={logo} className="logo me-3" alt="logo" />
                    </div>
                    
                   
                    </div>
                    
                </header>
                    <div className="content">
                        
                                    {children}
                </div>
            </div>
        </ContainerWrapper>
    )
}

export default Container;