import React from 'react'
import { Box, Button, ChakraProvider, Flex, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
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
        <ModalContent>
          <ModalHeader>
            <Flex justifyContent='space-between' alignItems='center' marginTop='10px'>
              <h2>Apoyo Técnico</h2>
              <Text fontSize={16}>Obligatorio<Text color='red' as='span'> *</Text></Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={5}>
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
                    <li>
                      <Field name='descripcion' validate={validateName}>
                        {({ field, form }) => (

                          <FormControl isInvalid={form.errors.descripcion && form.touched.descripcion}>
                            <FormLabel>Déjanos aquí tus preguntas técnicas o la descripción del tema que quieres resolver. <Text color='red' as='span'> *</Text></FormLabel>
                            <Input {...field} placeholder='Escriba su respuesta ' as="textarea" />
                            <FormErrorMessage>{form.errors.descripcion}</FormErrorMessage>
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

export default ModalTecnico