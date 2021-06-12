import React, { useState } from 'react'
import {StyleSheet,TextInput} from 'react-native'

function UnderlineIconInput(props:any) {
    const [isFocused, setIsFocused] = useState(false)
    const BLUE = "#428AF8";
    const LIGHT_GRAY = "#D3D3D3";

    
  const handleFocus = (e:any) => {
    setIsFocused(true);
  };

  const handleBlur = (e:any) => {
    setIsFocused(false);
  };

    return (
        <TextInput
        selectionColor={BLUE}
        underlineColorAndroid={
          isFocused ? BLUE : LIGHT_GRAY
        }
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    )
}


const styles = StyleSheet.create({
    
})
export default UnderlineIconInput