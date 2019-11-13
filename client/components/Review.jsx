import React from "React";
import styles from "./Review.css";
import Moment from "react-moment";
import StarsPerReview from "./StarsPerReview.jsx";

const Review = props => {
  return (
    <div className={styles.reviewItem}>
      <li className={styles.review}>
        <div className={styles.userphoto}>
          <a href={props.details.user_photo_url}>
            <img
              className={styles.userphoto}
              src={props.details.user_photo_url}
              alt={props.details.user_name}
            />
          </a>
        </div>
        <div className={styles.reviewNameDate}>
          <a href={props.details.user_photo_url} className={styles.profilename}>
            {props.details.user_name}
          </a>
          <div className={styles.reviewdate}>
            <Moment format="MMM Do, YYYY">{props.details.date}</Moment>
          </div>
        </div>
        <div className={styles.reviewstars}>
          <StarsPerReview rating={props.rating} />
        </div>
        <div className={styles.reviewdescription}>
          {props.details.description}
        </div>
        <div className={styles.productPictureBox}>
          <div className={styles.productPicture}>
            <a href={props.productPicture}>
              <img src={props.productPicture} alt={props.alttag} />
            </a>
          </div>
          <a href="#searchHeader" className={styles.productDescription}>
            {props.productDescription}
          </a>
        </div>
      </li>
      <br></br>
    </div>
  );
};

export default Review;
