import { Avatar, Typography, Box } from "@mui/material";
const AppSideBarHeader = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          my: 2,
        }}
      >
        <Avatar
          src="/temAvatar.png"
          sx={{
            width: 100,
            height: 100,
            bgcolor: "#f4d58d",
            margin: "0 auto",
          }}
        />
        <Typography
          variant="h6"
          sx={{ color: "primary.main", fontWeight: 500, marginTop: 1.1 }}
        >
          سامانه خرید و فروش خودرو
        </Typography>
      </Box>
    </>
  );
};
export default AppSideBarHeader;
