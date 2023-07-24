import React from 'react'
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';

const ListItem = styled.li`
  
  color: #25ABBC; 
  font-size: 20px; 
  font-weight:900 ;
 
`;
const ModalInasistencia = (
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
      <ChakraProvider>
        <Modal isOpen={isModalOpen} onClose={handleModalClose} size='xl'>
          <ModalOverlay />
          <ModalContent bg='#03203A'>
            <ModalHeader>
              <Flex justifyContent='space-between' alignItems='center' marginTop='10px' color='#25ABBC' fontWeight={900} fontSize={30}  >
                <h2>Reporte de inasistencia</h2>
                <Text fontSize={16}>Obligatorio<Text color='red' as='span'> *</Text></Text>
              </Flex>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Formik
                initialValues={{
                  diasInasistecias: '',
                  argumento: ''
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
                      <ListItem >
                        <Field name='diasInasistecias' validate={validateName}>
                          {({ field, form }) => (

                            <FormControl isInvalid={form.errors.diasInasistecias && form.touched.diasInasistecias}>
                              <FormLabel color='white'>Escribe el día o los días en los que no podrás conectarte <Text color='red' as='span'> *</Text></FormLabel>
                              <Input {...field} placeholder='Escriba su respuesta ' as="textarea" bg='white' color='#03203A' />
                              <FormErrorMessage color='#25ABBC'>{form.errors.diasInasistecias}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </ListItem >
                      <ListItem >
                        <Field name='argumento' validate={validateName}>
                          {({ field, form }) => (

                            <FormControl isInvalid={form.errors.argumento && form.touched.argumento}>
                              <FormLabel color='white'>Argumenta<Text color='red' as='span'> *</Text></FormLabel>
                              <Input {...field} placeholder='Escriba su respuesta' as="textarea" bg='white' color='#03203A' border='none' />
                              <FormErrorMessage color='#25ABBC'>{form.errors.argumento}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </ListItem >
                    </ol>
                    <ModalFooter>
                      {/* Botones o acciones en el footer del modal */}
                      <Button variant="ghost" onClick={handleModalClose} bg='#25ABBC' color='#03203A' fontWeight={800}>Cerrar</Button>
                      <Button colorScheme="#EEE420" ml={3} isLoading={props.isSubmitting} type='submit' bg='#EEE420' color='#03203A' fontWeight={800}>Guardar</Button>
                    </ModalFooter>
                  </Form>
                )}
              </Formik>
            </ModalBody>

          </ModalContent>
        </Modal>
      </ChakraProvider>
    </div>

  )
}

export default ModalInasistencia