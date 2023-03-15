import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { GameItem } from "./item";
import { IGame } from "interfaces";

type GameGridListProps = {
  loading?: boolean;
  data: IGame[];
};

export const GameGridList: React.FC<GameGridListProps> = ({
  loading,
  data,
}) => {
  return (
    <Box>
      {/* <Typography textTransform="uppercase" variant="h5">
        My Diary
      </Typography> */}
      <Grid container spacing={2}>
        {data?.map((item, index) => {
          return (
            <Grid key={item.id} item xs={6} sm={4} md={3} xl={2}>
              <GameItem itemData={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
