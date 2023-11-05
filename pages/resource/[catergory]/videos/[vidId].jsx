import React, { useState } from "react";
import styled from "styled-components";
import api from "../../../../utils/api";
function Embed({ data }) {
  // console.log(data, "embed",data.data,"embedded");
  const [iframeUrl, setIframeUrl] = useState(data?.attributes?.embeddedYt_url);
  return (
    <StyledEmbed>
      <header
       className="embedHeader"
        style={{
          padding: "10px",
        }}
      >
        {data?.data?.attributes?.topic}
      </header>

      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${data?.data?.attributes?.embeddedYt_url}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </StyledEmbed>
  );
}

export default Embed;

export const getStaticPaths = async () => {
  try {
    const paths = [];
    return {
      paths,
      fallback: true,
    };
  } catch (err) {
    console.log(err);
    return {
      paths,
      // paths: [],
      fallback: true,
    };
  }
};

export async function getStaticProps({ params }) {
  console.log(params);
  let data = await api.get(`/api/lectures/${params.vidId}?populate=*`);
  data = data?.data;
  console.log(data, "vidId");
  return { props: { data } };
}

const StyledEmbed = styled.section`
   
   .embedHeader{
    font-size: 20px;
    width: 100%;
    text-align: center;
   }




  width: 95%;
  height: 100vh;
  /* padding-top: 20vh; */
  padding: 10vh 0px 100px 0px;
  margin: auto;
`;
