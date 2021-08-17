import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { setComments } from '../../redux/actions/commentsAction';
import CommentsWrapper from './CommentsWrapper'

const Comments = () => {
    const comments = useSelector(state => state.comments.comments);
    console.log(comments);

    let dispatch = useDispatch();

    useEffect(() => {
        setComments(dispatch);
    }, [])

    return (
        <CommentsWrapper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>postId</TableCell>
                        <TableCell>id</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>body</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {comments.map(v => <TableRow>
                        <TableCell>{v.postId}</TableCell>
                        <TableCell>{v.id}</TableCell>
                        <TableCell>{v.name}</TableCell>
                        <TableCell>{v.email}</TableCell>
                        <TableCell>{v.body}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </CommentsWrapper>
    )
}

export default Comments;