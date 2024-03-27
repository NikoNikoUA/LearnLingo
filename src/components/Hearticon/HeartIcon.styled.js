import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { styled as muiStyled } from "@mui/material/styles";

export const HeartFill = muiStyled(Favorite)({
  fill: "#F4C550",
});

export const HeartStroke = muiStyled(FavoriteBorder)({
  fill: "#F4C550",
});
