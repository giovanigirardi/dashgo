import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Giovani Girardi</Text>
        <Text color="gray.300" fontSize="sm">
          giovanigg08@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Giovani Girardi"
        src="https://github.com/giovanigirardi.png"
      />
    </Flex>
  );
};

export { Profile };
