import {
  CloseButton,
  Header,
  ModalContent,
  ModalWrapper,
  SlideContainer,
  Tab,
  Tabs,
} from './styles'

import { StatusSlider } from './Status/StatusSlider'

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
        <SlideContainer>
          <StatusSlider />
        </SlideContainer>
      </ModalContent>
    </ModalWrapper>
  )
}
export default Modal
