import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, Skeleton, Text, VStack } from "native-base";
import { useState } from "react";

export function Profile() {
    const [photoisloading, setPhotoIsLoading] = useState(false);
  return (
    <VStack flex={1} bg="gray.700">
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          { photoisloading ? 
            <Skeleton
            h={33}
            w={33}
            rounded="full"
            startColor="gray.400"
            endColor="gray.300"
          />
          :
          <UserPhoto
            source={{ uri: "https://github.com/matheusr1406.png" }}
            alt="foto perfil"
            size={33}
          />}
        </Center>
      </ScrollView>
    </VStack>
  );
}
