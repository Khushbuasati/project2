import React from 'react';
import { Paper, Grid, Stack, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import colors from '../constant/colors';
import Title from '../sharedComponents/title';
import { description, otherInfo } from '../data/profileInfo';

import facebook from '../assest/images/facebook.png';
import twitter from '../assest/images/twitter.png';
import instagram from '../assest/images/instagram.png';

const ProfileInformation = () => {
    return (
        <Paper elevation={0}>
            <Grid
                sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}
            >
                <Title title="Profile Information" />
                <IconButton><EditIcon fontSize='small' /></IconButton>
            </Grid>
            <Title title={description} style={{ color: colors.grey4, fontSize: '12px', marginTop: '1rem', fontWeight: 'normal', paddingRight: '2rem' }} />
            <Stack sx={{ marginTop: '2rem' }}>
                {otherInfo.map((item: any) => (
                    <Grid
                        key={item.label}
                        sx={{ display: 'inline-flex', alignItems: 'baseline', paddingBottom: '0.7rem' }}
                    >
                        {item.details ? <>
                            <Title title={`${item.label}:`} style={{ fontSize: '12px', mr: 1 }} />
                            <Title title={item.details} style={{ color: colors.grey2, fontSize: '12px', fontWeight: 'normal' }} />
                        </>
                            : <>
                                <Title title={`${item.label}:`} style={{ fontSize: '12px', mr: 1 }} />
                                <img src={facebook} alt="Facebook" style={{ marginRight: '4px' }} />
                                <img src={twitter} alt="Twitter" style={{ marginRight: '4px' }} />
                                <img src={instagram} alt="Instagram" />
                            </>
                        }
                    </Grid>
                ))}
            </Stack>
        </Paper>
    );
};

export default ProfileInformation;