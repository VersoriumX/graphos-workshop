import Spinner from '../components/Spinner';
import {Error} from './Error';
import {Heading, Image, SimpleGrid, Stack, Text} from '@chakra-ui/react';
import {gql, useQuery} from '@apollo/client';

//Create a GET_USER_ORDERS query here! 

export default function Orders() {
  // PARSE error, loading, and data for GET_USER_ORDERS here! Hint: useQuery
  
  // prettier-ignore
  const {firstName, lastName, email, address, activeCart, orders} = data.user || {};
  console.log(orders);
  return (
    <>
      {data && (
        <Stack direction="column" px="12" spacing="6" mb="12">
          <Stack direction="row" px="12" spacing="6" mb="12">
            <Image
              src="http://eimages.valtim.com/acme-images/product/m/h/mh02-black_main.jpg"
              alt={firstName}
              objectFit="cover"
              width="30%"
              height="auto"
              borderRadius="12"
            />
            <Stack direction="column" px="12" spacing="6" mb="12">
              <Heading as="h1" size="lg">
                {firstName + ' ' + lastName}
              </Heading>
              <Text fontWeight="regular" mr="1">
                {email}
              </Text>
              <Text fontWeight="regular" mr="1">
                {address}
              </Text>
            </Stack>
          </Stack>
          <Heading as="h1" size="lg">
            Active Cart
          </Heading>
          <SimpleGrid columns={[1, null, 2]} spacing={4}>
            {activeCart.items.map(item => (
              <Stack
                key={item.id}
                direction="column"
                px="12"
                spacing="3"
                mb="12"
              >
                <Heading as="h6" size="m">
                  {item.parent.name}
                </Heading>
                <Text fontWeight="regular" mr="1">
                  {'Color:' + item.colorway}
                </Text>
                <Text fontWeight="regular" mr="1">
                  {'Price:$' + item.price}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
          <Heading as="h3" size="m">
            {'Subtotal: $' + activeCart.subtotal}
          </Heading>
          <Heading as="h1" size="lg">
            Recent Orders
          </Heading>
          <SimpleGrid columns={[1, null, 2]} spacing={4}>
            {orders[orders.length - 1].items.map(item => (
              <Stack
                key={item.id}
                direction="column"
                px="12"
                spacing="6"
                mb="12"
              >
                <Heading as="h3" size="m">
                  {item.parent.name}
                </Heading>
                <Text fontWeight="regular" mr="1">
                  {'Price:$' + item.parent.price}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      )}
    </>
  );
}