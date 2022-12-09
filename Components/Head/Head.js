import { Card, CardBody, Image } from "@chakra-ui/react";
import React from "react";

export default function Head() {
  return (
    <Card borderRadius={"md"} w="100%">
      <CardBody m="15px !important">
        <Image
          borderRadius={"md"}
          w="100%"
          objectFit={"cover"}
          src="https://www.yapisepeti.com.tr/assets/img/special-slider/web/1180x440_web_haftaninfavoriurunleri.webp"
        />
      </CardBody>
    </Card>
  );
}
