import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../containers/Container';
import Home from '../Home';
import Users from '../Users';
import MenuWrapper from './MenuWrapper'
import Todos from '../Todos';
import Photos from '../Photos';
import Posts from '../Posts';
import Comments from '../Comments';
import Albums from '../Albums';

const Menu = () => {
    const { menu } = useParams();

    return (
        <MenuWrapper>
            <Container>
                <h1>{menu}</h1>
                {menu == "home" && <Home />}
                {menu == "users" && <Users />}
                {menu == "todos" && <Todos />}
                {menu == "photos" && <Photos />}
                {menu == "posts" && <Posts />}
                {menu == "albums" && <Albums />}
                {menu == "comments" && <Comments />}


            </Container>
        </MenuWrapper>
    )
}

export default Menu;
