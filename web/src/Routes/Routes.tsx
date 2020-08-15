import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../Pages/Landing';
import TeacherList from '../Pages/TeacherList';
import TeacherForm from '../Pages/TeacherForm';

function Router() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Landing} />
            <Route exact path='/study' component={TeacherList} />
            <Route exact path='/giveclasses' component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Router;