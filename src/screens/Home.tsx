import { Center, Text, VStack } from "native-base";


export function Home() {
    return (
        <VStack flex={1} bg="gray.700">
        <Center my={24}>
            <Text color="white"> Home</Text>
        </Center>
        </VStack>
    )
}