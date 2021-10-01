import { Rate, Pagination } from "antd";
import style from "./reviews_about_us.module.scss";
import Preloader from "../../general/preloader/preloader";

const ReviewsAboutUs = (props) => {
  const { averageRating, reviewPreloader, reviews, totalReviewsCount, revPartSize } = props;

  const setShowReviewsForm = () => {
    props.setReviewsForm(true);
  };

  const onChangePaginator = (currentPart, partSize) => {
    // Отправляем запрос за частью отзывов при нажатии на пагинатор(текущая страница и размер страницы приходит автоматом из пагинатора)
    props
      .getReviewsPart(currentPart, partSize)
      // Отключить прелоадер когда отзывы пришли
      .then(() => props.setPreloader(false));
    props.setPreloader(true);
  };

  return (
    <section className={style.reviewsAboutUs} id="toReviewsScroll">
      <h1>Отзывы о нас:</h1>
      <div className={style.averagRating}>Средняя оценка: {averageRating}</div>
      <div className={style.reviewsWrapper}>
        {reviewPreloader ? (
          <Preloader message="Загрузка..." stylePosition="preloaderFlex" />
        ) : (
          reviews.map((review) => {
            return (
              <div key={review._id} className={style.review}>
                <div className={style.reviewHeader}>
                  {/* Если пользователь не ставит звезды при отправке отзыва, то не отображать их */}
                  {review.rate && (
                    <div className={style.rateReadOnly}>
                      <Rate disabled defaultValue={review.rate} />
                    </div>
                  )}
                  <div className={style.author}>{review.name}</div>
                  <div className={style.publicationDate}>{review.publicationDate}</div>
                </div>
                <div className={style.reviewContent}>{review.content}</div>
              </div>
            );
          })
        )}
      </div>
      <div className={style.reviewsPaginator}>
        {totalReviewsCount && (
          <Pagination
            total={totalReviewsCount}
            defaultCurrent={1}
            pageSize={revPartSize}
            showSizeChanger={false}
            onChange={onChangePaginator}
          />
        )}
      </div>
      <button
        type="button"
        className={style.addReviewBtn}
        // Показать форму для отзывов
        onClick={setShowReviewsForm}
        disabled={reviewPreloader}
      >
        Опубликоать отзыв
      </button>
    </section>
  );
};

export default ReviewsAboutUs;
