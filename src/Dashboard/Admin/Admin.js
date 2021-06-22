import React, { useState } from 'react';
import SideBar from '../Dashboard/SideBar/SideBar';

import Dashboard from '../Dashboard/Dashboard/Dashboard';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DashHeader from '../Header/DashHeader';
import Orders from '../Menu/Orders/Orders';
import Stores from '../Menu/Store/Stores/Stores';
import Settings from '../Menu/Settings/Settings/Settings';
import Shipment from '../Business/Shipment/Shipment';
import Employee from '../Business/Employee/Employee';
import Blogs from '../Menu/Blogs/Blogs';

// const myStyle = {
//     background: '#191919'
// }

const Admin = () => {
    let { path, url } = useRouteMatch();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <SideBar url={url} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-900">

                {/*  Site header */}
                <DashHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <Switch >
                    <Route path={`${path}/dashboard`} component={Dashboard} />
                    <Route path={`${path}/orders`} component={Orders} />
                    <Route path={`${path}/stores`} component={Stores} />
                    <Route path={`${path}/blogs`} component={Blogs} />
                    <Route path={`${path}/settings`} component={Settings} />
                    <Route path={`${path}/shipment`} component={Shipment} />
                    <Route path={`${path}/employee`} component={Employee} />
                </Switch>
            </div>
        </div>
    );
};

export default Admin;