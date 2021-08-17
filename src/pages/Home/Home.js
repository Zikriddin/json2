import React from 'react'
import { Slide } from 'react-awesome-reveal'
import HomeWrapper from './HomeWrapper'

import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <HomeWrapper>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <Link to="/dashboard/users"><div className="shadow p-4 rounded bg-yellow">Users</div></Link>
                </div>
                <div className="col-sm-6 col-md-4">
                    <Link to="/dashboard/todos"><div className="shadow p-4 rounded bg-yellow">Todos</div></Link>
                </div>
                <div className="col-sm-6 col-md-4">
                <Link to="/dashboard/albums"> <div className="shadow p-4 rounded bg-yellow">Albums</div></Link>
                </div>
                <div className="col-sm-6 col-md-4">
                <Link to="/dashboard/componets"> <div className="shadow p-4 rounded bg-yellow">Comennts</div></Link>
                </div>
                <div className="col-sm-6 col-md-4">
                <Link to="/dashboard/photos">  <div className="shadow p-4 rounded bg-yellow">Photos</div></Link>
                </div>
                <div className="col-sm-6 col-md-4">
                <Link to="/dashboard/posts"> <div className="shadow p-4 rounded bg-yellow">Posts</div></Link>
                </div>
            </div>
        </HomeWrapper>
    )
}

export default Home