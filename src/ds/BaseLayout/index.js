import { node } from "prop-types";
import { HomeOutlined, ListOutlined, SearchOutlined } from "@material-ui/icons";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { homePath, myListPath, searchPath } from "../../routes";
import MenuItem, { useVariantLocation } from "../MenuItem";
import Separator from "../Separator";

export default function BaseLayout({ children }) {
  const { variantPath } = useVariantLocation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Manga</Typography>
          <MenuItem
            startIcon={<HomeOutlined />}
            to={homePath}
            variant={variantPath(homePath)}
          >
            Accueil
          </MenuItem>
          <MenuItem
            startIcon={<SearchOutlined />}
            to={searchPath}
            variant={variantPath(searchPath)}
          >
            Recherche
          </MenuItem>
          <MenuItem
            startIcon={<ListOutlined />}
            to={myListPath}
            variant={variantPath(myListPath)}
          >
            Ma Liste
          </MenuItem>

          <Separator />

          <MenuItem to="/login">Login</MenuItem>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}

BaseLayout.propTypes = {
  children: node,
};
