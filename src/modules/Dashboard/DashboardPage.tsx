import React, { useState } from 'react';
import {inject, observer} from 'mobx-react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { StatisticCard } from '../../client-ui/shared/components/StatisticCard';
import { Icon } from '../../client-ui/constants';
import { AddCard } from '../../client-ui/shared/components';
import { DashboardData } from '../../core/services/DashboardService/types';
import DashboardDialog from './DashboardDialog';

type Props = {
	dashboardStore?: any
}

function DashboardPage(props: Props) {
	const { dashboardStore: store } = props;
	const [open, setOpen] = useState(false);

	const handleAddCardData = (item: DashboardData) => store.addData(item);

	const sizes = {
		height: 100,
		width: 200,
	};

	return (
		<Grid container spacing={2} direction={'column'}>
			<Grid item>{'Dashboard'}</Grid>
			<Grid item display={'flex'} flexWrap={'wrap'}>
				{ store.data.map((item: DashboardData) => (
					<Box mr={1.5} mb={1.5}>
						<StatisticCard
							key={item?.id}
							title={item?.title}
							icon={Icon.thermostat}
							type={item?.type}
							data={item?.value?.map((val: number) => ({ value: val }))}
							{...sizes}
						/>
					</Box>
				))}
				<AddCard {...sizes} margin={[0, 1, 1, 0]} onClick={() => setOpen(true)} />
				{ open && <DashboardDialog onAdd={handleAddCardData} onClose={() => setOpen(false)} isOpen={open} /> }
			</Grid>
		</Grid>
	)
}

export default React.memo(inject('dashboardStore')(observer(DashboardPage)));