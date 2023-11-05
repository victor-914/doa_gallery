import React from "react";
import ResourceLayout from "../../../../layouts/resourceLayout/ResourceLayout";
import PerModel from "../../../../components/gallery/PerModel";
import RootLayout from "../../../../layouts/RootLayout";
import api, { fetcher } from "../../../../utils/api";
import EmptyPage from "../../../../components/emptyPage/EmptyPage";

function SpecimenPage({ regions }) {
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
      {regions?.data?.attributes?.specimen?.data?.length === 0 ? (
        <EmptyPage />
      ) : (
        regions?.data?.attributes?.specimen?.data?.map((item) => (
          <PerModel item={item} key={item._id} />
        ))
      )}
    </div>
  );
}

SpecimenPage.getLayout = (page) => {
  return (
    <RootLayout>
      <ResourceLayout>{page}</ResourceLayout>
    </RootLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    console.log(params, "params!specimen/index");
    let catId = null;
    const catResponse = await api.get(
      `/api/regions?filters[title][$containsi]=${params.catergory}`
    );
    catResponse.status === 200
      ? (catId = catResponse?.data?.data[0]?.id)
      : (catId = null);

    if (catId !== null) {
      const mainRes = await api.get(
        `/api/regions/${catId}?populate[specimen][populate][img][fields][0]=name&populate[specimen][populate][img][fields][1]=url&populate[specimen][populate][subspecimen_positions][field][0]=title&populate[specimen][populate][subspecimen_positions][field][1]=img&populate[specimen][populate][subspecimen_positions][populate][img][fields][0]=name&populate[specimen][populate][subspecimen_positions][populate][img][fields][1]=url&populate[specimen][populate][subspecimen_positions][populate][labels][fields][0]=name&populate[specimen][populate][subspecimen_positions][populate][labels][populate][img][fields][0]=name&populate[specimen][populate][subspecimen_positions][populate][labels][populate][img][fields][1]=url&populate[specimen][populate][subspecimen_positions][populate][labels][populate][descriptions][fields][0]=title&populate[specimen][populate][subspecimen_positions][populate][labels][populate][descriptions][fields][1]=content`
      );
      const regions = mainRes?.data;
      return {
        props: {
          regions,
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
export default SpecimenPage;
