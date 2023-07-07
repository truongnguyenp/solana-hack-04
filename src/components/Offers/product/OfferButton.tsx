import React, { useState } from 'react';
import { Button, Box } from '@chakra-ui/react';

const OfferButton = (props: any) => {
  return (
    <Box w="100%">
      {/* Add your card content here */}
      <Button
        colorScheme="teal"
        _hover={{ transform: 'scale(1.1)' }}
        transition="transform 0.2s"
        onClick={props.handleOpenModal}
        position="absolute"
        bottom="4"
        w="86%"
      >
        Request for offer
      </Button>
    </Box>
  );
};

export default OfferButton;
