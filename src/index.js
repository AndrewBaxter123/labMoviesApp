import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage.js";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import ActorsPage from "./pages/actorsPage";
import ActorDetailsPage from "./pages/actorsDetailPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import NowPlayingPage from "./pages/nowPlayingPage"
import PlaylistPage from "./pages/playlistPage"
import SignUpPage from "./pages/signUpPage"
import LoginPage from "./pages/loginPage"
import {AuthProvider} from "./contexts/authContext";
import PrivateRoute from "./components/privateRoutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue, grey } from '@mui/material/colors';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: blue,
     background: {
      default: grey[100],
      paper: grey[200]
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
        <SiteHeader />
        <MoviesContextProvider>
            <Routes>
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route exact path="/movies/popular" element={<PopularMoviesPage />} />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route exact path="/movies/nowPlaying" element={<NowPlayingPage />} />
        <Route exact path="/movies/playlist" element={<PlaylistPage />} />
        <Route exact path="/actors" element={<ActorsPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/movies/:id/similar" element={<SimilarMoviesPage />} />
        <Route path="/actors/:id" element={<ActorDetailsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </ThemeProvider>
  );
};
const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);