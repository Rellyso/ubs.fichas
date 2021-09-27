import { Flex, Heading, FlexProps } from '@chakra-ui/react';

export function Header({ children, ...rest }: FlexProps) {
  return (
    <Flex
      as="header"
      w="100%"
      h={85}
      align="center"
      justify="center"
      {...rest}
    >
      {children}
    </Flex>
  )
}