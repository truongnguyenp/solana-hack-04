import { Button, Text } from '@chakra-ui/react';
import Offer from './Offers/Offer';

import { OFFERS } from '@/constants';

const Offers = () => {
  return (
      <>
        {OFFERS.map((offer: any) => (
          <Offer key={offer.id} offer={offer} />
        ))}
        <h1>Dung bug nx</h1>
      </>
  );
};

export default Offers;
