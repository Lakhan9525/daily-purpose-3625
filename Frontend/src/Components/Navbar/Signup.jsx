import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = ({ width, height, fontSize }) => {
  return (
    <div>
      <Link to="/auth/register">
        <Button
          variant="solid"
          colorScheme="messenger"
          width={width}
          height={height}
          borderRadius={4}
        >
          <Heading fontSize={fontSize}>Start tracking time</Heading>
        </Button>
      </Link>
    </div>
  );
};

export default Signup;
