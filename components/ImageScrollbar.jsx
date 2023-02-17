import {useContext} from 'react';
import Image from 'next/image';
import {Box, Icon, Flex} from "@chakra-ui/react"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaRegArrowAltCircleRight } from 'react-icons/fa';

// this is how to use react-horizontal-scrolling-menu
const LeftArrow = () => {
    const {scrollPrev} = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon 
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()} //this is how we call a function inside onClick
                fontSize="2xl"
                cursor="pointer"

            />
        </Flex>
    )
}

const RightArrow = () => {
    const {scrollNext} = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon 
                as={FaRegArrowAltCircleRight}
                onClick={() => scrollNext()} //this is how we call a function inside onClick
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    )
}
export default function ImageSrollbar({ data }) {
    return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
        {data.map((item) => (
          <Box width='910px' itemId={item.id} overflow='hidden' p='1'>
            <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
          </Box>
        ))}
      </ScrollMenu>
    );
  }