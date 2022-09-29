import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Logo = ({ mt, ml }) => {
  return (
    <Box mt={mt} ml={ml}>
      <Image
        src="	https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
        alt="Time Clamp Logo"
        width="126px"
        height="31px"
      />
    </Box>
  );
};

export default Logo;
