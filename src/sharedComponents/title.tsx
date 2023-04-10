import React from 'react';
import Typography from '@mui/material/Typography';
import colors from '../constant/colors';

interface Props {
    title: String;
    style?: Object;
}

const Title = ({ title, style = {} }: Props) => {
    return (
        <Typography
            sx={{ fontSize: '14px', fontWeight: 'bold', color: colors.darkBlue, ...style }}
        >
            {title}
        </Typography>
    );
};

export default Title;