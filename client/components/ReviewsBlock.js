import React from "React";
import Review from "./Review.jsx";
import styles from "./ReviewsBlock.css";
import AvgTotalStars from "./AvgTotalStars.jsx";

const ReviewsBlock = props => {
  return (
    <div>
      <div className={styles.reviewsblock}>
        <h1 className={styles.reviewsblocktitle}>Reviews</h1>
        <div className={styles.reviewsblockStars}>
          <AvgTotalStars
            className={styles.stars}
            randomInt={props.randomInt}
            reviews={props.reviews}
            rating={props.rating}
          />
        </div>
        <h1 className={styles.reviewsCount}>{"(" + props.reviewCount + ")"}</h1>
      </div>
      <div>
        <ul>
          {props.reviews.map(review => {
            return (
              <Review
                key={review.review_id}
                alttag={review.review_id}
                productDescription={props.productDescription}
                productPicture={props.productPicture}
                rating={review.rating}
                details={review}
                refreshPage={props.refreshPage}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ReviewsBlock;
