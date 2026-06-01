import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupPage from "../components/SignupPage";
import BooksList from "../components/BooksList";
import SingleBooksPage from "../components/SingleBooksPage";
import PanelAdmin from "../components/PanelAdmin";
import AddBook from "../components/AddBook";
import EditBook from "../components/EditBook";
import DeleteBook from "../components/DeleteBook";
import EditBookForm from "../components/EditBookForm";
import AddCategoryPage from "../components/AddCategorypage";
import GenreBookPage from "../components/GenreBookPage";

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
    path: "/books/:bookId",
    element: <SingleBooksPage />,
  },
  {
    path: "/admin",
    element: <PanelAdmin />,
    children: [
      {
        path: "/admin/additem",
        element: <AddBook />,
      },
      {
        path: "/admin/edititem",
        element: <EditBook />,
      },
      {
        path: "/admin/edititem/:bookId",
        element: <EditBookForm />,
      },
      {
        path: "/admin/deleteitem",
        element: <DeleteBook />,
      },
      {
        path: "/admin/addcategory",
        element: <AddCategoryPage />,
      },
    ],
  },
  {
    path: "/genre/:genreId",
    element: <GenreBookPage />,
  },
]);
