import { CloseButton, CreditBox, CreditContainer, Header, LearnMoreButton, ModalContent, ModalWrapper, Tab, Tabs, ToggleContainer, ToggleSwitch } from "./styles";

export const Modal = ({ onClose }) => {
return (
  <ModalWrapper>
    <ModalContent>
      <Header>
        <span>GREEN SAVER</span>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Header>

      <Tabs>
        <Tab>Your Credits</Tab>
        <Tab>Dashboard</Tab>
      </Tabs>

      <CreditContainer>
        <CreditBox>
          22 <br /> Tokens
        </CreditBox>
        <CreditBox>
          2500 <br /> Credits
        </CreditBox>
      </CreditContainer>

      <ToggleContainer>
        <span>Efficiency Mode</span>
        <ToggleSwitch />
      </ToggleContainer>

      <p>Learn how to use your credits</p>
      <LearnMoreButton>Learn More</LearnMoreButton>
    </ModalContent>
  </ModalWrapper>
);
};

export default Modal;