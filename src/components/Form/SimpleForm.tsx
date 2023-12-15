import {FieldValues, FormProvider, SubmitHandler, UseFormProps, useForm} from 'react-hook-form';
import {Button, Form, YStack} from 'tamagui';
import {PropsWithChildren, memo} from 'react';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

interface SimpleFormProps<T extends FieldValues> {
  onSubmit: any;
  validationSchema?: Yup.ObjectSchema<any>;
}

function SimpleForm<T extends FieldValues>({
  children,
  onSubmit,
  defaultValues,
  validationSchema,
}: PropsWithChildren<SimpleFormProps<T>> & UseFormProps<T>) {
  const methods = useForm({
    defaultValues,
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
  });

  const {handleSubmit} = methods;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <YStack space={'$4'}>{children}</YStack>
      </Form>
    </FormProvider>
  );
}

export default memo(SimpleForm);
