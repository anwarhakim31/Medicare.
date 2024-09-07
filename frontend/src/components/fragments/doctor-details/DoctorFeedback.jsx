import React, { useEffect, useState } from "react";
import avatar from "../../../assets/images/patient-avatar.png";
import { formatDate } from "../../../util/util";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";
import { toast } from "react-toastify";
import useToken from "../../../hooks/useToken";
import { URL } from "../../../constant/config";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const DoctorFeedback = ({ reviews, totalRating, refatchData }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const { id } = useParams();
  const [totalFeedbackUser, setTotalFeedbackUser] = useState(0);
  const token = useToken();
  const [history, setHistory] = useState([]);
  const { state } = useAuth();

  useEffect(() => {
    if (reviews.length > 0) {
      const total = reviews.filter(
        (review) => review?.user?._id === state.user._id && review.doctor === id
      ).length;

      setTotalFeedbackUser(total);
    }
  }, [reviews]);

  useEffect(() => {
    const getBook = async () => {
      if (!token) return;

      try {
        const res = await fetch(URL + "/users/appointments/my-appointments", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();

        setHistory(data.data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getBook();
  }, [token]);

  const handleFeedBack = () => {
    if (history.length > 0) {
      const totalReview = history.filter((doctor) => doctor._id === id).length;

      if (totalFeedbackUser >= totalReview) {
        toast.info("You have already a left review");
      } else {
        setShowFeedbackForm(true);
      }
    }
  };

  return (
    <div>
      <div className="mb-[50px] ">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All Reviews ({totalRating})
        </h4>
        {reviews && (
          <div className="max-h-[50vh] w-full overflow-scroll scroll">
            {reviews.length > 0 &&
              reviews.map((review, i) => (
                <div key={i} className="flex justify-between gap-10 mb-[30px] ">
                  <div className=" flex gap-3">
                    <figure className="w-10 h-10 rounded-full">
                      <img
                        src={review?.user?.photo}
                        alt="avatar"
                        className="w-full"
                      />
                    </figure>
                    <div>
                      <h5 className="text-base leading-5 text-primaryColor font-bold">
                        {review?.user?.name}
                      </h5>
                      <p className="text-[14px] leading-6 text-textColor">
                        {formatDate(review.createdAt)}
                      </p>
                      <p className="text-para mt-3 font-medium text-[15px]">
                        {review?.reviewText}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, index) => (
                      <AiFillStar key={index + 1} color="orange" />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
        {!showFeedbackForm && (
          <div className="text-center">
            <button
              className={`${
                history.length > 0 && history.some((his) => his._id === id)
                  ? "block"
                  : "hidden"
              } btn`}
              aria-label="give feedback"
              onClick={handleFeedBack}
            >
              Give Feedback
            </button>
          </div>
        )}
        {showFeedbackForm && (
          <FeedbackForm
            refatchData={refatchData}
            setShowFeedbackForm={setShowFeedbackForm}
          />
        )}
      </div>
    </div>
  );
};

export default DoctorFeedback;
