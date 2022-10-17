import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardPage, OrdersPage, MessagesPage, AnalysisPage, CalendarPage, SettingsPage } from '../index';

function ModulesRouter() {
    return (
        <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/orders' element={<OrdersPage />} />
            <Route path='/messages' element={<MessagesPage />} />
            <Route path='/analysis' element={<AnalysisPage />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/settings' element={<SettingsPage />} />
        </Routes>
    );
}

export default ModulesRouter;