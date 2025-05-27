import {
  BorderContainer,
  BottomContainer,
  CloseButton,
  Header,
  LearnMoreButton,
  ModalContent,
  ModalWrapper,
  SlideContainer,
  Tab,
  Tabs,
  TextContainerBottom,
} from './styles'

import DashboardSlider from './Dashboard/DashboardSlider'
import type { DashboardSliderProps } from './Dashboard/types'
import RedBullSponsor from './sponsorsblocks/RedbullSponsor'
import type { Sponsor } from '../common/sponsors'
import { StatusSlider } from './Status/StatusSlider'
import type { StatusSliderProps } from './Status/types'
import { sponsorColorMap } from '../common/sponsors'
import { useState } from 'react'

export interface ModalProps {
  onClose: () => void
  statusProps?: StatusSliderProps
  dashboardProps?: DashboardSliderProps
  defaultSection?: 'status' | 'dashboard'
  bottomText?: string
  learnMoreText?: string
}

export const Modal = ({
  onClose,
  statusProps,
  dashboardProps,
  bottomText = 'Start being part of something new',
  learnMoreText = 'Learn More',
  defaultSection = 'status',
}: ModalProps) => {
  const [activeSection, setActiveSection] = useState<'status' | 'dashboard'>(
    defaultSection
  )
  const [dashboardSwitchOn, setDashboardSwitchOn] = useState(false)
  const sponsor = statusProps?.sponsor ?? 'quanteec'
  const sponsorColor = sponsorColorMap[sponsor as Sponsor]

  return (
    <ModalWrapper>
      <BorderContainer $color={sponsorColor}>
        <ModalContent>
          <Header>
            <span>StreamBoost</span>
            <CloseButton onClick={onClose} />
          </Header>

          <Tabs>
            <Tab
              $color={sponsorColor}
              onClick={() => setActiveSection('status')}
              $active={activeSection === 'status'}
            >
              Status
            </Tab>
            <Tab
              $color={sponsorColor}
              onClick={() => setActiveSection('dashboard')}
              $active={activeSection === 'dashboard'}
            >
              Dashboard
            </Tab>
          </Tabs>

          <SlideContainer>
            {activeSection === 'status' && <StatusSlider {...statusProps} />}
            {activeSection === 'dashboard' && (
              <DashboardSlider
                {...dashboardProps}
                switchOn={dashboardSwitchOn}
                onSwitchToggle={() => setDashboardSwitchOn((v) => !v)}
              />
            )}
          </SlideContainer>
          {statusProps?.sponsor && statusProps.sponsor !== 'quanteec' && (
            <RedBullSponsor />
          )}

          <BottomContainer>
            <TextContainerBottom>{bottomText}</TextContainerBottom>
            <LearnMoreButton>{learnMoreText}</LearnMoreButton>
          </BottomContainer>
        </ModalContent>
      </BorderContainer>
    </ModalWrapper>
  )
}

export default Modal;
