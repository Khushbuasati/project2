import React, { useState } from 'react';
import {
    Box, Drawer, Toolbar, Grid, Stack, ListItemButton, Divider, ListItem, List, ListItemIcon,
    ListItemText, Button
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import ArticleIcon from '@mui/icons-material/Article';
import TableViewIcon from '@mui/icons-material/TableView';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';

import colors from '../constant/colors';
import Title from '../sharedComponents/title';

const menuListL: any[] = [
    { icon: <DashboardIcon fontSize='small' sx={{ color: colors.white }} />, name: 'Dashboard' },
    { icon: <TableViewIcon fontSize='small' sx={{ color: colors.white }} />, name: 'Tables' },
    { icon: <ReceiptLongIcon fontSize='small' sx={{ color: colors.white }} />, name: 'Billing' },
    { icon: <FormatTextdirectionRToLIcon fontSize='small' sx={{ color: colors.white }} />, name: 'RTL' },
    { icon: <NotificationsIcon fontSize='small' sx={{ color: colors.white }} />, name: 'Notifications' },
    { icon: <PersonIcon fontSize='small' sx={{ color: colors.white }} />, name: 'Profile' },
    { icon: <LoginIcon fontSize='small' sx={{ color: colors.white }} />, name: 'Sign In' },
    { icon: <ArticleIcon fontSize='small' sx={{ color: colors.white }} />, name: 'Sign Up' },
];

const drawerWidth = 222;

export default function DrawerRoot() {
    const [value, setValue] = useState<number>(5);

    const handleChange = (newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ paddingRight: '3rem' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        background: colors.darkBlue2,
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        color: colors.white,
                        height: '97%',
                        margin: '1rem',
                        borderRadius: '8px',
                    }
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    <Stack sx={{ alignItems: 'center' }}>
                        <Grid sx={{ marginBottom: '-4px' }}>
                            <KeyboardArrowUpIcon sx={{ border: `1px solid ${colors.white}`, fontSize: '12px' }} />
                            <KeyboardArrowUpIcon sx={{ border: `1px solid ${colors.white}`, fontSize: '12px' }} />
                        </Grid>
                        <KeyboardArrowDownIcon sx={{ border: `1px solid ${colors.white}`, fontSize: '12px' }} />
                    </Stack>
                    <Title title="Material Dashboard 2" style={{ color: colors.white }} />
                </Toolbar>
                <Divider />
                <List>
                    {menuListL.map((item, index) => (
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton
                                sx={{
                                    background: index === value ? colors.blue2 : 'transparent',
                                    borderRadius: '4px',
                                    margin: '0rem 1rem',
                                    padding: '7px 16px'
                                }}
                                onClick={() => handleChange(index)}
                            >
                                <ListItemIcon sx={{ minWidth: '32px' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={<Title title={item.name} style={{ color: index === value ? colors.white : colors.grey8, fontWeight: 'normal', fontSize: '12px' }} />} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Button variant='contained' sx={{ margin: 'auto 1rem 1rem 1rem', fontSize: '10px', fontWeight: 'bold' }}>
                    Upgrade to Pro
                </Button>
            </Drawer>
        </Box>
    );
}
