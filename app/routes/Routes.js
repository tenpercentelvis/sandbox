import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { ViewPromises, ViewFetch, ViewObjectCreate } from '../views';

const Routes = () => (
    <>
        <Switch>
            <Route exact path="/">
                <ViewPromises />
            </Route>
            <Route exact path="/object-create">
                <ViewObjectCreate />
            </Route>
        </Switch>
        <Switch>
            <Route exact path="/promises">
                <ViewPromises />
            </Route>
            <Route exact path="/fetch">
                <ViewFetch />
            </Route>

            {/* <Route path="/promises/:id">
                <ViewArticleDetail />
            </Route> */}
        </Switch>
    </>
);

export default Routes;
