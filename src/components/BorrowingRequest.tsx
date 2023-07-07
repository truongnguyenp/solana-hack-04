import React, { useContext, useState } from 'react';
import {
  Button,
  FormControl,
  Input,
  useToast,
  FormLabel,
} from '@chakra-ui/react';
import { TopUpIcon } from './icons';
import Modal from './common/Modal';
import { TopupTxData } from '@elusiv/sdk';
import { useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { AppContext } from '@/contexts/AppProvider';

export default function BorrowingRequest({
  isBorrowingRequestodalVisible,
  toggleBorrowingRequestodalVisible,
}: {
  isBorrowingRequestodalVisible: boolean;
  toggleBorrowingRequestodalVisible: () => void;
}) {
  const {
    wallet: { elusiv },
  } = useContext(AppContext);
  const { signTransaction } = useWallet();
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState<number>();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAmount(e.target.value as unknown as number);
  const toast = useToast();

  return (
    <div>
      <Button
        isLoading={loading}
        leftIcon={<TopUpIcon />}
        colorScheme="purple"
        onClick={toggleBorrowingRequestodalVisible}
        className="w-[200px]"
      >
        Request
      </Button>
      <Modal
        loading={loading}
        isOpen={isBorrowingRequestodalVisible}
        actionLabel="Submit request"
        onClose={toggleBorrowingRequestodalVisible}
        modalLabel="Topup to Elusiv"
        onSubmit={() => {
          topup();
        }}
      >
        <FormControl isRequired>
          <FormLabel>NFT ID</FormLabel>
          <Input value={amount} onChange={handleInputChange}></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Receiving Account</FormLabel>
          <Input value={amount} onChange={handleInputChange}></Input>
        </FormControl>
      </Modal>
    </div>
  );
}
