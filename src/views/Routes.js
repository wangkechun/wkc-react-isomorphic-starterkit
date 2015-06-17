import React from "react";
import {Route, DefaultRoute} from "react-router";
import Main from "views/Main";
import Test from "views/Test";

/**
 * The React Routes for both the server and the client.
 *
 * @class Routes
 */
export default (
	<Route path="/">
    <Route path='/test' handler={Test} />
    <Route path='/' handler={Test} />
		// <DefaultRoute handler={Main} />
	</Route>
);
