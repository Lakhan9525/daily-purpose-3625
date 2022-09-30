import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = ({ width, height, fontSize }) => {
  return (
    <div>
      <Link to="/auth/register">
        <Button
          variant="solid"
          bgColor="rgb(247,184,1)"
          color="white"
          width={width}
          height={height}
          borderRadius="30px"
          _hover={{ bgColor: "orange" }}
        >
          <Heading textAlign="center" fontSize={fontSize}>
            Start tracking time
          </Heading>
        </Button>
      </Link>
    </div>
  );
};

export default Signup;
