import React from 'react'
import {  Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
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
      <Modal isOpen={isModalOpen} onClose={handleModalClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex justifyContent='space-between' alignItems='center' marginTop='10px'>
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
                    <li>
                      <Field name='diasInasistecias' validate={validateName}>
                        {({ field, form }) => (

                          <FormControl isInvalid={form.errors.diasInasistecias && form.touched.diasInasistecias}>
                            <FormLabel>Escribe el día o los días en los que no podrás conectarte <Text color='red' as='span'> *</Text></FormLabel>
                            <Input {...field} placeholder='Escriba su respuesta ' as="textarea" />
                            <FormErrorMessage>{form.errors.diasInasistecias}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </li>
                    <li>
                      <Field name='argumento' validate={validateName}>
                        {({ field, form }) => (

                          <FormControl isInvalid={form.errors.argumento && form.touched.argumento}>
                            <FormLabel>Argumenta<Text color='red' as='span'> *</Text></FormLabel>
                            <Input {...field} placeholder='Escriba su respuesta' as="textarea" />
                            <FormErrorMessage>{form.errors.argumento}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </li>
                  </ol>
                  <ModalFooter>
                    {/* Botones o acciones en el footer del modal */}
                    <Button variant="ghost" onClick={handleModalClose}>Cerrar</Button>
                    <Button colorScheme="blue" ml={3} isLoading={props.isSubmitting} type='submit'>Guardar</Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </ModalBody>

        </ModalContent>
      </Modal></div>
  )
}

export default ModalInasistencia