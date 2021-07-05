import { Button, HStack, Avatar, VStack, Text,Badge,Box } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import Colors from "../../../constants/Colors";


function ProfileHeader() {
  //@ts-ignore
  const userData = useSelector(state => state.auth.userData)

  console.log(userData)
  return (
    <>
      <VStack w="100%" my={5}/*  borderColor="red" borderWidth={1} */>
        <Box  >
          <Avatar
            size="xl"
            source={{
              uri: "asdasd",
            }}
            alignSelf="center"
            position='relative'
          >
            SL
          
          <Badge  colorScheme="secondary" py={1} px={2} rounded={16} position='absolute' top="0" right="0" zIndex={999}>
            1
          </Badge>
          </Avatar>
        </Box>


        <Text mt={2} fontSize="md" textAlign="center" fontWeight="bold" color={Colors.black500}>
          {userData?.ClienteNro}- {userData?.ClienteNom} {userData?.ClienteApe}
        </Text>
        <Text mt={2} fontSize="md" textAlign="center" fontWeight="bold" color={Colors.black500}>
          {userData?.ClienteEmail}
        </Text>

        <HStack  mt={3} >
          <VStack w='33%' mt={3}>
            <Text fontSize="md" textAlign="center" fontWeight="bold" color={Colors.black300}>Recolecciónes</Text>
            <Text fontSize="sm" textAlign="center" fontWeight="bold">
              43434
            </Text>
          </VStack>
          <VStack w='33%' mt={3}>
            <Text fontSize="md" textAlign="center" fontWeight="bold" color={Colors.black300}>Promedio</Text>
            <Text fontSize="sm" textAlign="center" fontWeight="bold">
              23
            </Text>
          </VStack>
          <VStack  w='33%' mt={3}>
            <Text fontSize="md" textAlign="center" fontWeight="bold" color={Colors.black300}>Dinero Total</Text>
            <Text fontSize="sm" textAlign="center" fontWeight="bold">
              $3334
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
}

export default ProfileHeader;
