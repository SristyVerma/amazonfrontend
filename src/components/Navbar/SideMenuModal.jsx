import { Modal,Avatar,ModalHeader,Flex, ModalOverlay, ModalContent, ModalBody, VStack, Divider,Text, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React,{useContext} from "react";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom'
import {Logincontext} from '../../context/Contextprovider'
function CustomText(props) {
  return (
    <Text paddingLeft={'20px'} fontFamily="body" fontSize="md"  color='gray.900' _hover={{ bg: "gray.200" }} lineHeight="tall" {...props}>
      {props.children}
    </Text>
  );
}
export default function SideMenuModal({ onClose }) {

  const { account, setAccount } = useContext(Logincontext);
  return (
    <Modal isOpen onClose={onClose} size="xl"   >
      <ModalOverlay />
      <ModalContent position="absolute" top="0" left="0" bg='#fff' bottom="0" overflowY="auto" width="60%"  pr="4"  marginBottom={'0px'} marginTop={'-10%'}>
      <ModalHeader  color='#fff' w='100%' marginRight={'0px'} height='100%'> {account ? (
            <Avatar   name={account.fname[0].toUpperCase()} />
             
          
          ) : (
            <Avatar className="avtar" />
          )}</ModalHeader>
           <Divider  borderColor={'gray.500'}/>
        <ModalBody>
          <VStack align="stretch" spacing="4">
         <CustomText>
         {account ? <h3><strong>Hello,</strong> {account.fname.toUpperCase()}</h3> : ""}
         </CustomText>
            <Link to='/'><CustomText >Home</CustomText></Link>
            <Link to='/login'><CustomText >Login</CustomText></Link>
            
            <CustomText  display="flex" flexDirection="row" > <FaShoppingCart  />  {account ? (
              <Link to="/cart">
                <p>{account.carts.length}</p>
              </Link>
            ) : (
              <Link to="/login">
                <p style={{fontSize:'21px',fontWeight:'900',color:"red"}}>0</p>
              </Link>
            )}</CustomText>
        
            <CustomText fontWeight="bold">Categories</CustomText>
            <CustomText>Men</CustomText>
            <CustomText>Women</CustomText>
            <CustomText>Electronics</CustomText>
            <Divider borderColor={'gray.500'} />
            <CustomText fontWeight="bold">Top Categories </CustomText>
            <CustomText>Home & Kitchen</CustomText>
            <CustomText>Beauty</CustomText>
            <CustomText> Household Supplies</CustomText>
            
           
          </VStack>
        </ModalBody>
        
      </ModalContent>
      
      <IconButton
          icon={<CloseIcon />}
          aria-label="Close"
          position="absolute"
          top="0"
          right="0"
          onClick={onClose}
          m="2"
        bg='gray.100'
        color='whiteAlpha'
        />
        
    </Modal>
  );
}
