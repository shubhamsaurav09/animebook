import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Checkbox,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Post() {
  return (
    <Box>
      <Card sx={{ margin: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              L
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Monkey D. Luffy"
          subheader="May 05, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://i.pinimg.com/736x/34/16/65/341665199bb597cdfae9848f975b844f.jpg"
          alt="Luffy"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Monkey D. Luffy, also known as "Straw Hat Luffy" and commonly as
            "Straw Hat", is the main protagonist of One Piece. He is the founder
            and captain of the increasingly infamous and powerful Straw Hat
            Pirates. He desires to find the legendary treasure the "One Piece"
            left behind by the late Gol D. Roger and thereby become the Pirate
            King.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ margin: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              Z
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Roronoa Zoro"
          subheader="November 11, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://i.pinimg.com/originals/65/23/43/652343e839c6621c1c4739b89c218948.jpg"
          alt="Zoro"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Roronoa Zoro, also known as "Pirate Hunter" Zoro, is the combatant
            of the Straw Hat Pirates, one of their two swordsmen and one of the
            Senior Officers of the Straw Hat Grand Fleet. Formerly a bounty
            hunter, he is the second member of Luffy's crew and the first to
            join it
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ margin: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Vinsmoke Sanji"
          subheader="March 02, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://i.pinimg.com/736x/e9/6f/83/e96f83a6a8c3c859a362470e8abe065f.jpg"
          alt="Sanji"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Black Leg" Sanji, born as Vinsmoke Sanji, is the cook of the Straw
            Hat Pirates and one of the Senior Officers of the Straw Hat Grand
            Fleet. He is the fifth member of the crew and the fourth to join,
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ margin: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              N
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Uzumaki Naruto"
          subheader="October 10, 2022"
        />
        <CardMedia
          component="img"
          width="500px"
          heiht="500px"
          // height="20%"
          image="https://img1.ak.crunchyroll.com/i/spire4/ff004423067d18a28090797141de12df1644878391_full.jpg"
          alt="Naruto"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Naruto Uzumaki (Seventh Hokage) is a shinobi of Konohagakure's
            Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day
            of his birth — a fate that caused him to be shunned by most of
            Konoha throughout his childhood. After joining Team Kakashi, Naruto
            worked hard to gain the village's acknowledgement all the while
            chasing his dream to become Hokage.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ margin: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              K
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Hatake Kakashi"
          subheader="September 15, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://i.pinimg.com/736x/72/8d/8e/728d8e507a7cd65eeb4f82735293dde6.jpg"
          alt="Kakashi"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Kakashi Hatake (Sixth Hokage) is a shinobi of Konohagakure's Hatake
            clan. Famed as Kakashi of the Sharingan, he is one of Konoha's most
            talented ninja, regularly looked to for advice and leadership
            despite his personal dislike of responsibility.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Post;
