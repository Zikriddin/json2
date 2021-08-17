
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { setTodos } from '../../redux/actions/todosAction';
import TodosWrapper from './TodosWrapper'

const Todos = () => {
    const todos = useSelector(state => state.todos.todos);
    console.log(todos);

    let  dispatch = useDispatch();

    useEffect(() => {
        setTodos(dispatch);
    }, [])

    return (
        <TodosWrapper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>userId</TableCell>
                        <TableCell>Id</TableCell>
                        <TableCell>title</TableCell>
                        <TableCell>complete</TableCell>
                      
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map (v => <TableRow>
                        <TableCell>{v.userId}</TableCell>
                        <TableCell>{v.id}</TableCell>
                        <TableCell>{v.title}</TableCell>
                        <TableCell>{v.completed== 1 && "true" || "false"}</TableCell>
                
                    </TableRow>)}
                </TableBody>
            </Table>
        </TodosWrapper>
    )
}

export default Todos;
