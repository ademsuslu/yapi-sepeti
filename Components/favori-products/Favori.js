import { Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import CartItem from "./CartItem";
import { Data } from "../Data";

export default function Favori() {
  return (
    <Wrap h={"fit-content"} mt="2 !important" justify={"center"}>
      <WrapItem h={"auto"} mx="5 !important" flexWrap="wrap">
        {Data.map((item, idx) => {
          return <CartItem item={item} key={idx} />;
        })}
      </WrapItem>
    </Wrap>
  );
}
