import React, { useEffect, useState } from 'react'
import KeyboardWithDissmis from '../../KeyboardWithDissmis/KeyboardWithDissmis';
import { Box,Input,FormControl,Button } from 'native-base';
import { useSelector } from 'react-redux';

function MyDataCuentaTab({visible}:any) {
  //@ts-ignore
  const userFullData = useSelector(state => state.profile.userFullData)
    //@ts-ignore
    const isLoading = useSelector(state => state.profile.isLoading)

  const [errorEmail, setErrorEmail] = useState({ClienteEmail: ''});
  const [errorPassword, setErrorPassword] = useState({ClientePassword: '' });
  
  const [form, setForm] = useState({
    ClienteEmail:'',
    ClientePassword:'',
  })


  if (!userFullData.ClienteCi) {
    return <></>
  }

  useEffect(() => {
 
    if (!isLoading) {
        console.log('effect direcion tab')
        setForm({ ...userFullData })
    }
   
  }, [])


  const validate = () => {
   
    if (!form.ClienteEmail) {
      setErrorEmail({ ClienteEmail: 'Email es requerido' })
    }else{
        setErrorEmail({  ClienteEmail: '' })
    }

    if (!form.ClientePassword) {
      setErrorPassword({ ClientePassword: 'Contraseña es requerida' })
    }else{
      setErrorPassword({ ClientePassword: '' })
    }

  };


  const onSubmit = () => {
    validate()
  };

  
  return (
    <KeyboardWithDissmis>
      <Box w="100%" flex={1} p={4} >
        <FormControl  mt={2} isRequired isInvalid={errorEmail.ClienteEmail != ''}>
          <FormControl.Label _text={{bold: true}}>Email</FormControl.Label>
          <Input  variant="filled" placeholder="Email" value={form.ClienteEmail} onChangeText={(text)=> setForm({ ...form,ClienteEmail:text })} />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>{errorEmail.ClienteEmail}</FormControl.ErrorMessage>
        </FormControl>
        <FormControl  mt={2} isRequired isInvalid={errorPassword.ClientePassword != ''}>
          <FormControl.Label _text={{bold: true}}>Contraseña</FormControl.Label>
          <Input  variant="filled" placeholder="Contraseña" value={form.ClientePassword} onChangeText={(text)=> setForm({ ...form,ClientePassword:text })} />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>{errorPassword.ClientePassword}</FormControl.ErrorMessage>
        </FormControl>
       
        <Button onPress={onSubmit} mt={5} colorScheme="cyan">
          Modificar
        </Button>
      </Box>
    </KeyboardWithDissmis>
  );
}


export default MyDataCuentaTab