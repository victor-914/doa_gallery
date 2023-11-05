import React from "react";
import ModelPage from "../../../../components/gallery/ModelPage";
import { fetcher } from "../../../../utils/api";
function PerModel(props) {
 

  return <ModelPage model={props.specimen} />;
}

export default PerModel;

export const getStaticProps = async ({ params }) => {
  try {
    const response = await fetcher(
      `/api/specimens/${params.specsId}?populate[img][fields][0]=name&populate[img][fields][1]=url&populate[subspecimen_positions][field][0]=title&populate[subspecimen_positions][field][1]=img&populate[subspecimen_positions][populate][img][fields][0]=name&populate[subspecimen_positions][populate][img][fields][1]=url&populate[subspecimen_positions][populate][labels][fields][0]=name&populate[subspecimen_positions][populate][labels][populate][img][fields][0]=name&populate[subspecimen_positions][populate][labels][populate][img][fields][1]=url&populate[subspecimen_positions][populate][labels][populate][descriptions][fields][0]=title&populate[subspecimen_positions][populate][labels][populate][descriptions][fields][1]=content`
    );
    const specimen = response?.data;
    return {
      props: {
        specimen,
      },
    };
  } catch (err) {
    return { props: {} };
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
      paths,
      // paths: [],
      fallback: true,
    };
  }
};
