import React from 'react';
import { Paper, Grid, Stack, Button } from '@mui/material';
import Title from '../sharedComponents/title';
import ProfileListItem from '../sharedComponents/profileListItem';
import { list } from '../data/conversations';

const Conversations = () => {
    return (
        <Paper elevation={0}>
            <Title title="Conversations" />
            <Stack sx={{ marginTop: '2rem' }}>
                {list.map((item: any) => (
                    <Grid
                        key={item.name}
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '5px' }}
                    >
                        <ProfileListItem details={item} />
                        <Button variant="text" sx={{ fontWeight: 'bold', fontSize: '12px' }}>Reply</Button>

                    </Grid>
                ))}
            </Stack>
        </Paper>
    );
};

export default Conversations;