//selectors from teachersSlice

export const selectGetTeachers = (state) => state.teachers.teachers;
// export const selectGetAllTeachers = (state) => state.teachers.allTeachers;
export const selectPage = (state) => state.teachers.page;
export const selectIsLoading = (state) => state.teachers.isLoading;
export const selectError = (state) => state.teachers.error;

//selectors from favTeachersSlice

export const selectFavTeachers = (state) => state.favTeachers.favorites;

//selectors from filterSlice
