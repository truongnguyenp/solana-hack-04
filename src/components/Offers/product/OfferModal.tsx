import React from 'react';
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';

const OfferModal = (props: any) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.handleCloseModal}>
      <ModalOverlay />
      <ModalContent>
        {/* Add your modal content here */}
      </ModalContent>
    </Modal>
  );
};

export default OfferModal;
