import { CloseOutlined } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';
import ReviewsForm from './reviews_form';
import style from './reviews_form.module.scss';
import {setReviewsForm, postNewReview} from '../../../redux/reviews-data-reducer';

const ReviewsFormContainer = ({showReviewsForm, setReviewsForm, postNewReview}) => {

    const closeReviewsForm = () => {
        setReviewsForm(false)
    }

    if(showReviewsForm) {
        return (
            <div className={style.reviewsFormWrapper}>
                <ReviewsForm setReviewsForm={setReviewsForm} postNewReview={postNewReview} />
                <div className={style.closeReviewsForm} onClick={closeReviewsForm} >
                    <CloseOutlined />
                </div>
            </div>
        )
    } 
    return <></>
    
}

const mapStateToProps = (state) => {
    return {
        showReviewsForm: state.reviewsData.showReviewsForm
    }
}

export default connect(mapStateToProps, { setReviewsForm, postNewReview })(ReviewsFormContainer);
