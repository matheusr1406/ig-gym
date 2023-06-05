import { HomeHeader } from "@components/HomeHeader";
import { VStack } from "native-base";


export function Home() {
    return (
        <VStack flex={1} bg="gray.700">
            <HomeHeader/>
        </VStack>
    )
}