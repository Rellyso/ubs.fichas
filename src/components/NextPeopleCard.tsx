import { Box, BoxProps, Divider, Flex, Heading, Text } from "@chakra-ui/layout";

type NextPeopleProps = {
  awaitList: {
    name: string;
  }[]
} & BoxProps

export function NextPeopleCard({ awaitList, ...rest }: NextPeopleProps) {
  return (
    <Box
      alignSelf="center"
      align="center"
      bg="#014F86"
      minW="2xl"
      borderRadius="xl"
      overflow="hidden"
      position="relative"
      {...rest}
    >
      <Heading
        size="md"
        color="blue.900"
        flex="1/8"
        py="2"
        bg="white"
        w="100%"
      >
        Próximas
      </Heading>

      <Flex
        gap={4}
        h="40"
        p="2"
      >
        {awaitList.length > 0 && awaitList.map((item, i) => (
          <>
            <Box align="center" justify="center" alignSelf="center">
              <Text>Nome</Text>
              <Heading fontSize="3xl">{item.name}</Heading>
            </Box>

            {awaitList[i + 1]?.name && (
              <Divider orientation="vertical" mx="4" borderColor="blue.900" />
            )}
          </>
        ))}
      </Flex>
    </Box>
  )
}