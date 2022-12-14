import React from 'react';
import { Provider } from 'mobx-react';
import { Connector } from 'mqtt-react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import Page from './client-ui/components/layout/Page/Page';
import { DashboardService } from './core/services/DashboardService';
import { UserService } from './core/services/UserService';
import { DashboardAPI } from './core/api/dashboard';
import { UserAPI } from './core/api/user';
import RootStore from './core/stores/RootStore';
import { API_HOST, API_PORT } from './core/constants';
import './App.css';

function App() {
	const userService = new UserService(UserAPI);
	const dashboardService = new DashboardService(DashboardAPI);
	const mockData = {
		user: userService.getUser('test'),
	}
	//TODO: refactor stores initialisation
	const stores = new RootStore({
		dashboard: {
			data: dashboardService.getDashboardData('temperature'),
		}
	})

	const theme = {
		palette: {
			mode: 'dark',
		},
	};

	return (
		<ThemeProvider theme={createTheme(theme as Theme)}>
			<Provider {...stores}>
				<Router>
					<Connector brokerUrl={`${API_HOST}:${API_PORT}/mqtt`}>
						<Page data={mockData} />
					</Connector>
				</Router>
			</Provider>
		</ThemeProvider>
	)
}

export default App;