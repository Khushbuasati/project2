import React from 'react';
import { Box, Grid, Button, AvatarGroup, Avatar } from '@mui/material';
import Title from './title';
import colors from '../constant/colors';
import conversation_1 from '../assest/images/conversation_1.jpg';
import conversation_2 from '../assest/images/conversation_2.jpg';
import conversation_3 from '../assest/images/conversation_3.jpg';
import conversation_4 from '../assest/images/conversation_4.jpg';

const ProjectCard = ({ details, index }: any) => {
    return (
        <Box>
            <img src={details.img} alt={details.name} width="100%" height="150px" 
            style={{ borderRadius: '11px', boxShadow: `rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px` }} 
            />
            <Title title={`Project #${index}`} style={{ color: colors.grey2, fontSize: '12px', marginTop: '1rem', marginBottom: '0.3rem', fontWeight: 'normal' }} />
            <Title title={details.name} style={{ fontSize: '16px' }} />
            <Title title={details.desc} style={{ color: colors.grey4, fontSize: '12px', marginTop: '1rem', fontWeight: 'normal', marginBottom: '2rem' }} />
            <Grid sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button
                    variant="outlined"
                    sx={{ 
                        fontWeight: 'bold', border: `2px solid ${colors.blue}`, borderRadius: '9px', fontSize: '7px',
                        '&:hover': {
                            border: `2px solid ${colors.blue}`, borderRadius: '9px',
                        }
                    }}
                >
                    View Project
                </Button>
                <AvatarGroup>
                    <Avatar alt="Remy Sharp" src={conversation_1} sx={{ width: 20, height: 20 }} />
                    <Avatar alt="Travis Howard" src={conversation_3} sx={{ width: 20, height: 20 }} />
                    <Avatar alt="Cindy Baker" src={conversation_2} sx={{ width: 20, height: 20 }} />
                    <Avatar alt="Agnes Walker" src={conversation_4} sx={{ width: 20, height: 20 }} />
                </AvatarGroup>
            </Grid>
        </Box>
    );
};
export default ProjectCard;