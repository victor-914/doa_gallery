import React, { useState, useEffect } from "react";
import LectureComp from "../../../../components/lectures/LectureComp";
import ResourceLayout from "../../../../layouts/resourceLayout/ResourceLayout";
import RootLayout from "../../../../layouts/RootLayout";
import api from "../../../../utils/api";
import EmptyPage from "../../../../components/emptyPage/EmptyPage";
function VideoPage({ lectures }) {
  const [lecture, setLecture] = useState([]);
  useEffect(() => {
    setLecture(lectures?.data?.attributes?.lectures?.data);
    return () => {};
  }, [lectures]);

  return (
    <div
      style={{
        paddingTop: "40px",
        paddingBottom: "40px",
        width: "90%",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {lecture?.length !== 0 ? (
        lecture?.map((item) => <LectureComp data={item} />)
      ) : (
        <EmptyPage />
      )}
    </div>
  );
}

export default VideoPage;

VideoPage.getLayout = (page) => {
  return (
    <RootLayout>
      <ResourceLayout>{page}</ResourceLayout>
    </RootLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    console.log(params, "params!videos/index");
    let catId = null;
    const catResponse = await api.get(
      `/api/regions?filters[title][$containsi]=${params.catergory}`
    );
    catResponse.status === 200
      ? (catId = catResponse?.data?.data[0]?.id)
      : (catId = null);

    if (catId !== null) {
      const mainRes = await api.get(
        `/api/regions/${catId}?populate[lectures][fields][0]=*&pagination[pageSize]=10&pagination[page]=1`
      );
      const lectures = mainRes?.data;
      return {
        props: {
          lectures,
        },
      };
    } else {
      return {
        props: {},
      };
    }
  } catch (err) {
    return {
      props: {},
    };
  }
};

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
      paths: [],
      fallback: true,
    };
  }
};
