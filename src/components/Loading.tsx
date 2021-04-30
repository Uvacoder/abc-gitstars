import { Grid, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react";
import _ from "lodash";
import React from "react";

const Loading: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",

        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
      }}
      paddingY={12}
      columnGap={4}
      rowGap={12}
    >
      {_.times(8, () => (
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
          <SkeletonCircle
            left={0}
            top={0}
            marginLeft="43%"
            marginTop="-8%"
            borderRadius="50%"
            width={14}
            height={14}
            position="absolute"
          />
          <Skeleton width={24} height={4}></Skeleton>

          <Skeleton width={24} height={2}></Skeleton>
          <Skeleton width={30} height={2}></Skeleton>
          <Skeleton width={30} height={2}></Skeleton>
          <Skeleton width={30} height={2}></Skeleton>
        </Stack>
      ))}
    </Grid>
  );
};

export default Loading;
