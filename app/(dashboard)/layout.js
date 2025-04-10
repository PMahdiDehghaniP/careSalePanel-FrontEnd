import { Grid } from "@mui/material";
import AppSidebar from "@/components/sidebar/AppSidebar";

export default function DashboardLayout({ children }) {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={3} sx={{ backgroundColor: "orange" }}>
        <AppSidebar />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  );
}
