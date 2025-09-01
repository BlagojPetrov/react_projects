import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Button,
} from "@chakra-ui/react";

export default function TransactionForm({ onClose, isOpen }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <FormControl mb={4}>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter transaction description"
                name="description"
                type="text"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter transaction amount"
                name="amount"
                type="number"
              />
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel as="legend">Transaction Type</FormLabel>
              <RadioGroup name="type">
                <HStack spacing={4}>
                  <Radio value="income" colorScheme="blue">
                    Income
                  </Radio>
                  <Radio value="expense" colorScheme="red">
                    Expense
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Add</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
