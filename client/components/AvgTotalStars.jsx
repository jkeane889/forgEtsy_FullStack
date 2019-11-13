import React from 'React';
import BlackStar from '../assets/icons/BlackStar.jsx';
import HalfStar from '../assets/icons/HalfStar.jsx';
import GreyStar from '../assets/icons/GreyStar.jsx';

const AvgTotalStars = (props) => {
    return (
        <div>
        {props.rating.map((star, index) => {
            if (star === 1) {
                return <BlackStar key={index}></BlackStar>
            } else if (star === 0.5) {
                return <HalfStar key={index}></HalfStar>
            } else if (star === 0) {
                return <GreyStar key={index}></GreyStar>
            }
            })} 
        </div>
    )
}

export default AvgTotalStars;