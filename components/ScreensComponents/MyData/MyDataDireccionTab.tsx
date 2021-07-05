import React, { useEffect, useState } from 'react'
import KeyboardWithDissmis from '../../KeyboardWithDissmis/KeyboardWithDissmis';
import { Box,Input,FormControl,Button } from 'native-base';
import { useSelector } from 'react-redux';

function MyDataDireccionTab({visible}:any) {
  //@ts-ignore
  const userFullData = useSelector(state => state.profile.userFullData)
    //@ts-ignore
    const isLoading = useSelector(state => state.profile.isLoading)

  const [errorUbicacion, setErrorUbicacion] = useState({CliCalUbicacion: ''});
  const [errorLocalidad, setErrorLocalidad] = useState({ClienteLocalidad: '' });
  const [errorPadron, setErrorPadron] = useState({ClientePadron: ''});
  const [errorCodMunicipal, setErrorCodMunicipal] = useState({ClienteCodMunicipal: ''});
  
  const [form, setForm] = useState({
    CliCalUbicacion:'',
    ClienteLocalidad:'',
    ClientePadron:'',
    ClienteCodMunicipal:'',
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
   
    if (!form.CliCalUbicacion) {
      setErrorUbicacion({ CliCalUbicacion: 'Ubicacion es requerida' })
    }else{
        setErrorUbicacion({  CliCalUbicacion: '' })
    }

    if (!form.ClienteLocalidad) {
      setErrorLocalidad({ ClienteLocalidad: 'Localidad es requerida' })
    }else{
      setErrorLocalidad({ ClienteLocalidad: '' })
    }

    if (!form.ClientePadron) {
      setErrorPadron({ ClientePadron: 'Padron es requerido' })
    }else{
      setErrorPadron({ ClientePadron: '' })
    }
    
    if (!form.ClienteCodMunicipal) {
        setErrorCodMunicipal({ ClienteCodMunicipal: 'Codigo Municipal es requerido' })
      }else{
        setErrorCodMunicipal({ ClienteCodMunicipal: '' })
      }
      
  };


  const onSubmit = () => {
   
    validate()
  };

  
  return (
    <KeyboardWithDissmis>
      <Box w="100%" flex={1} p={4} >
        <FormControl  mt={2} isRequired isInvalid={errorUbicacion.CliCalUbicacion != ''}>
          <FormControl.Label _text={{bold: true}}>Dirección</FormControl.Label>
          <Input  variant="filled" placeholder="Dirección" value={form.CliCalUbicacion} onChangeText={(text)=> setForm({ ...form,CliCalUbicacion:text })} />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>{errorUbicacion.CliCalUbicacion}</FormControl.ErrorMessage>
        </FormControl>
        <FormControl  mt={2} isRequired isInvalid={errorLocalidad.ClienteLocalidad != ''}>
          <FormControl.Label _text={{bold: true}}>Localidad</FormControl.Label>
          <Input  variant="filled" placeholder="Localidad" value={form.ClienteLocalidad} onChangeText={(text)=> setForm({ ...form,ClienteLocalidad:text })} />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>{errorLocalidad.ClienteLocalidad}</FormControl.ErrorMessage>
        </FormControl>
        <FormControl   mt={2} isRequired isInvalid={errorPadron.ClientePadron != ''}>
          <FormControl.Label _text={{bold: true}}>Padron</FormControl.Label>
          <Input  variant="filled"  keyboardType="numeric" placeholder="Padron" value={form.ClientePadron} onChangeText={(text)=> setForm({ ...form,ClientePadron:text })} />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>{errorPadron.ClientePadron}</FormControl.ErrorMessage>
        </FormControl>
        <FormControl   mt={2} isRequired isInvalid={errorCodMunicipal.ClienteCodMunicipal != ''}>
          <FormControl.Label _text={{bold: true}}>Código Municipal</FormControl.Label>
          <Input  variant="filled"  keyboardType="numeric" placeholder="Código Municipal" value={form.ClienteCodMunicipal} onChangeText={(text)=> setForm({ ...form,ClienteCodMunicipal:text })} />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>{errorCodMunicipal.ClienteCodMunicipal}</FormControl.ErrorMessage>
        </FormControl>
        <Button onPress={onSubmit} mt={5} colorScheme="cyan">
          Modificar
        </Button>
      </Box>
    </KeyboardWithDissmis>
  );
}


export default MyDataDireccionTab