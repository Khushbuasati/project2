import React from 'react';
import { Paper, Stack } from '@mui/material';
import colors from '../constant/colors';
import Title from '../sharedComponents/title';
import Switch from '../sharedComponents/switch';
import { accountDetails, applicationDetails } from '../data/personalSettings';

const Details = ({ title, list }: any) => {
    return (
        <>
            <Title title={title} style={{ color: colors.grey3, fontSize: '12px', marginTop: '1.35rem' }} />
            <Stack>
                {list.map((item: any) => (
                    <Switch key={item.label} label={item.label} isChecked={item.isChecked} />
                ))}
            </Stack>
        </>
    )
};

const PersonalSettings = () => {
    return (
        <Paper elevation={0}>
            <Title title="Personal Settings" />
            <Details title="ACCOUNT" list={accountDetails} />
            <Details title="APPLICATION" list={applicationDetails} />
        </Paper>
    );
};

export default PersonalSettings;