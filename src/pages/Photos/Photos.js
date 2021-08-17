import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { setPhotos } from '../../redux/actions/photosAction';
import PhotosWrapper from './PhotosWrapper'

const Photos = () => {
    const photos = useSelector(state => state.photos.photos);
    console.log(photos);

    let dispatch = useDispatch();

    useEffect(() => {
        setPhotos(dispatch);
    }, [])

    return (
        <PhotosWrapper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>albumId</TableCell>
                        <TableCell>id</TableCell>
                        <TableCell>title</TableCell>
                        <TableCell>url</TableCell>
                        <TableCell>thumbnailUrl</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {photos.map(v => <TableRow>
                        <TableCell>{v.albumId}</TableCell>
                        <TableCell>{v.id}</TableCell>
                        <TableCell>{v.title}</TableCell>
                        <TableCell>{v.url}</TableCell>
                        <TableCell>{v.thumbnailUrl}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </PhotosWrapper>
    )
}

export default Photos;