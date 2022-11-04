import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack } from "@mui/material";

export default function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

// import React from "react";
// import { Button, Typography, styled } from "@mui/material/";
// import { Settings, Add } from "@mui/icons-material/";

// export default function App() {
// return (
//   <div>
//     <Button startIcon={<Add />} variant="contained" color="primary">
//       Add New Item
//     </Button>
//     <Button
//       endIcon={<Settings />}
//       sx={{ color: "white", m: 5 }}
//       variant="contained"
//       color="secondary"
//       size="medium"
//     >
//       Settings
//     </Button>
//     <Button
//       variant="text"
//       sx={{
//         backgroundColor: "skyblue",
//         color: "#888",
//         margin: 5,
//         "&:hover": {
//           backgroundColor: "red",
//           color: "black",
//         },
//         "&:disabled": {
//           backgroundColor: "#888",
//           color: "white",
//         },
//       }}
//     >
//       Text
//     </Button>
//     <Typography variant="h1" component="p">
//       This is a paragraph written with porperties of a h1 tag without causing
//       any browser compatibility issues
//     </Typography>
//     <RedButton variant="contained">Custom Buttom</RedButton>
//     <BlackButton variant="contained">Black Button</BlackButton>
//   </div>
// );
// const RedButton = styled(Button)({
//   backgroundColor: "red",
//   color: "white",
//   margin: "4rem",
//   "&:hover": {
//     backgroundColor: "red",
//     color: "white",
//   },
// });

// const BlackButton = styled(Button)({
//   backgroundColor: "black",
//   color: "white",
// });
// }
