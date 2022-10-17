import React, {useEffect, useState} from 'react';
import { Box, TextField, Dialog, DialogTitle, DialogActions, DialogContent, Button } from '@mui/material';
import { DashboardData } from '../../core/services/DashboardService/types';

type Props = {
    isOpen: boolean,
    onAdd: (item: DashboardData) => void,
    onClose: () => void
}

function DashboardDialog(props: Props) {
    const { isOpen, onAdd, onClose } = props;
    const [open, setOpen] = useState<boolean>(isOpen);
    const [data, setData] = useState<{[key: string]: any}>({});

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen])

    const handleChange = (value: string, fieldName: string) => {
        const newData = { ...data };
        let result: string | number | number[] = value;
        if (fieldName === 'value') {
            result = value.split(',').map(Number);
        }
        newData[fieldName] = result;
        setData(newData);
    }

    const handleClose = () => {
        setOpen(false);
        onClose();
    }

    const handleAdd = () => {
        setOpen(false);
        onAdd(data as DashboardData);
        onClose();
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{'Add new data'}</DialogTitle>
            <DialogContent>
                <Box display={'flex'} flexDirection={'column'}>
                    {[
                        {label: 'id'},
                        {label: 'title'},
                        {label: 'value', placeholder: '1,2,3,4'},
                        {label: 'type', placeholder: 'choose color (0-6)' },
                    ].map((item) => (
                        <Box key={item.label} mb={2}>
                            <TextField
                                {...item}
                                variant={'outlined'}
                                onChange={(e) => handleChange(e.target.value, item.label)}
                            />
                        </Box>
                    ))}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleAdd}>{'add'}</Button>
                <Button onClick={onClose}>{'cancel'}</Button>
            </DialogActions>
        </Dialog>

    )
}

export default React.memo(DashboardDialog);