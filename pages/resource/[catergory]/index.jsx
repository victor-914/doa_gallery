import React, { useEffect, useState } from "react";
import AuthLayout from "../../../layouts/auth/AuthLayout";
import { useRouter } from "next/router";
import api, { fetcher } from "../../../utils/api";
import nookies from "nookies";
import { toast } from "react-toastify";
import Chapter from "../../../utils/Topics.array";

function Catergory() {
  // const router = useRouter();
  // const cookies = nookies.get();


  // useEffect(() => {
  //   (async () => {
  //     let user = null;
  //     if (cookies.jwt) {
  //       try {
  //         const { data } = await api.get("/api/users/me", {
  //           headers: {
  //             Authorization: `Bearer ${cookies.jwt}`,
  //           },
  //         });
  //         user = data;
  //         if (!user) {
  //           toast.error("User not found!") && router.replace("/_signup");
  //         } else if (user.hasPaid !== true) {
  //           router.replace("/") && toast.error("Invalid status!");
  //         } else if (user.hasPaid) {
  //           router.replace(`/resource/${router.query.catergory}/specimens`);
  //         }
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     } else {
  //       toast.error("login and  try again") && router.replace("/");
  //     }
  //   })();
  // }, []);

  return <></>;
}

export default Catergory;

export const getStaticProps = async () => {
  try {
    return {
      props: {},
    };
  } catch (err) {
    return { props: {} };
  }
};

export const getStaticPaths = async () => {
  try {
    const paths = Chapter.map((item) => ({
      params: {
        catergory: item.link,
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
    return {
      paths: [],
      fallback: false,
    };
  }
};
