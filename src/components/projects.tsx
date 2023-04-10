import React from 'react';
import { Paper, Grid } from '@mui/material';
import Title from '../sharedComponents/title';
import ProjectCard from '../sharedComponents/projectCard';
import { details } from '../data/projects';
import colors from '../constant/colors';

const Projects = () => {
    return (
        <Paper elevation={0}>
            <Title title="Projects" />
            <Title title="Architects design houses" style={{ color: colors.grey4, fontSize: '12px', marginTop: '0.5rem', fontWeight: 'normal', marginBottom: '2rem' }} />
            <Grid container spacing={4} alignItems="flex-start">
                {details.map((item: any, index: number) => (
                    <Grid
                        item
                        key={item.name}
                        md={3}
                        sm={6}
                        xs={12}
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '5px' }}
                    >
                        <ProjectCard details={item} index={index} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default Projects;