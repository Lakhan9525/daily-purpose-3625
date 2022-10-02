import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Bookademo = () => {
  return (
    <div>
      <Link to="/free-demo">
        <Button
          variant="ghost"
          width="4rem"
          borderRadius={5}
          _hover={{ bg: "none", color: "rgb(37,207,96)" }}
        >
          <Heading fontSize="md" color="gray.30">
            Book a Demo
          </Heading>
        </Button>
      </Link>
    </div>
  );
};

export default Bookademo;
