import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  CardActionArea,
  Link,
} from "@mui/material";
import { IGame } from "interfaces";
import { CardShowButton } from "components/buttons/card-show";

type GameItemProps = {
  itemData: IGame;
  // img: string;
  // alt: string;
  // title: string;
  // description: string;
  // genre: string;
  // createdAt: string;
  // updatedAt: string;
  // tags: string[];
};

export const GameItem: React.FC<GameItemProps> = ({ itemData }) => {
  return (
    <Card sx={{ maxWidth: 280, boxShadow: "none", borderRadius: 0 }}>
      <CardShowButton recordItemId={itemData.id}>
        <CardActionArea>
          <Box
            sx={{ position: "relative", textAlign: "center", color: "white" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={itemData.cover}
              alt={itemData.cover}
            />
            <Typography
              variant="subtitle2"
              sx={{
                backgroundColor: "primary.light",
                position: "absolute",
                bottom: "0px",
                left: "0px",
                paddingX: "8px",
                paddingY: "2px",
                display: "flex",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {itemData.created_at}
            </Typography>
          </Box>
          <CardContent sx={{ padding: 0, paddingTop: 1 }}>
            <Typography variant="body1" color="text.primary">
              {itemData.title}
            </Typography>
            <Typography variant="caption" color="text.primary">
              {itemData.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CardShowButton>

      <CardActions sx={{ padding: 0 }}>
        {itemData.tags.map((tag, index) => {
          return (
            <Link
              key={index}
              href="#"
              onClick={(
                e:
                  | React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  | React.MouseEvent<HTMLSpanElement, MouseEvent>
              ) => {
                e.preventDefault();
              }}
              // size="small"
              // sx={{ padding: 0 }}
              // color="primary"
            >
              #{tag}
            </Link>
          );
        })}
      </CardActions>
    </Card>
  );
};
