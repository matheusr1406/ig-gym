import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export function Profile() {
  const [photoisloading, setPhotoIsLoading] = useState(false);
  return (
    <VStack flex={1} bg="gray.700">
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          {photoisloading ? (
            <Skeleton
              h={33}
              w={33}
              rounded="full"
              startColor="gray.400"
              endColor="gray.300"
            />
          ) : (
            <UserPhoto
              source={{ uri: "https://github.com/matheusr1406.png" }}
              alt="foto perfil"
              size={33}
            />
          )}
          <TouchableOpacity>
            <Text
              color="green.500"
              mt={2}
              fontFamily="bold"
              fontSize="md"
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Input placeholder="Nome" bg="gray.600" />
          <Input placeholder="mr140603@gmail.com" bg="gray.600" isDisabled />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.100" fontSize="md" mb={2}>
            Alterar senha
          </Heading>
          <Input
          placeholder="Senha antiga" 
          bg="gray.600" 
          secureTextEntry 
          />
          <Input 
          placeholder="Nova senha" 
          bg="gray.600" 
          secureTextEntry 
          />
          <Input
            placeholder="Confirme a nova senha"
            bg="gray.600"
            secureTextEntry
          />

          <Button title="Atualizar" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
