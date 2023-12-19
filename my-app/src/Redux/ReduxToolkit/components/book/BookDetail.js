import React, { useEffect } from "react";
import {
  selectBookDetail,
  getBook,
  removeBook,
} from "../../features/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function BookDetail() {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookDetail = useSelector(selectBookDetail);

  const getBookDetail = async () => {
    if (bookId != null) {
      dispatch(getBook(bookId));
    }
  };

  useEffect(() => {
    getBookDetail();

    // eslint-disable-next-line
  }, []);

  function getBackBookList() {
    navigate("/");
  }

  function removeCurrentBook() {
    if (bookId) {
      dispatch(removeBook(bookId));
      alert(`Remove book ${JSON.stringify(bookDetail)} successfully!!!`);
      navigate("/");
    }
  }

  return (
    <div>
      <h1>Book Detail</h1>
      <p>
        <b>Id:</b> {bookDetail?.id}
      </p>
      <p>
        <b>Title:</b> {bookDetail?.title}
      </p>
      <p>
        <b>Quantity:</b> {bookDetail?.quantity}
      </p>
      <button type="button" onClick={getBackBookList}>
        Back
      </button>
      &nbsp;
      <button type="button" onClick={removeCurrentBook}>
        Remove
      </button>
    </div>
  );
}
