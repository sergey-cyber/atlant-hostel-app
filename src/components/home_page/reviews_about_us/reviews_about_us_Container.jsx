import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getAverageRaiting,
  getReviews,
  getRevPartSize,
  getTotalReviewsCount,
} from "../../../redux/selectors/reviewsDataSelector";
import ReviewsAboutUs from "./reviews_about_us";
import { setReviewsForm, getReviewsPart } from "../../../redux/reviews-data-reducer";

const ReviewsAboutUsContainer = ({ averageRating, ...props }) => {
  // Вкл/выкл прелоадер
  const [reviewPreloader, setPreloader] = useState(true);

  useEffect(() => {
    // Запрашиваем на сервере первую пачку отзывов
    props
      .getReviewsPart(1, props.revPartSize)
      // Отключаем прелоадер, когда пришел ответ с сервака
      .then(() => setPreloader(false));
  }, []);

  return (
    <ReviewsAboutUs
      reviews={props.reviews}
      setReviewsForm={props.setReviewsForm}
      averageRating={averageRating}
      reviewPreloader={reviewPreloader}
      getReviewsPart={props.getReviewsPart}
      totalReviewsCount={props.totalReviewsCount}
      revPartSize={props.revPartSize}
      setPreloader={setPreloader}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    reviews: getReviews(state),
    averageRating: getAverageRaiting(state),
    revPartSize: getRevPartSize(state),
    totalReviewsCount: getTotalReviewsCount(state),
  };
};

export default connect(mapStateToProps, { setReviewsForm, getReviewsPart })(
  ReviewsAboutUsContainer
);
