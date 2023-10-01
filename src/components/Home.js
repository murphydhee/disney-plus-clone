import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, getDocs } from "firebase/firestore";
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

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // const querySnapshot = await db.collection("movies").get();
        // console.log(db);
        // // Access the Firestore collection
        // const moviesData = querySnapshot.docs.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        // }));
        const querySnapshot = await getDocs(collection(db, "movies"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });

        // Separate movies by type
        const recommend = moviesData.filter(
          (movie) => movie.type === "recommend",
        );
        // console.log(recommend);
        const newDisney = moviesData.filter((movie) => movie.type === "new");
        const original = moviesData.filter(
          (movie) => movie.type === "original",
        );
        const trending = moviesData.filter(
          (movie) => movie.type === "trending",
        );

        // Dispatch the movies to the Redux store
        dispatch(
          setMovies({
            recommend,
            newDisney,
            original,
            trending,
          }),
        );
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (userName) {
      fetchMovies();
    }
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
