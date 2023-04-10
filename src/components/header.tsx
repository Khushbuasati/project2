import React from 'react';
import { Grid } from '@mui/material';
import ProfileListItem from '../sharedComponents/profileListItem';
import TabsRoot from './tabs';
import conversation from '../assest/images/conversation_5.jpg';

const details = { img: conversation, name: 'Richard Davis', info: 'CEO / Co-Founder' };

const Header = () => {
    return (
        <Grid
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}
        >
            <ProfileListItem details={details} />
            <TabsRoot />
        </Grid>
    );
};

export default Header;