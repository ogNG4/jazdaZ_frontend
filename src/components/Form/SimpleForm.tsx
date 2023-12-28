import {FieldValues, FormProvider, UseFormProps, useForm} from 'react-hook-form';
import {Form, YStack} from 'tamagui';
import {PropsWithChildren, memo, useEffect} from 'react';
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

  const {handleSubmit, reset} = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <YStack space={'$4'}>{children}</YStack>
      </Form>
    </FormProvider>
  );
}

export default memo(SimpleForm);
