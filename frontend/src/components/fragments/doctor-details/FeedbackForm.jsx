import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDevault();
  };

  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-base leading-6 font-semibold mb-4 mt-0">
          How would you rate the overall experience?
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                type="button"
                key={index}
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-base leading-6 font-semibold mb-4 mt-0">
          Show your feedback with suggestions
        </h3>

        <textarea
          className="border borde-solid border-slate-900 focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          rows={5}
          placeholder="Write a message"
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>

        <button type="submit" className="btn" onClick={handleSubmit}>
          Submit Feedback
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
