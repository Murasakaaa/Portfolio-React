import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const drawerLinks = {
    fontFamily: "var(--font-archivo)",
    fontSize: "1.5rem",
  };

  const DrawerList = (
    <Box role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem>
          <ListItemButton
            disableRipple
            component={Link}
            to="/formations"
            sx={{
              "&:hover": {
                backgroundColor: "white",
                textDecoration: "underline",
              },
            }}
          >
            <ListItemText
              primary="Formations"
              slotProps={{ primary: drawerLinks }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            disableRipple
            component={Link}
            to="/projets"
            sx={{
              "&:hover": {
                backgroundColor: "white",
                textDecoration: "underline",
              },
            }}
          >
            <ListItemText
              primary="Projets"
              slotProps={{ primary: drawerLinks }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            disableRipple
            component={Link}
            to="/contact"
            sx={{
              "&:hover": {
                backgroundColor: "white",
                textDecoration: "underline",
              },
            }}
          >
            <ListItemText
              primary="Contact"
              slotProps={{ primary: drawerLinks }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-3 z-50 border-b-2 bg-white max-sm:relative">
        <Link to="/" className="text-2xl font-archivo ml-3 select-none">
          Nolann Maunier.
        </Link>

        {/* div pour le menu et son bouton*/}
        <div className="relative m-0 xl:mr-10">
          {/* bouton menu */}
          <button
            className="text-3xl cursor-pointer z-20 relative select-none flex items-center"
            onClick={toggleDrawer(true)}
          >
            <IconMenu2 size={32} strokeLinecap="square" />
          </button>
        </div>
      </header>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        slotProps={{
          paper: {
            sx: {
              width: "20rem",
              zIndex: 2000,
            },
          },
        }}
      >
        {DrawerList}
      </SwipeableDrawer>
    </>
  );
}
