import { Stack, Image, Text, Link, Box } from "@chakra-ui/react";
import React from "react";
import { Repo } from "../repos/types";

interface Props {
  repo: Repo;
}

const Card: React.FC<Props> = ({ repo }) => {
  return (
    <Stack
      direction="column"
      background="white"
      borderRadius={8}
      paddingY={8}
      paddingX={4}
      position="relative"
      width="360px"
      height="270px"
      borderWidth={1}
      borderColor="gray.200"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image
        left={0}
        top={0}
        marginLeft="43%"
        marginTop="-8%"
        src={repo.owner.avatar_url}
        borderRadius="50%"
        width={14}
        position="absolute"
      />
      <Link href={repo.html_url}>
        <Text fontSize="xl" fontWeight="bold">
          {repo.name}
        </Text>
      </Link>

      <Text fontSize="sm">{repo.description}</Text>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontSize="xs" fontWeight="bold">
            Stars: {repo.stargazers_count}
          </Text>
        </Box>
        <Box>
          <Text fontSize="xs" fontWeight="bold">
            Issues: {repo.open_issues_count}
          </Text>
        </Box>
      </Stack>
      <Box>
        <Text fontSize="xs">Submitted 30 days ago by @{repo.owner.login}</Text>
      </Box>
    </Stack>
  );
};

export default Card;
