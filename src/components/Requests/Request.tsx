import { finalizeRequest } from '@/api/server';
import { REQUEST_STATUS, Request as RequestType } from '@/types';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useMutation } from 'react-query';

interface Props {
  request: RequestType;
  acceptRequestAction: () => void;
}
export default function Request({ request, acceptRequestAction }: Props) {
  const toast = useToast();
  const { mutate: acceptRequest } = useMutation(finalizeRequest, {
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Request accepted',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    },
  });
  return (
    <div>
      <Card _active={true}>
        <CardHeader>
          <Heading size="md">Request</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {request.owner.email}
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                OwnerId
              </Heading>
              <Text pt="2" fontSize="sm">
                {request.NftId}
              </Text>
            </Box>
            {request.status !== REQUEST_STATUS.PROCESSING && (
              <>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Status
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {request.status === REQUEST_STATUS.COMPLETE ? (
                      <>
                        Accepted <CheckIcon />
                      </>
                    ) : (
                      <>
                        Rejected <CloseIcon />
                      </>
                    )}
                  </Text>
                </Box>
              </>
            )}
            {request.status === REQUEST_STATUS.PROCESSING && (
              <Button
                colorScheme="green"
                disabled={request.status === REQUEST_STATUS.PROCESSING}
                onClick={() => {
                  acceptRequest({
                    id: request.id,
                  });
                  acceptRequestAction();
                }}
              >
                Accept
              </Button>
            )}
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}
