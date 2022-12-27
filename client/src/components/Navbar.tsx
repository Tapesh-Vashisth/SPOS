import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

interface Props {
	window?: () => Window;
}

const drawerWidth = 200;
const navItems = [{name: 'Home', to: "/"}, {name: 'About', to: "/about"}, {name: 'Contact', to: "/contact"}, {name: 'Projects', to: "/projects"}, {name: 'Awards', to: "/awards"}, {name: "policy", to: "privacyPolicy"}];

export default function Navbar(props: Props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				<img src="/images/logo.jpg" style={{ width: "75px", height: "75px" }} />
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<NavLink key={item.name} to={item.to} style={{ textDecoration: "none", color: '#fff' }}>
						<ListItem disablePadding>
							<ListItemButton sx={{ textAlign: 'center' }}>
								<ListItemText primary={item.name} />
							</ListItemButton>
						</ListItem>
					</NavLink>
				))}
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<nav style={{ position: "sticky", zIndex: 1 }}>
			<AppBar component="nav" style={{ backgroundColor: "rgba(0, 0, 0, 0.29)", boxShadow: "none" }}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'white', fontWeight: "bold" }}
					>
						<img src='/images/logo.jpg' style={{ width: "75px", height: "75px",paddingTop:'10px' }} />
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item) => (
							<NavLink to={item.to} key={item.name} style={{ textDecoration: "none" }}>
								<Button sx={{ color: 'white', fontWeight: "bold" }}>
									{item.name}
								</Button>
							</NavLink>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</nav>
	);
}