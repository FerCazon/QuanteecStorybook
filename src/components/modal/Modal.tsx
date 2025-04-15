import {
  BottomPartContainer,
  BottomPartTextContainer,
  CloseButton,
  CreditBox,
  CreditContainer,
  Header,
  LearnMoreButton,
  ModalContent,
  ModalWrapper,
  Tab,
  Tabs,
  ToggleContainer,
  ToggleSwitch,
} from './styles'

export const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <Header>
          <span>GREEN SAVER</span>
          <CloseButton onClick={onClose}>×</CloseButton>
        </Header>

        <Tabs>
          <Tab>Status</Tab>
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
        <BottomPartContainer>
          <BottomPartTextContainer>
            <p>Learn how to use your credits</p>
          </BottomPartTextContainer>

          <LearnMoreButton>Learn More</LearnMoreButton>
        </BottomPartContainer>
      </ModalContent>
    </ModalWrapper>
  )
}
export default Modal
