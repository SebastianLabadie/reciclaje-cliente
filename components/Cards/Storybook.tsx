import React from "react";
import { Box, Center, Icon, Text,HStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import {AntDesign} from '@expo/vector-icons'
export function StoryBook({  navigateTo,bgColor,tag,description,icon }: any) {
  const navigation = useNavigation();
console.log('navigateTo; '+navigateTo)
  const handlePress=()=>{
    console.log('evento')
    navigation.navigate(`${navigateTo}`)
  }

  return (
    <Box
      minH={150}
      rounded={14}
      w="48%"
      backgroundColor={bgColor}
      shadow={2}
      p={3}
      overflow="hidden"
      mt={3}
      onTouchStart={handlePress}
    
    >
      <Center
        w="12"
        h="12"
        mt={3}
        rounded={14}
        backgroundColor={Colors.black50}
        shadow={2}

      >
      {icon}
      </Center>

      <Text mt={2} color={Colors.black400} fontWeight="bold" opacity={0.45} fontSize={14} >{tag}</Text>

      <Box mt={3} flexDirection="row" alignItems='center'  w="100%">
        <Text  w="80%" color={Colors.black600} fontWeight={"bold"} opacity={0.65} >{description}</Text>
        <Icon  size={6} as={<AntDesign  name="arrowright" />} />   
      </Box>
    </Box>
  );
}
