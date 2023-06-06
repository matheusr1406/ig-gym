import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, VStack, SectionList } from "native-base";
import { useState } from "react";




export function History(){
    const [exercises, setExercises] = useState([
        {
          title: '26.08.22',
          data: ["Puxada frontal", "Remada unilateral"]
        },
        {
          title: '27.08.22',
          data: ["Puxada frontal"]
        }
      ]);
    return (
        <VStack flex={1} bg="gray.700">
            <ScreenHeader title="Histórico de exercicios" />
            <SectionList
            sections={exercises}
            keyExtractor={item => item}
            renderItem={({item})=> (<HistoryCard/>)}
            renderSectionHeader={({section})=> (
                <Heading color="gray.200" fontSize="md" mt={10} mb={3} ml={2}>
                    {section.title}
                </Heading>
            )}
            px={4}
            />
            
            
        </VStack>
    )
}