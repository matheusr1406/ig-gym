import { Image, VStack } from "native-base";

import BackgroundIMG from '@assets/background.png'

export function Signin (){
    return (
        <VStack flex={1} bg="gray.700">
            <Image 
            source={BackgroundIMG}
            alt="foto home"
            />
        </VStack>
    )
}