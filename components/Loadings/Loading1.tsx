import React from "react"
import { Spinner, HStack, Center, NativeBaseProvider } from "native-base"
import Colors from "../../constants/Colors"

export const Example = () => {
  return (
    <HStack space={3}>
      <Spinner size={60} color={Colors.blue400}  />
    </HStack>
  )
}

export default () => {
  return (
      <Center flex={1}>
        <Example />
      </Center>
  )
}
