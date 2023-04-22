import React from 'react'
import { Button,Image,VStack,Text } from '@chakra-ui/react';
export const Card = ({amount, checkoutHandler,img}) => {
  return (
    <VStack>
        <Image src={img} boxSize={"300"} objectFit={"cover"}/>
        <Text>${amount}</Text>
        <Button onClick={()=> checkoutHandler(amount)}>Buy Now</Button>

        
    </VStack>
  )
}
export default Card;
