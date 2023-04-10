import React from 'react';
import { Grid, Box, Paper } from '@mui/material';
import Header from './header';
import PersonalSettings from './personalSettings';
import ProfileInformation from './profileInformation';
import Conversations from './conversations';
import Projects from './projects';
import DrawerRoot from './drawer';
import colors from '../constant/colors';

const Main = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', background: colors.grey5, p: '0rem' }}>
            <DrawerRoot />
            <Paper sx={{ padding: '0rem 1.2rem 1rem' }}>
                <Header />
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <PersonalSettings />
                    </Grid>
                    <Grid item md={4} xs={12} sx={{ paddingRight: '1rem' }}>
                        <ProfileInformation />
                    </Grid>
                    <Grid item md={4} xs={12} sx={{ boxShadow: '-10px 0px 3px -11px #aaaaaa' }}>
                        <Conversations />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Projects />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default Main;
