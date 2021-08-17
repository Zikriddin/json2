

import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setPosts } from '../../redux/actions/postsAction';
import PostsWrapper from './PostWrapper';

const Posts = () => {
    const posts = useSelector(state => state.posts.posts);
    console.log(posts);

    let  dispatch = useDispatch();

    useEffect(() => {
        setPosts(dispatch);
    }, [])

    return (
        <PostsWrapper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>userId</TableCell>
                        <TableCell>Id</TableCell>
                        <TableCell>title</TableCell>
                        <TableCell>body</TableCell>
                      
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map (v => <TableRow>
                        <TableCell>{v.userId}</TableCell>
                        <TableCell>{v.id}</TableCell>
                        <TableCell>{v.title}</TableCell>
                        <TableCell>{v.body}</TableCell>
                
                    </TableRow>)}
                </TableBody>
            </Table>
        </PostsWrapper>
    )
}

export default Posts;
