import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Button
        variant="ghost"
        width="4rem"
        borderRadius={5}
        _hover={{ bg: "none", color: "rgb(37,207,96)" }}
      >
        <Heading fontSize="md" color="gray.30">
          Blog
        </Heading>
      </Button>
    </div>
  );
};

export default Blog;
