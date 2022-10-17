import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { MenuItem, MENU_ITEMS } from './MenuConstants';

function Menu() {
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const renderListItem = (item: MenuItem, index: number): JSX.Element => {
		const { icon, title } = item;
		const link = '/' + title.at(0)?.toLowerCase() + title.slice(1);

		// TODO: remove inline styles, use css-in-js
		return (
			<Link to={link} style={{ textDecoration: 'none', color: '#fff'}}>
				<ListItem button selected={selectedIndex === index} onClick={() => setSelectedIndex(index)} >
					<ListItemIcon style={{ minWidth: 32}}>{icon}</ListItemIcon>
					<ListItemText>{title}</ListItemText>
				</ListItem>
			</Link>
		)
	};

	return (
		<Paper>
			<Box height={'100vh' }>
				<List>
					{ MENU_ITEMS.map((item, index) => renderListItem(item, index)) }
				</List>
			</Box>
		</Paper>

	);
}

export default Menu;