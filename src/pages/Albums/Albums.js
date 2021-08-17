import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { setAlbums } from '../../redux/actions/albumsAction';
import AlbumsWrapper from './AlbumsWrapper'

const Albums = () => {
    const albums = useSelector(state => state.albums.albums);
    console.log(albums);

    let dispatch = useDispatch();

    useEffect(() => {
        setAlbums(dispatch);
    }, [])

    return (
        <AlbumsWrapper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>userId</TableCell>
                        <TableCell>id</TableCell>
                        <TableCell>title</TableCell>
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                    {albums.map(v => <TableRow>
                        <TableCell>{v.userId}</TableCell>
                        <TableCell>{v.id}</TableCell>
                        <TableCell>{v.title}</TableCell>
                       
                    </TableRow>)}
                </TableBody>
            </Table>
        </AlbumsWrapper>
    )
}

export default Albums;