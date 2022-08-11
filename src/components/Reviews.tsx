import StarRating from "./StarRating"

export const Reviews = ({review}:any) => {
  return (
    <div>
        <h2>{review.name}</h2>
        <p>{review.content}</p>
        <div>
            <StarRating rating={review.rating}/>
        </div>
    </div>
  )
}

export default Reviews