import {
  ClaimButton,
  Dot,
  DotColumn,
  GraphicsContainer,
  LeftGraphicsContainer,
  LeftMidContainer,
  LiteTitle,
  MidContainer,
  PercentageText,
  ProgressBarBackground,
  ProgressBarFill,
  ProgressTextContainer,
  QoinsContainer,
  QoinsNum,
  QoinsNumContainer,
  QoinsNumTopContainer,
  RightGraphicsContainer,
  StatusSliderContainer,
  SwitchContainer,
  SwitchDot,
  SwitchWrapper,
  TextContainer,
  TopContainer,
} from './styles'
import { TierLevel, tierMap } from '../../common/tiers'

import { StatusSliderProps } from './types'
import { sponsorColorMap } from '../../common/sponsors'
import { useState } from 'react'

export const StatusSlider = ({
  qoinsNumber = 102,
  progressBar = 100,
  showDots = true,
  radioLabel = 'Stream Boost',
  claimText = 'Claim Qoins',
  qoinsLabel = 'Quoins Earned',
  nextGenText = 'Next Quoin gen',
  defaultSwitchActive = false,
  tierLevel = 'lite',
  forceClaimEnabled,
  sponsor = 'quanteec',
}: StatusSliderProps) => {
  const iconColor = sponsorColorMap[sponsor]
  const [switchActive, setSwitchActive] = useState(defaultSwitchActive)
  const isClaimEnabled =
    typeof forceClaimEnabled === 'boolean'
      ? forceClaimEnabled
      : progressBar === 100

  const tier = tierMap[tierLevel as TierLevel]
  const TierIcon = tier.icon
  return (
    <StatusSliderContainer>
      <TopContainer>
        <QoinsContainer>
          <QoinsNumContainer>
            <QoinsNumTopContainer>
              <QoinsNum>{qoinsNumber}</QoinsNum>
              <img
                src="/images/icons/Union.png"
                alt="Union"
                width={30}
                height={35}
              />
            </QoinsNumTopContainer>
            {qoinsLabel}
          </QoinsNumContainer>
          <ClaimButton disabled={!isClaimEnabled} $color={iconColor}>
            {claimText}
          </ClaimButton>
        </QoinsContainer>

        <GraphicsContainer>
          <LeftGraphicsContainer>
            <LiteTitle>
              <TierIcon width={30} height={30} color={iconColor} />
              Speed
            </LiteTitle>

            {showDots && (
              <DotColumn>
                {[...Array(6)].map((_, i) => (
                  <Dot key={i} active={i < tier.dots} $color={iconColor} />
                ))}
              </DotColumn>
            )}
          </LeftGraphicsContainer>

          <RightGraphicsContainer>
            <ProgressTextContainer>
              {nextGenText} <PercentageText>{progressBar}%</PercentageText>
            </ProgressTextContainer>
            <ProgressBarBackground>
              <ProgressBarFill
                $color={iconColor}
                style={{ width: `${progressBar}%` }}
              />
            </ProgressBarBackground>
          </RightGraphicsContainer>
        </GraphicsContainer>
      </TopContainer>
      <MidContainer>
        <LeftMidContainer>
          <TextContainer>{radioLabel}</TextContainer>
        </LeftMidContainer>
        <SwitchContainer>
          <TextContainer style={{ fontWeight: 600 }}>
            {switchActive ? 'ON' : 'OFF'}
          </TextContainer>
          <SwitchWrapper
            active={switchActive}
            $color={iconColor}
            onClick={() => setSwitchActive(!switchActive)}
          >
            <SwitchDot active={switchActive} />
          </SwitchWrapper>
        </SwitchContainer>
      </MidContainer>
    </StatusSliderContainer>
  )
}
