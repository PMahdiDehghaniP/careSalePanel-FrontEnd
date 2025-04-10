import { Divider } from "@mui/material";
import AppSideBarFooter from "./SideBarFooter";
import AppSideBarHeader from "./SidebarHeader";
const AppSidebar = () => {
  return (
    <>
      <AppSideBarHeader />
      <Divider sx={{ borderColor: "#c9184a", borderWidth: 1 }} />
      <AppSideBarFooter />
    </>
  );
};
export default AppSidebar;
