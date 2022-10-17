import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import { GRIDS_SIZES } from './PageConstants';
import ModulesRouter from '../../../../modules/_routing/ModulesRouter';

type GridTypes = 'menu' | 'content';

type Props = {
	data: {[key: string]: any}
}

export default function Page(props: Props) {
	const {data} = props;
	const getGridSizes = (gridType: GridTypes): { [key: string]: any } => GRIDS_SIZES[gridType];

	return (
		<Box height={'100vh'}>
			<Paper>
				<Grid container>
					<Grid item width={'100%'}>
						<Header user={data?.user}/>
					</Grid>
					<Grid item container>
						<Grid item {...getGridSizes('menu')}><Menu/></Grid>
						<Grid item {...getGridSizes('content')}>
							<Box p={2} height={'100%'} style={{background: '#262626'}}>
								<ModulesRouter/>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Box>
	);
}