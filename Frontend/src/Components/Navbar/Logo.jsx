import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ mt, ml }) => {
  return (
    <Box mt={mt} ml={ml}>
      <Link to="/">
        <Image
          src="	https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
          alt="Time Clamp Logo"
          width="126px"
          height="31px"
        />
      </Link>
    </Box>
  );
};

export default Logo;
