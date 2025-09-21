import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupPage from "../components/SignupPage";
import BooksList from "../components/BooksList";
import SingleBooksPage from "../components/SingleBooksPage";
import PannelAdmin from "../components/pannelAdmin";
import AddBook from "../components/AddBook";
import EditBook from "../components/EditBook";
import DeleteBook from "../components/DeleteBook";

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
  {
    path: "/admin",
    element: <PannelAdmin />,
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
        path: "/admin/deleteitem",
        element: <DeleteBook />,
      },
    ],
  },
]);
