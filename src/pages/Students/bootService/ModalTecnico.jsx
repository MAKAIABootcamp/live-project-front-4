import React from 'react'
import {  Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import styled from 'styled-components';

const ListItem = styled.li`
  
  color: #25ABBC; 
  font-size: 20px; 
  font-weight:900 ;
 
`;

const ModalTecnico = (
  {
    isModalOpen,
    handleModalClose
  
  }
) => {

  const validateName = (value) => {
    let error
    if (!value) {
      error = 'La respuesta es requerida'
    }
    
    return error
  }
  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} size='xl'>
        <ModalOverlay />
        <ModalContent bg='#03203A'>
          <ModalHeader>
            <Flex justifyContent='space-between' alignItems='center' marginTop='10px'  color='#25ABBC' fontWeight={900} fontSize={30}>
              <h2>Apoyo Técnico</h2>
              <Text fontSize={16}>Obligatorio<Text color='red' as='span'> *</Text></Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={5} color='white' fontWeight={500} fontSize={20}>
            Recuerda que este espacio es para ayudarte a resolver preguntas o necesidades técnicas en el marco de tu proceso formativo
            </Text>
            <Formik
              initialValues={{
                descripcion: ''
               
              }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  actions.setSubmitting(false)
                }, 1000)
              }}
            >
              {(props) => (
                <Form>
                  <ol>
                    <ListItem>
                      <Field name='descripcion' validate={validateName}>
                        {({ field, form }) => (

                          <FormControl isInvalid={form.errors.descripcion && form.touched.descripcion}>
                            <FormLabel color='white'>Déjanos aquí tus preguntas técnicas o la descripción del tema que quieres resolver. <Text color='red' as='span'> *</Text></FormLabel>
                            <Input {...field} placeholder='Escriba su respuesta ' as="textarea" bg='white'/>
                            <FormErrorMessage color='#25ABBC'>{form.errors.descripcion}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </ListItem>
                  </ol>
                  <ModalFooter>
                    {/* Botones o acciones en el footer del modal */}
                    <Button variant="ghost" onClick={handleModalClose} bg='#25ABBC' color='#03203A' fontWeight={800}>Cerrar</Button>
                    <Button colorScheme="#EEE420" ml={3} isLoading={props.isSubmitting} type='submit' bg='#EEE420' color='#03203A'fontWeight={800}>Guardar</Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </ModalBody>

        </ModalContent>
      </Modal></div>
  )
}

export default ModalTecnico