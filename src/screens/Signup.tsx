import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

import BackgroundIMG from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Platform } from "react-native";
import {AuthNavigatorRoutesProps} from '@routes/auth.routes'
import { useNavigation } from "@react-navigation/native";

export function Signup() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleBackButton(){
    navigation.navigate('signIn')
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} >
    <VStack flex={1} bg="gray.700" px={10} pb={Platform.OS === 'ios' ? 40 : 16}>
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
          Crie sua conta
        </Heading>
        <Input placeholder="Nome"/>
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />

        <Button title="Criar" />
      </Center>

      <Center >

        <Button 
        title="voltar para login" 
        variant="outline" 
        onPress={handleBackButton}
        mt={24}
        />
      </Center>
    </VStack>
    </ScrollView>
  );
}
