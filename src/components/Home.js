// import styled from "styled-components";
// import ImgSlider from "./ImgSlider";
// import Viewers from "./Viewers";
// import NewDisney from "./NewDisney";
// import Originals from "./Originals";
// import Recommend from "./Recommend";
// import Trending from "./Trending";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import db from "../firebase";
// import { setMovies } from "../features/movie/movieSlice";
// import { selectUserName } from "../features/user/userSlice";
//
// const Home = (props) => {
//   const dispatch = useDispatch();
//   const userName = useSelector(selectUserName);
//   let recommends = [];
//   let newDisney = [];
//   let originals = [];
//   let trending = [];
//
//   useEffect(() => {
//     console.log("hello");
//     db.collection("movies").onSnapshot((snapshot) => {
//       snapshot.docs.map((doc) => {
//         console.log(recommends);
//         switch (doc.data().type) {
//           case "recommend":
//             recommends = [...recommends, { id: doc.id, ...doc.data() }];
//             break;
//
//           case "new":
//             newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
//             break;
//
//           case "original":
//             originals = [...originals, { id: doc.id, ...doc.data() }];
//             break;
//
//           case "trending":
//             trending = [...trending, { id: doc.id, ...doc.data() }];
//             break;
//         }
//       });
//
//       dispatch(
//         setMovies({
//           recommend: recommends,
//           newDisney: newDisney,
//           original: originals,
//           trending: trending,
//         }),
//       );
//     });
//   }, [userName]);
//
//   return (
//     <Container>
//       <ImgSlider />
//       <Viewers />
//       <Recommend />
//       <NewDisney />
//       <Originals />
//       <Trending />
//     </Container>
//   );
// };
//
// const Container = styled.main`
//   position: relative;
//   min-height: calc(100vh - 250px);
//   overflow-x: hidden;
//   display: block;
//   top: 72px;
//   padding: 0 calc(3.5vw + 5px);
//
//   &:after {
//     background: url("/images/home-background.png") center center / cover
//       no-repeat fixed;
//     content: "";
//     position: absolute;
//     inset: 0px;
//     opacity: 1;
//     z-index: -1;
//   }
// `;
// export default Home;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import db from "../firebase";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommend from "./Recommend";
import Trending from "./Trending";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const snapshot = await db.collection("movies").get(); // Access the Firestore collection
        const moviesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Separate movies by type
        moviesData.forEach((movie) => {
          switch (movie.type) {
            case "recommend":
              recommends.push(movie);
              break;
            case "new":
              newDisney.push(movie);
              break;
            case "original":
              originals.push(movie);
              break;
            case "trending":
              trending.push(movie);
              break;
            default:
              break;
          }
        });

        // Dispatch the movies to the Redux store
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisney,
            original: originals,
            trending: trending,
          }),
        );
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommend />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
