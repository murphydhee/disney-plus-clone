// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import userReducer from "../features/user/userSlice";
// // import movieReducer from "../features/movie/movieSlice";
//
// export default configureStore({
//   reducer: {
//     user: userReducer,
//     // movie: movieReducer,
//   },
//   middleware: getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// });

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default store;
