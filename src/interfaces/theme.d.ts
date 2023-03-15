import "@refinedev/mui";

export interface CustomTheme {
  //   customVariable: {
  //     custom: string;
  //   };
}

declare module "@refinedev/mui" {
  interface Theme extends import("@refinedev/mui").Theme, CustomTheme {}
  interface ThemeOptions
    extends import("@refinedev/mui").ThemeOptions,
      CustomTheme {}
}
