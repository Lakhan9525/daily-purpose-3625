import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Signin = ({ name, mt, mr }) => {
  return (
    <div>
      <Link to="/auth/login">
        <Button
          variant="ghost"
          width="4rem"
          borderRadius={5}
          _hover={{ bg: "none", color: "rgb(37,207,96)" }}
          mt={mt}
          mr={mr}
        >
          <Heading fontSize="md" color="gray.30">
            {name}
          </Heading>
        </Button>
      </Link>
    </div>
  );
};

export default Signin;
