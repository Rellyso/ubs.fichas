import { Box, Flex, Text, Heading, Image, Divider, Grid, GridItem, Icon, SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BiTimeFive, BiCalendar } from 'react-icons/bi'
import { Header } from '../components/Header'
import { NextPeopleCard } from '../components/NextPeopleCard'
import { VideoBox } from '../components/VideoBox'

type Hour = {
  hours: string;
  minutes: string;
  seconds: string;
}

export default function Home() {
  const [date, setDate] = useState('');
  const [hour, setHour] = useState<Hour>({
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    setInterval(() => {
      const date = new Date();

      setHour({
        hours: `${('00' + date.getHours()).slice(-2)}`,
        minutes: `${('00' + date.getMinutes()).slice(-2)}`,
        seconds: `${('00' + date.getSeconds()).slice(-2)}`,
      })

      setDate(
        date.toLocaleDateString("pt-br", { timeZone: "America/Sao_Paulo" })
          .replace(', ', ' - ')
      )
    }, 1000)
  }, [])

  return (
    <Flex>
      <Box w="70vw" h="100vh">
        <Header bg="white">
          <Heading fontWeight="semibold" color="gray.900">Nome da UBS</Heading>
        </Header>

        <SimpleGrid h="calc(100vh - 110px)">
          <VideoBox
            src="https://www.youtube.com/embed/YoQHFloNPZ0"
          />

          <Flex
            as="footer"
            p="4"
            justify="space-between"
            position="relative"
          >
            <NextPeopleCard
              maxW="75%"
              awaitList={[
                { name: 'Antônio Carlos' },
                { name: 'Miranda Nascimento' },
                { name: 'Juliana Goes' },
                { name: 'Salvador Nascimento' },
                { name: 'Ana Cristina' },
              ]}
            />

            <Box
              m="4"
              align="center"
              alignSelf="center"
              justify="center"
            >
              <Flex
                align="center"
                justify="center"
              >
                <Icon as={BiTimeFive} fontSize="4xl" mr="2" />

                <Heading as="span" fontWeight="semibold">
                  {hour.hours}:{hour.minutes}:{hour.seconds}
                </Heading>
              </Flex>

              <Flex
                align="center"
                justify="center"
              >
                <Icon as={BiCalendar} fontSize="4xl" mr="2" />

                <Heading as="span" fontWeight="semibold">
                  {date}
                </Heading>
              </Flex>
            </Box>
          </Flex>
        </SimpleGrid>

      </Box>

      <Box
        as="aside"
        w="30vw"
        h="100vh"
      >
        <Header
          bg="#fff"
        >
          <Image
            align="center"
            src="https://www.prefeiturademossoro.com.br/assets/img/logo-prefeitura-mossoro-colorida.png"
            h="100%"
            py="2"
          />
        </Header>

        <Flex direction="column" pr="4">
          <Box
            w="100%"
            align="center"
            pt="8"
          >
            <Heading fontWeight="semibold" size="xl">Próximo - Sala 01</Heading>
            <Heading
              fontWeight="semibold"
              css={{
                fontSize: "90px !important",
              }}
            >
              Rellyson Douglas
            </Heading>
            <Heading fontWeight="medium"></Heading>
          </Box>

          <Divider my="4" size="4px" />

          <Box
            alignSelf="center"
            align="center"
            bgGradient="linear(to-b, #014F86 0%, #015189 55.21%, #32729E 100%)"
            h="full"
            // maxW="300px"
            borderRadius="xl"
            p="4"
          >
            <Heading
              size="md"
              color="blue.900"
              mt="2"
              px="8"
              py="2"
              borderRadius="full"
              bg="white"
              w="fit-content"
            >
              anteriores
            </Heading>

            <Grid templateColumns="repeat(2, 1fr)" gap={4} pt="4">
              <GridItem alignSelf="center">
                <Text>Nome</Text>
                <Heading>Rellyson Douglas</Heading>
              </GridItem>

              <GridItem
                alignSelf="center"
              >
                <Text
                  fontSize="3xl"
                >
                  Sala 01
                </Text>
                {/* HAZURA */}
              </GridItem>
            </Grid>

            <Divider my="4" size="4px" />

          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
