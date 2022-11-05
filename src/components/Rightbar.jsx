import React from "react";
import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

export default function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt="Luffy"
            src="https://i.pinimg.com/736x/74/2f/d5/742fd5a3639902802e8535953fd2c920.jpg"
          />
          <Avatar
            alt="Zoro"
            src="https://i1.sndcdn.com/avatars-bLuMVEFlCq8eNzAZ-yWSJ2Q-t500x500.jpg"
          />
          <Avatar
            alt="Sanji"
            src="https://i.pinimg.com/736x/dd/f4/a3/ddf4a310117af4ebf55114ec2ce57269.jpg"
          />
          <Avatar
            alt="Naruto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV7XaQw0suUNB-0v7u3iREW3mYFz82ndkWrA&usqp=CAU"
          />
          <Avatar
            alt="Kakashi"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EFl1_h7FBFfqshj9QRUTEpIxJIsmrEYUl4-7KRk&s"
          />
          <Avatar alt="" src="" />
          <Avatar alt="" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Images
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://img1.ak.crunchyroll.com/i/spire4/ff004423067d18a28090797141de12df1644878391_full.jpg"
              alt="Naruto"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/736x/72/8d/8e/728d8e507a7cd65eeb4f82735293dde6.jpg"
              alt="Kakashi"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/736x/34/16/65/341665199bb597cdfae9848f975b844f.jpg"
              alt="Luffy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/736x/e9/6f/83/e96f83a6a8c3c859a362470e8abe065f.jpg"
              alt="Sanji"
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://i.pinimg.com/originals/65/23/43/652343e839c6621c1c4739b89c218948.jpg"
              alt="Zoro"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Recent Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Luffy"
                src="https://i.pinimg.com/736x/74/2f/d5/742fd5a3639902802e8535953fd2c920.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Ready for an adventure?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Luffy
                  </Typography>
                  {" — Let's go on an adventure. We'll find the One Piece…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Zoro"
                src="https://i1.sndcdn.com/avatars-bLuMVEFlCq8eNzAZ-yWSJ2Q-t500x500.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Training at 6am sharp"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Luffy, Sanji, Shubham
                  </Typography>
                  {" — We have to be in good shape before we set sail…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Sanji"
                src="https://i.pinimg.com/736x/dd/f4/a3/ddf4a310117af4ebf55114ec2ce57269.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Hungry?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sanji
                  </Typography>
                  {" — I'll prepare the best food for the journey…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
