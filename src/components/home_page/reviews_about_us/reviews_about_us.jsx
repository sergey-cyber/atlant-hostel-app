import React from 'react';
import { Rate } from 'antd';
import style from './reviews_about_us.module.scss';
import Preloader from '../../general/preloader/preloader';
import { Pagination } from 'antd';

const ReviewsAboutUs = (props) => {

    const setShowReviewsForm = () => {
        props.setReviewsForm(true)
    }

    const onChangePaginator = (currentPart, partSize) => {
        //Отправляем запрос за частью отзывов при нажатии на пагинатор(текущая страница и размер страницы приходит автоматом из пагинатора)
        props.getReviewsPart(currentPart, partSize)
            //Отключить прелоадер когда отзывы пришли
            .then(() => props.setPreloader(false));
        props.setPreloader(true);
    }
    
    return (
        <section className={style.reviewsAboutUs} id='toReviewsScroll'>
            <h1>Отзывы о нас:</h1>
            <div className={style.averagRating}>Средняя оценка: {props.averageRating}</div>
            <div className={style.reviewsWrapper}>
              
                {props.reviewPreloader ? <Preloader message={'Загрузка...'} stylePosition={'preloaderFlex'} /> :
                 props.reviews.map((review) => {
                    return (
                        <div key={review._id} className={style.review}>
                            <div className={style.reviewHeader}>
                                {/* Если пользователь не ставит звезды при отправке отзыва, то не отображать их */} 
                                { review.rate && <div className={style.rateReadOnly}>
                                    <Rate disabled defaultValue={review.rate} />
                                </div> }
                                <div className={style.author}>
                                    {review.name}
                                </div>                                    
                                <div className={style.publicationDate}>
                                    {review.publicationDate}
                                </div>
                            </div>
                            <div className={style.reviewContent}>
                                {review.content}
                            </div>
                        </div>
                    )
                })}
                
            </div>
            <div className={style.reviewsPaginator} >
                <Pagination total={props.totalReviewsCount}
                    pageSize={props.revPartSize} showSizeChanger={false} onChange={onChangePaginator} />
            </div>
            <button 
                className={style.addReviewBtn} 
                //Показать форму для отзывов
                onClick={setShowReviewsForm} disabled={props.reviewPreloader} >
                Опубликоать отзыв
            </button>
        </section>
    )
}

export default ReviewsAboutUs;