define(['modules/dashboard/dashboard-module'], function (dashboard) {
    'use strict';

    return dashboard.controller('Dashboard', Dashboard);

    Dashboard.$inject = [];
    function Dashboard() {
        this.title = 'Dashboard';
    }
});