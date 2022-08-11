import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import { useGetSingleCompanyQuery } from "../state/services/companiesApi";
import { useGetReviewsQuery } from "../state/services/reviewsApi";

const initialState = {
  name: "",
  content: "",
  rating: 0,
  company_id: 0,
};

export const CompanyDetailsPage: React.FC = (): any => {
  const { id } = useParams();
  const { data: content, isFetching: contentFetching } =
    useGetSingleCompanyQuery(id);
  const { data: reviewsContent, isFetching: reviewFetching } =
    useGetReviewsQuery(id);

  const [addReview, setReview] = useState(initialState);

  if (contentFetching || reviewFetching) return "Loading...";
  const { company } = content.data;
  const { reviews } = reviewsContent.data;
  console.log(reviews);

  const handleChange = (e: any) => {
    setReview({
      ...company,
      company_id: id,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if(addReview.name.length > 2) {
              
    }
    else {
      console.log("name is too short")
    }
  }

  return (
    <div>
      <h1>{company.name}</h1>
      <h2>{company.location}</h2>
      <div>
        {reviews.map((review: any) => (
          <Reviews review={review} key={review.id} />
        ))}
      </div>

      <h2>New review</h2>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" />
        <input onChange={handleChange} type="text" name="content" />
        <select onChange={handleChange} name="rating" id="">
        <option value="">Rate</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
      </form>
    </div>
  );
};
