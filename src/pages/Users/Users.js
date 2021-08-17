import { LinearProgress, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { setUsers } from '../../redux/actions/usersAction';
import UsersWrapper from './UsersWrapper'

const Users = () => {
    const users = useSelector(state => state.users.users);
    console.log(users);

    let dispatch = useDispatch();

    useEffect(() => {
        setUsers(dispatch);
    }, [])

    return (
        <UsersWrapper>
            <LinearProgress/>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>username</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(v => <TableRow>
                        <TableCell>{v.id}</TableCell>
                        <TableCell>{v.name}</TableCell>
                        <TableCell>{v.username}</TableCell>
                        <TableCell>{v.email}</TableCell>
                        <TableCell>{v.phone}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </UsersWrapper>
    )
}

export default Users;
