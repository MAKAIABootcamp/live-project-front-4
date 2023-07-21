import React from 'react'
import { Box, Button, ChakraProvider, Flex, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
const ModalPsicosocial = (
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
      <Modal isOpen={isModalOpen} onClose={handleModalClose} size='xl' bg='blue'>
        <ModalOverlay  />
        <ModalContent bg='#03203A'>
          <ModalHeader>
            <Flex justifyContent='space-between' alignItems='center' marginTop='10px' color='white'>
              <h2 >Apoyo Psicosocial</h2>
              <Text fontSize={16} >Obligatorio<Text color='red' as='span'> *</Text></Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                descripcion: '',
                situacion: ''
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
                            <FormLabel color='white'>Déjanos aquí una breve descripción de tu situación y el porqué está afectando tu proceso formativo en el Bootcamp <Text color='red' as='span'> *</Text></FormLabel>
                            <Input {...field} placeholder='Escriba su respuesta ' as="textarea" bg='white'/>
                            <FormErrorMessage>{form.errors.descripcion}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </li>
                    <li>
                      <Field name='situacion' validate={validateName}>
                        {({ field, form }) => (

                          <FormControl isInvalid={form.errors.situacion && form.touched.situacion}>
                            <FormLabel color='white'> ¿Cómo consideras que podemos apoyarte en esta situación? <Text color='red' as='span'> *</Text></FormLabel>
                            <Input {...field} placeholder='Escriba su respuesta' as="textarea"  bg='white'/>
                            <FormErrorMessage>{form.errors.situacion}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </li>
                  </ol>
                  <ModalFooter>
                    {/* Botones o acciones en el footer del modal */}
                    <Button variant="ghost" onClick={handleModalClose} bg='#25ABBC'>Cerrar</Button>
                    <Button variant="ghost"ml={3} isLoading={props.isSubmitting} type='submit' bg='#EEE420' color='#03203A'>Guardar</Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </ModalBody>

        </ModalContent>
      </Modal></div>
  )
}

export default ModalPsicosocial