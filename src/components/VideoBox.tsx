import { Box, BoxProps } from "@chakra-ui/react";

type Props = {
  src: string;
} & BoxProps

export function VideoBox({ src, ...rest }: Props) {
  return (
    <Box
      as="main"
      maxH="70vh"
      position="relative"
      pt="6"
      px="4"
      {...rest}
    >
      <Box
        position="relative"
        w="100%"
        h="0"
        pb="56.25%"
        bg="blue.700"
        // opacity="0.4"
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
      >
        <Box
          as="iframe"
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
        </Box>
      </Box>
    </Box>
  )
}