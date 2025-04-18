import {
  Card,
  ConnectedContainer,
  DashboardWrapper,
  Dot,
  DotColumn,
  ImageContainer,
  InfoContainer,
  Label,
  LeftContainer,
  LiteSwitchContainer,
  LiteTitle,
  ProgressBar,
  ProgressFill,
  RadioIcon,
  Subtitle,
  SwitchDot,
  SwitchWrapper,
  Value,
} from './styles'

import { DashboardSliderProps } from './types'
import { useState } from 'react'

const DashboardSlider = ({
  connected = 28,
  sharedData = 80,
  energySaved = 45,
  defaultRadioOn = false,
  contributorsLabel = 'Contributors',
  dataLabel = 'Data',
  energyLabel = 'Energy',
  liteLabel = 'Lite',
  boostLabel = 'Boost',
}: DashboardSliderProps) => {
  const [radioOn, setRadioOn] = useState(defaultRadioOn)

  return (
    <DashboardWrapper>
      <Card>
        <InfoContainer>
          <ConnectedContainer>
            <Value>{connected}</Value>
            <Subtitle>Connected</Subtitle>
          </ConnectedContainer>
          <Label>
            <ImageContainer>
              <img
                src="/images/icons/Contributors.png"
                alt="contributors"
                width={16}
                height={10}
              />
            </ImageContainer>
            {contributorsLabel}
          </Label>
        </InfoContainer>
      </Card>

      <Card>
        <LeftContainer>
          <InfoContainer>
            <Value>{sharedData}</Value>
            <Subtitle>MB shared</Subtitle>
          </InfoContainer>
          <Label>
            <ImageContainer>
              <img
                src="/images/icons/Data.png"
                alt="data"
                width={15}
                height={15}
              />
            </ImageContainer>
            {dataLabel}
          </Label>
        </LeftContainer>
        <ProgressBar>
          <ProgressFill color="#A1E659" height={(sharedData / 160) * 100} />
        </ProgressBar>
      </Card>

      <Card>
        <LeftContainer>
          <InfoContainer>
            <Value>{energySaved}%</Value>
            <Subtitle>Saved</Subtitle>
          </InfoContainer>
          <Label>
            <ImageContainer>
              <img
                src="/images/icons/Charge.png"
                alt="energy"
                width={11}
                height={15}
              />
            </ImageContainer>
            {energyLabel}
          </Label>
        </LeftContainer>
        <ProgressBar>
          <ProgressFill color="#F5A524" height={energySaved} />
        </ProgressBar>
      </Card>

      <Card>
        <LeftContainer>
          <InfoContainer>
            <LiteTitle>
              <img
                src="/images/icons/Check.png"
                alt="check"
                width={24}
                height={24}
              />
              {liteLabel}
            </LiteTitle>
            <LiteSwitchContainer>
              <RadioIcon active={radioOn}>
              </RadioIcon>
              <SwitchWrapper
                active={radioOn}
                onClick={() => setRadioOn(!radioOn)}
              >
                <SwitchDot active={radioOn} />
              </SwitchWrapper>
            </LiteSwitchContainer>
          </InfoContainer>
          <ImageContainer>
            <img src="/images/icons/Boost.png" alt="" />
            {boostLabel}
          </ImageContainer>
        </LeftContainer>
        <DotColumn>
          {[...Array(6)].map((_, i) => {
            const dotIndex = 5 - i
            const isActive = radioOn ? true : dotIndex === 0
            return <Dot key={i} active={isActive} />
          })}
        </DotColumn>
      </Card>
    </DashboardWrapper>
  )
}

export default DashboardSlider
