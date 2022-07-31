import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Giovani Girardi</Text>
          <Text color="gray.300" fontSize="sm">
            giovanigg08@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Giovani Girardi"
        src="https://github.com/giovanigirardi.png"
      />
    </Flex>
  );
};

export { Profile };
