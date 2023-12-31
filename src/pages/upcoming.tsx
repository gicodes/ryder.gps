import { Button, Heading, Text, HStack, VStack } from "@chakra-ui/react";
import { alertService } from "@/components/alert/services";
import { useState } from "react";

const upcoming = () => {
  const [options, setOptions] = useState({
    autoClose: false,
    keepAfterRouteChange: false,
  });

  return (
    <>
      <Heading className="flex flex-1 text-gray-600 justify-center px-4 py-8 lg:px-8">
        Upcoming
      </Heading>
      <hr />
      <VStack mt={"10"}>
        <span
          onClick={() =>
            alertService.warn(
              "You are not subscribed yet!!",
              setOptions({ autoClose: true, keepAfterRouteChange: false })
            )
          }
        >
          Click to see upcoming rides and requests
        </span>
      </VStack>
    </>
  );
};

export default upcoming;
