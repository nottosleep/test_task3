import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { iconConverter } from '../../../utils/iconConverter';
import { Colors } from '../../../constants';
import { Icon } from '../../../constants';
import { AreaChart } from '../AreaChart';

type Props = {
    width: number,
    height: number,
    title: string,
    icon: Icon,
    data: Array<{value: number}>,
    type: string,
}

function StatisticCard(props: Props) {
    const { width, height, title, icon, data, type } = props;
    const colorName = `color${type}`;
    const color = Colors[colorName as keyof typeof Colors];

    return (
        <Box>
            <Paper>
                <Box>
                    <Box p={2} width={width} display={'flex'} justifyContent={'space-between'}>
                        <Typography variant={'body1'}>{ title }</Typography>
                        { iconConverter(icon) }
                    </Box>
                    <Box ml={2}>
                        <Typography variant={'h5'}>{`${data?.[data?.length - 1]?.value} C`}</Typography>
                    </Box>
                    <AreaChart width={width} height={height} data={data} color={color} />
                </Box>
            </Paper>
        </Box>
    )
}

export default React.memo(StatisticCard);