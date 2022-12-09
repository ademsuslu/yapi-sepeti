import React from "react";
import { Box, Button, Center, Image, Flex, Text } from "@chakra-ui/react";
import { AiOutlineCaretDown } from "react-icons/ai";
import Stars from "./Stars";
export default function CartItem({ item }) {
  return (
    <Center w="240px" h="auto" p={"10"} m="1 !important">
      <Box
        mb={"1rem !important"}
        borderRadius={"8px"}
        w="lg"
        h={"sm"}
        p="2 !important"
        className="Cartıtem"
      >
        <Image
          width="240px"
          className="imageBox"
          border="1px"
          borderColor="gray.200"
          borderRadius={"8px"}
          h={"auto"}
          objectFit="cover"
          boxSize="auto"
          src={item.image}
          alt={item.info}
        />
        <Flex justify={"flex-start"} flexDirection={"column"}>
          <Text mt={"2"} fontSize="15px" fontWeight={"light"} as={"p"}>
            {item.info}
          </Text>
          <Flex>
            <Text size="sm">
              {item.price
                ? item.price
                : item.indirim.map((items, idx) => {
                    return (
                      <Box key={idx}>
                        <Flex justify={"start"}>
                          <Text color={"gray.400"} fontWeight="light" as="s">
                            {items.oldPrice}
                          </Text>
                          <Text
                            as={"p"}
                            mx={"1 !important"}
                            fontWeight={"bold"}
                            color="#439e4a"
                          >
                            <Text display={"flex"}>
                              {items.persond}
                              <AiOutlineCaretDown />{" "}
                            </Text>
                          </Text>{" "}
                        </Flex>
                        <Flex>
                          <Text
                            justify={"flex-start"}
                            fontWeight={"bold"}
                            color={"#439e4a"}
                          >
                            {items.indirimliPrice}
                          </Text>
                        </Flex>
                      </Box>
                    );
                  })}
            </Text>
          </Flex>
          <Box>
            <Stars className={"stars"} stars={4} reviewCount={16} />
            <Button
              onClick={() => alert("Henüz State manage edilmiyor! ")}
              size="md"
              mx="auto !important"
              mt="2px !important"
              padding={"0px 1rem !important"}
              w={"full"}
              _hover="none"
              className="btn-sepet"
              color="#fff"
              bgColor={"#FF6000"}
            >
              Sepete Ekle
            </Button>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
