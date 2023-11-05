import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import nookies from "nookies";
import api from "../../utils/api";
function AuthLayout({ children }) {
  const router = useRouter();
  const cookies = nookies.get();
  useEffect(() => {
    let user = null;
    (async () => {
      if (cookies?.jwt) {
        const { data } = await api.get("/api/users/me", {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          },
        });
        console.log(data, "authlayout");
        data && (user = data);
      }
      try {
        if (!user) {
          toast.error("User not found!") && router.replace("/_signup");
        } else if (user?.hasPaid !== true) {
          toast.error("Invalid status!") && router.replace("/");
        } else if (user?.hasPaid === true) {
          router.replace(`/resource/${router.query.catergory}/specimens`);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div>
      <main>{children}</main>
    </div>
  );
}

export default AuthLayout;
