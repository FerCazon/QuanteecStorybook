import {
  BottomContainer,
  ClaimButton,
  Dot,
  DotColumn,
  GraphicsContainer,
  LearnMoreButton,
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
  SwitchDot,
  SwitchWrapper,
  TextContainer,
  TextContainerBottom,
  TopContainer,
} from "./styles";
import { StatusSliderProps, TierLevel } from "./types";

import { useState } from "react";

const tierMap: Record<
  TierLevel,
  { label: string; dots: number; icon: string }
> = {
  inactive: { label: 'Inactive', dots: 0, icon: 'Inactive' },
  lite: { label: 'G-1', dots: 1, icon: 'Check' },
  core: { label: 'G-2', dots: 2, icon: 'Core' },
  plus: { label: 'G-3', dots: 3, icon: 'Plus' },
  pro: { label: 'G-4', dots: 4, icon: 'Pro' },
  elite: { label: 'G-5', dots: 5, icon: 'Elite' },
  turbo: { label: 'G-6', dots: 6, icon: 'Turbo' },
}

export const StatusSlider = ({
  qoinsNumber = 102,
  progressBar = 100,
  showDots = true,
  bottomText = "Start being part of something new",
  radioLabel = "Stream Boost",
  learnMoreText = "Learn More",
  claimText = "Claim Qoins",
  qoinsLabel = "Quoins Earned",
  nextGenText = "Next Quoin gen",
  defaultSwitchActive = false,
  tierLevel = "lite",
  forceClaimEnabled,
}: StatusSliderProps) => {
  const [switchActive, setSwitchActive] = useState(defaultSwitchActive);
  const isClaimEnabled =
    typeof forceClaimEnabled === "boolean"
      ? forceClaimEnabled
      : progressBar === 100;

  const tier = tierMap[tierLevel as TierLevel];
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
          <ClaimButton disabled={!isClaimEnabled}>{claimText}</ClaimButton>
        </QoinsContainer>

        <GraphicsContainer>
          <LeftGraphicsContainer>
            <LiteTitle>
              <img
                src={`/images/icons/${tier.icon}.png`}
                alt={tier.label}
                width={23}
                height={23}
              />
              {tier.label}
            </LiteTitle>

            {showDots && (
              <DotColumn>
                {[...Array(6)].map((_, i) => (
                  <Dot key={i} active={i < tier.dots} />
                ))}
              </DotColumn>
            )}
          </LeftGraphicsContainer>

          <RightGraphicsContainer>
            <ProgressTextContainer>
              {nextGenText} <PercentageText>{progressBar}%</PercentageText>
            </ProgressTextContainer>
            <ProgressBarBackground>
              <ProgressBarFill style={{ width: `${progressBar}%` }} />
            </ProgressBarBackground>
          </RightGraphicsContainer>
        </GraphicsContainer>
      </TopContainer>
      <MidContainer>
        <LeftMidContainer>
          <TextContainer>{radioLabel}</TextContainer>
        </LeftMidContainer>
        <SwitchWrapper
          active={switchActive}
          onClick={() => setSwitchActive(!switchActive)}
        >
          <SwitchDot active={switchActive} />
        </SwitchWrapper>
      </MidContainer>

      <BottomContainer>
        <TextContainerBottom>{bottomText}</TextContainerBottom>
        <LearnMoreButton>{learnMoreText}</LearnMoreButton>
      </BottomContainer>
    </StatusSliderContainer>
  );
};
