import React, { useEffect, useState } from 'react'
import KeyboardWithDissmis from '../../KeyboardWithDissmis/KeyboardWithDissmis';
import { Box,Input,FormControl,Button } from 'native-base';
import { useSelector } from 'react-redux';

function MyDataPersonalTab({visible}:any) {
  //@ts-ignore
  const userFullData = useSelector(state => state.profile.userFullData)
  //@ts-ignore
  const isLoading = useSelector(state => state.profile.isLoading)

  const [errorCi, setErrorCi] = useState({ClienteCi: ''});
  const [errorNom, setErrorNom] = useState({ClienteApeNom: '' });
  const [errorTel, setErrorTel] = useState({ClienteTel: ''});
  
  const [form, setForm] = useState({
    ClienteCi:'',
    ClienteApeNom:'',
    ClienteTel:'',
  })


  if (!userFullData.ClienteCi) {
    return <></>
  }

  useEffect(() => {

    const abortController = new AbortController()
 
    if (!isLoading) {
        console.log('effect personal tab')
        setForm({ ...userFullData })
    }
    
  }, [])


  const validate = () => {
   
    if (!form.ClienteCi) {
      setErrorCi({ ClienteCi: 'Cédula es requerida' })
    }else{
      setErrorCi({  ClienteCi: '' })
    }

    if (!form.ClienteApeNom) {
      setErrorNom({ ClienteApeNom: 'Nombre y Apellido es requerida' })
    }else{
      setErrorNom({ ClienteApeNom: '' })
    }

    if (!form.ClienteTel) {
      setErrorTel({ ClienteTel: 'Celular es requerido' })
    }else{
      setErrorTel({ ClienteTel: '' })
    }
    
  };


  const onSubmit = () => {
   
    validate()
  };

  
  return (
    <KeyboardWithDissmis>
      <Box w="100%" flex={1} p={4} >
        <FormControl  mt={2} isRequired isInvalid={errorCi.ClienteCi != ''}>
          <FormControl.Label _text={{bold: true}}>Cédula</FormControl.Label>
          <Input  variant="filled" placeholder="Cédula" value={form.ClienteCi} onChangeText={(text)=> setForm({ ...form,ClienteCi:text })} />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>{errorCi.ClienteCi}</FormControl.ErrorMessage>
        </FormControl>
        <FormControl  mt={2} isRequired isInvalid={errorNom.ClienteApeNom != ''}>
          <FormControl.Label _text={{bold: true}}>Nombre y Apellido</FormControl.Label>
          <Input  variant="filled" placeholder="Nombre y Apellido" value={form.ClienteApeNom} onChangeText={(text)=> setForm({ ...form,ClienteApeNom:text })} />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>{errorNom.ClienteApeNom}</FormControl.ErrorMessage>
        </FormControl>
        <FormControl   mt={2} isRequired isInvalid={errorTel.ClienteTel != ''}>
          <FormControl.Label _text={{bold: true}}>Celular</FormControl.Label>
          <Input  variant="filled"  keyboardType="numeric" placeholder="Celular" value={form.ClienteTel} onChangeText={(text)=> setForm({ ...form,ClienteTel:text })} />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>{errorTel.ClienteTel}</FormControl.ErrorMessage>
        </FormControl>
        <Button onPress={onSubmit} mt={5} colorScheme="cyan">
          Modificar
        </Button>
      </Box>
    </KeyboardWithDissmis>
  );
}


export default MyDataPersonalTab