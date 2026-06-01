import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import SignupPage from "../components/SignupPage.jsx";
import BooksList from "../components/BooksList.jsx";
import SingleBooksPage from "../components/SingleBooksPage.jsx";
import Admin from "../components/Admin.jsx";
import AddBook from "../components/AddBook.jsx";
import EditBook from "../components/EditBook.jsx";
import DeleteBook from "../components/DeleteBook.jsx";
import EditBookForm from "../components/EditBookForm.jsx";
import AddCategoryPage from "../components/AddCategoryPage.jsx";
import GenreBookPage from "../components/GenreBookPage.jsx";

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
    element: <Admin />,
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
