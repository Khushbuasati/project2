import React, { useState } from 'react';
import { Box, Tab, Tabs, IconButton, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import colors from '../constant/colors';

const ITEM_HEIGHT = 48;

const tabsList: any = [
    { name: 'App', value: 0, icon: <HomeIcon sx={{ fontSize: '14px' }} /> },
    { name: 'Message', value: 1, icon: <EmailIcon sx={{ fontSize: '14px' }} /> },
    { name: 'Settings', value: 2, icon: <SettingsIcon sx={{ fontSize: '14px' }} /> }
]

const TabTitle = styled(Tab)(() => ({
    fontSize: 12,
    color: `${colors.darkBlue} !important`,
    textTransform: 'capitalize',
    minHeight: '7px',
    margin: '3px 1rem 0px 3px',
    padding: '3px',
    borderRadius: '6px',
}));

export default function TabsRoot() {
    const [value, setValue] = useState<number>(0);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
    ) => {
        setValue(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Tabs value={value} onChange={handleChange} sx={{ backgroundColor: colors.grey7, minHeight: '27px', borderRadius: '6px' }} TabIndicatorProps={{ sx: { backgroundColor: 'transparent' } }}>
                    {
                        tabsList.map((option: any, index: number) => (
                            <TabTitle
                                sx={{
                                    background: value === option.value ? 'white' : 'transparent',
                                    boxShadow: value === option.value ? `rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px` : 'none'
                                }}
                                icon={option.icon} iconPosition="start" label={option.name} value={option.value}
                            />
                        ))
                    }
                </Tabs>

            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >
                    {tabsList.map((option: any, index: number) => (
                        <MenuItem key={option.name} selected={index === value} onClick={(event) => handleMenuItemClick(event, index)}>
                            {option.name}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    );
}