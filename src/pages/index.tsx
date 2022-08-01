import { Flex, Button, Stack } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../components/Form/Input";

interface SignInFormData {
  email: string;
  password: string;
}

const SignInFormSchema = yup.object().shape({
  email: yup.string().email("E-mail obrigatório").required("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(SignInFormSchema),
  });

  const handleSignIn = handleSubmit(async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  });

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSignIn}
      >
        <Stack spacing="4">
          <Input
            label="E-mail"
            type="email"
            error={errors.email}
            {...register("email")}
          />
          <Input
            label="Senha"
            type="password"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
