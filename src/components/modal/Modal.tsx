import {
  CloseButton,
  Header,
  ModalContent,
  ModalWrapper,
  SlideContainer,
  Tab,
  Tabs,
} from "./styles";

import DashboardSlider from './Dashboard/DashboardSlider'
import type { DashboardSliderProps } from './Dashboard/types'
import { StatusSlider } from './Status/StatusSlider'
import type { StatusSliderProps } from './Status/types'
import { useState } from 'react'

export interface ModalProps {
  onClose: () => void
  statusProps?: StatusSliderProps
  dashboardProps?: DashboardSliderProps
  defaultSection?: 'status' | 'dashboard'
}

export const Modal = ({
  onClose,
  statusProps,
  dashboardProps,
  defaultSection = 'status',
}: ModalProps) => {
  const [activeSection, setActiveSection] = useState<'status' | 'dashboard'>(
    defaultSection
  )

  return (
    <ModalWrapper>
      <ModalContent>
        <Header>
          <span>BOOST PANEL</span>
          <CloseButton onClick={onClose} />
        </Header>

        <Tabs>
          <Tab
            onClick={() => setActiveSection('status')}
            $active={activeSection === 'status'}
          >
            Status
          </Tab>
          <Tab
            onClick={() => setActiveSection('dashboard')}
            $active={activeSection === 'dashboard'}
          >
            Dashboard
          </Tab>
        </Tabs>

        <SlideContainer>
          {activeSection === 'status' && <StatusSlider {...statusProps} />}
          {activeSection === 'dashboard' && (
            <DashboardSlider {...dashboardProps} />
          )}
        </SlideContainer>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal;
