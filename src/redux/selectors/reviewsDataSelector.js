export const getReviews = (state) => {
    return state.reviewsData.reviews;
}

export const getAverageRaiting = (state) => {
    return state.reviewsData.averageRating;
}

export const getRevPartSize = (state) => {
    return state.reviewsData.revPartSize;
}

export const getTotalReviewsCount = (state) => {
    return state.reviewsData.totalReviewsCount;
}