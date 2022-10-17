import React  from 'react';
import { AreaChart as Chart, Area, ResponsiveContainer } from 'recharts';

type Props = {
    width: number,
    height: number,
    data: Array<{value: number}>,
    color: string,
}

function AreaChart(props: Props) {
    const { width, height, data, color } = props;

    return (
        <ResponsiveContainer width={'100%'} height={100}>
            <Chart width={width} height={height} data={data}>
                <Area isAnimationActive={false} type={'monotone'} dataKey={'value'} stroke={color} fill={color} />
            </Chart>
        </ResponsiveContainer>
    );
}

export default React.memo(AreaChart);