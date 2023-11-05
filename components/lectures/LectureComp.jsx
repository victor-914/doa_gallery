import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
function LectureComp({ data }) {
  console.log(data, "lectureComp");
  const router = useRouter();
  return (
    <StyledLectureCard>
      <div className="lecture-card-header">
        <DateComponent date={data?.attributes?.publishedAt} type="published" />
      </div>
      <div className="lecture-card-content">
        <div className="lecture-info">
          <span>Lecture Title:</span> {"  "} {data?.attributes?.topic}I
        </div>

        <div className="lecture-info">
          <span>Lecturer Name:</span> {"  "}
          {data?.attributes?.author}
        </div>
        <div
          onClick={() =>
            router.push(`/resource/${router.query.catergory}/videos/${data?.id}`)
          }
          className="lecture-card-footer"
        >
          View Resource
        </div>
      </div>
    </StyledLectureCard>
  );
}

export default LectureComp;

const StyledLectureCard = styled.section`
  font-size: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  width: 20%;

  .lecture-card-header {
    background-color: #096c3a;
    color: #fff;
    padding: 15px;
    text-align: center;
  }
  .lecture-card-footer {
    background-color: #096c3a;
    color: #fff;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
  }

  .lecture-card-footer:hover {
    background-color: green;
    cursor: pointer;
  }

  .lecture-card-content {
    padding: 10px;
  }

  .lecture-info {
    margin-bottom: 15px;
    width: 100%;
  }

  .lecture-info span {
    font-weight: bold;
  }

  .lecture-date {
    font-style: italic;
    color: #888;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 20px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
  }

  @media (min-width: 992px) and (max-width: 1199px) {
  }

  @media (min-width: 1200px) {
  }
`;
const DateContainer = styled.div`
  font-size: 1rem;
  color: #fff;
  padding: 7px;
`;

export const DateComponent = ({ date, type }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <DateContainer>
      {type === "published" ? "Published" : "Updated"} on {formattedDate}
    </DateContainer>
  );
};
