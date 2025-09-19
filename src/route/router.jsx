import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupPage from "../components/SignupPage";
import BooksList from "../components/BooksList";
import SingleBooksPage from "../components/SingleBooksPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "/books",
    element: <BooksList />,
  },
  {
    path: "/books/:booksId",
    element: <SingleBooksPage />,
  },
]);
