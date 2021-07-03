import { Button, HStack, useToast, Avatar, VStack, Text,Badge,Box } from "native-base";
import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";


function ProfileHeader() {
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
          
          <Badge colorScheme="secondary" ml={1} rounded={10} position='absolute' top="0" right="0" zIndex={999}>
            10
          </Badge>
          </Avatar>
        </Box>


        <Text mt={2} fontSize="md" textAlign="center" fontWeight="bold" color={Colors.black300}>1- Sebastian Labadie </Text>

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
