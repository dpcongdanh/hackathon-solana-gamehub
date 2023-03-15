// import React from "react";
// import {
//   useDataGrid,
//   EditButton,
//   ShowButton,
//   DeleteButton,
// } from "@refinedev/mui";

import { List } from "components/crud/list";
import { GameGridList } from "components/elements/games";
import { GameListMockData } from "./mock";
// import { DataGrid, GridColumns } from "@mui/x-data-grid";
// import { useMany } from "@refinedev/core";

export const GameList = () => {
  // const { dataGridProps } = useDataGrid();

  // const { data: categoryData, isLoading: categoryIsLoading } = useMany({
  //   resource: "categories",
  //   ids: dataGridProps?.rows?.map((item: any) => item?.category?.id) ?? [],
  //   queryOptions: {
  //     enabled: !!dataGridProps?.rows,
  //   },
  // });

  // const columns = React.useMemo<GridColumns<any>>(
  //   () => [
  //     {
  //       field: "id",
  //       headerName: "Id",
  //       type: "number",
  //       minWidth: 50,
  //     },
  //     {
  //       field: "name",
  //       headerName: "Name",
  //       minWidth: 200,
  //     },
  //     {
  //       field: "material",
  //       headerName: "Material",
  //       minWidth: 200,
  //     },
  //     {
  //       field: "description",
  //       headerName: "Description",
  //       minWidth: 200,
  //     },
  //     {
  //       field: "price",
  //       headerName: "Price",
  //       type: "number",
  //       minWidth: 200,
  //     },
  //     {
  //       field: "category",
  //       headerName: "Category",
  //       valueGetter: ({ row }) => {
  //         const value = row?.category?.id;

  //         return value;
  //       },
  //       minWidth: 300,
  //       renderCell: function render({ value }) {
  //         return categoryIsLoading ? (
  //           <>Loading...</>
  //         ) : (
  //           categoryData?.data?.find((item) => item.id === value)?.title
  //         );
  //       },
  //     },
  //     {
  //       field: "actions",
  //       headerName: "Actions",
  //       renderCell: function render({ row }) {
  //         return (
  //           <>
  //             <EditButton hideText recordItemId={row.id} />
  //             <ShowButton hideText recordItemId={row.id} />
  //             <DeleteButton hideText recordItemId={row.id} />
  //           </>
  //         );
  //       },
  //       align: "center",
  //       headerAlign: "center",
  //       minWidth: 80,
  //     },
  //   ],
  //   [categoryData?.data, categoryIsLoading]
  // );

  return (
    <List>
      <GameGridList data={GameListMockData}></GameGridList>
      {/* <DataGrid {...dataGridProps} columns={columns} autoHeight /> */}
    </List>
  );
};
