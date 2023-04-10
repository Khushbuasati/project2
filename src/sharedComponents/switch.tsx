import React from 'react';
import { styled } from '@mui/material/styles';
import { FormControlLabel, Switch, Typography } from '@mui/material';
import colors from '../constant/colors';

const MaterialUISwitch = styled(Switch)(() => ({
    width: 44,
    height: 26,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translate(6px, 3px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translate(20px, 4px)',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: colors.darkBlue2,
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#fff',
        width: 14,
        height: 14,
        border: `1px solid ${colors.lightGrey}`,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            border: `1px solid ${colors.darkBlue2}`,
            borderRadius: '50%'
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: colors.grey,
        borderRadius: 20 / 2,
    },
}));

interface Props {
    label: string;
    isChecked: boolean;
}

const MUISwitch = ({ label, isChecked }: Props) => {
    const [checked, setChecked] = React.useState<boolean>(isChecked ?? false);
    const handleChange = (event: any) => {
        setChecked(event.target.checked);
    };
    return (
        <FormControlLabel
            control={
                <MaterialUISwitch
                    sx={{ m: 1 }}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            }
            label={<Typography
                sx={{ fontSize: '12px', color: colors.grey2, }}
            >
                {label}
            </Typography>}
        />
    );
}

export default MUISwitch;