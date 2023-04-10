import React from 'react';
import { Avatar, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import colors from '../constant/colors';
import Title from '../sharedComponents/title';

interface Props {
    details: { img: string; name: string; info: string; }
}

const ProfileListItem = ({ details }: Props) => {
    return (
        <ListItem sx={{ padding: 0 }}>
            <ListItemAvatar>
                <Avatar><img src={details.img} alt={details.name} width="100%" /></Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={<Title title={details.name} style={{ color: colors.darkBlue, fontSize: '13px' }} />}
                secondary={<Title title={details.info} style={{ color: colors.grey4, fontSize: '12px', fontWeight: 'normal' }} />} />
        </ListItem>
    );
};

export default ProfileListItem;