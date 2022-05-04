import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import DeleteAccount from "../accounts/delete/DeleteAccount";
import CreatePost from "../feed/createPost/CreatePost"
import Logout from "../accounts/logout/Logout";
import Feed from '../feed/Feed';
import { ListItemIcon } from '@mui/material';
import icon from "../../../src/icon-left-font-monochrome-white.png"


const drawerWidth = 200;

export default function NavDrawer() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <img src={icon} alt="logo" height={100} width={120} />

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItemIcon key="create">
                            <CreatePost />
                        </ListItemIcon>
                        <ListItemIcon key="create">
                            <CreatePost />
                        </ListItemIcon>
                        <ListItemIcon key="delete">
                            <DeleteAccount />
                        </ListItemIcon>
                        <ListItemIcon key="logout">
                            <Logout />
                        </ListItemIcon>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Feed />
            </Box>
        </Box>
    );
}
