import { Stack } from "@chakra-ui/react";

import React from "react";
import DesktopNav from "./DesktopNav";
//import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <Stack>
      <DesktopNav />
      {/* <MobileNav /> */}
    </Stack>
  );
}
