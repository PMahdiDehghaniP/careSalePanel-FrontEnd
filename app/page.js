import { Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={9}>
        <Typography>9تست</Typography>
      </Grid>
      <Grid xs={3}>
        <Typography>3تست</Typography>
      </Grid>
    </Grid>
  );
}
