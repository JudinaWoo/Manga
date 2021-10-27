import { HomeOutlined } from "@material-ui/icons";
import { AppBar, Toolbar } from "@material-ui/core";

import MenuItem from "./";

export default {
  component: MenuItem,
  title: "DesignSystem/Molecule/MenuItem",
  decorators: [
    (Story) => (
      <AppBar position="static">
        <Toolbar>
          <Story />
        </Toolbar>
      </AppBar>
    ),
  ],
};

export const Default = () => <MenuItem to="/">Menu 1</MenuItem>;

export const WithIcon = () => (
  <MenuItem to="/" startIcon={<HomeOutlined />}>
    Menu 2
  </MenuItem>
);
export const WithCurrentVariant = () => (
  <MenuItem to="/" startIcon={<HomeOutlined />} variant="current">
    Menu 3
  </MenuItem>
);
