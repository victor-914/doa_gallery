import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import styled from "styled-components";
import AuthLayout from "../auth/AuthLayout";
function ResourceLayout({ children }) {
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const router = useRouter();

  return (
    <StyledTabs>
      <Tabs
        sx={{
          width: "100%",
        }}
        value={value}
        onChange={handleChange}
        centered
        selected={value === 1}
      >
        <Tab
          value={1}
          label="Specimen"
          onClick={() =>
            router.push(`/resource/${router.query.catergory}/specimens`)
          }
        />
        <Tab
          selected={value === 2}
          label="Videos"
          value={2}
          onClick={() =>
            router.push(`/resource/${router.query.catergory}/videos`)
          }
        />
      </Tabs>
      <AuthLayout>{children}</AuthLayout>
    </StyledTabs>
  );
}

export default ResourceLayout;

const StyledTabs = styled.div`
  padding-top: 10px;
`;
