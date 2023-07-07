import React, { useState } from 'react';

import Pic from './product/Pic';
import TextOffer from './product/TextOffer';
import OfferButton from './product/OfferButton';
import OfferModal from './product/OfferModal';

// import { Text } from '@chakra-ui/react';
import Profile from './profile/Profile';

// import "./Offer.css";

const Offer = ({ offer }: any) => {
  // Moved these lines inside the Offer component
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  // End of moved lines

  return (
    <div className="frame h-[624px] relative">
      <Profile userImg={offer.userImg} userName={offer.userName} />
      <Pic source={offer.nftCollectionImg} />
      <TextOffer
        title={offer.title}
        nftCollectionName={offer.nftCollectionName}
        maximumLending={offer.maximumLending}
        interestRate={offer.interestRate}
      />

      <OfferButton handleOpenModal={handleOpenModal} />
      <OfferModal isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default Offer;
