import { createSelector } from "reselect";

const selectdirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectdirectory],
  directory => directory.sections
);
