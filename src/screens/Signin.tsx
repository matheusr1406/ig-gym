import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

import BackgroundIMG from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import {AuthNavigatorRoutesProps} from '@routes/auth.routes'

export function Signin() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  
  function handleNewAccount(){
    navigation.navigate('signUp')
  }


  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
    <VStack flex={1} bg="gray.700" px={10}>
      <Image
        source={BackgroundIMG}
        defaultSource={BackgroundIMG}
        alt="foto home"
        resizeMode="contain"
        position="absolute"
      />
      <Center my={24}>
        <LogoSvg />
        <Text fontSize="sm" fontFamily="body" color="gray.100">
          Treine sua mente e corpo
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" mb={6} fontFamily="heading">
          Acesse sua conta
        </Heading>
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />

        <Button title="Acessar" />
      </Center>

      <Center mt={24}>
        <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
          Ainda não tem acesso?
        </Text>

        <Button 
        title="Criar conta" 
        variant="outline" 
        onPress={handleNewAccount}
        />
      </Center>
    </VStack>
    </ScrollView>
  );
}
