import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { iconConverter } from '../../../utils/iconConverter';
import {Icon} from '../../../constants';

type Props = {
    margin: Array<number>,
    width: number,
    height: number,
    onClick: () => void,
}

function AddCard(props: Props) {
    const { margin, width, height, onClick } = props;
    const h = height + 86;

    return (
        <Box m={margin} width={width} height={h} onClick={onClick} style={{ cursor: 'pointer' }}>
            <Paper>
                <Box width={width} height={h} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    { iconConverter(Icon.plus, {fontSize: 'large'})}
                </Box>
            </Paper>
        </Box>
    )
}

export default React.memo(AddCard);