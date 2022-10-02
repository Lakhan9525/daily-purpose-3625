import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div>
      <Link to="/pricing">
        <Button
          variant="ghost"
          width="4rem"
          borderRadius={5}
          _hover={{ bg: "none", color: "rgb(37,207,96)" }}
        >
          <Heading fontSize="md" color="gray.30">
            Pricing
          </Heading>
        </Button>
      </Link>
    </div>
  );
};

export default Pricing;
