import { useState } from "react";
import ProductsDetailsAddComments from "./ProductsDetailsAddComments";
import ProductsDetailsEditComments from "./ProductsDetailsEditComments";

const ProductsDetailsCommentsTableContent = () => {
  const [addComment] = useState(false);
  const [editComment, setEditComment] = useState(false);
  const schema = [
    {
      user: "jhon",
      comments: [
        { title: "Date Repaired", text: "23/08/2022" },
        { title: "Fault", text: "Dummy fault text" },
        { title: "Other Fault", text: "Other fault dummy text" },
        {
          title: "What was fixed",
          text: "simply dummy text of what was fixed",
        },
      ],
      date: "20/07/2002",
    },

    {
      user: "jhon",
      comments: [
        { title: "Date Repaired", text: "23/08/2022" },
        { title: "Fault", text: "Dummy fault text" },
        { title: "Other Fault", text: "Other fault dummy text" },
        {
          title: "What was fixed",
          text: "simply dummy text of what was fixed",
        },
      ],
      date: "20/07/2002",
    },

    {
      user: "jhon",
      comments: [
        { title: "Date Repaired", text: "23/08/2022" },
        { title: "Fault", text: "Dummy fault text" },
        { title: "Other Fault", text: "Other fault dummy text" },
        {
          title: "What was fixed",
          text: "simply dummy text of what was fixed",
        },
      ],
      date: "20/07/2002",
    },
  ];
  return (
    <>
      {schema.map((commentDetails) => (
        <div
          key={schema.indexOf(commentDetails)}
          className="products-details-comments-table-row products-details-comments-content"
        >
          <div className="products-details-comments-content__data">
            {commentDetails.user}
          </div>
          <div className="products-details-comments-content__data">
            {commentDetails.comments.map((comment) => (
              <div>
                <span className="products-details-comments-content__comment-title">
                  {comment.title}:&nbsp;
                </span>
                {comment.text}
              </div>
            ))}
          </div>
          <div className="products-details-comments-content__data">
            {commentDetails.date}
          </div>
          <div className="products-details-comments-content__data-icons">
            <img src="/src/assets/copy.svg" alt="Icon" />
            <img
              src="/src/assets/carbon_edit.svg"
              alt="Icon"
              onClick={() => setEditComment(!editComment)}
            />
          </div>
        </div>
      ))}
      {addComment && <ProductsDetailsAddComments />}
      {editComment && (
        <ProductsDetailsEditComments
          editComment={editComment}
          setEditComment={setEditComment}
        />
      )}
    </>
  );
};

export default ProductsDetailsCommentsTableContent;
