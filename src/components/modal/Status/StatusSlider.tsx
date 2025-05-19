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
  SwitchContainer,
  SwitchDot,
  SwitchWrapper,
  TextContainer,
  TextContainerBottom,
  TopContainer,
} from "./styles";
import { StatusSliderProps } from "./types";
import { tierMap, TierLevel } from "../../common/tiers";

import { useState } from "react";

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
                width={30}
                height={30}
              />
              Speed
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
        <SwitchContainer>
          <TextContainer style={{ fontWeight: 600 }}>
            {switchActive ? "ON" : "OFF"}
          </TextContainer>
          <SwitchWrapper
            active={switchActive}
            onClick={() => setSwitchActive(!switchActive)}
          >
            <SwitchDot active={switchActive} />
          </SwitchWrapper>
        </SwitchContainer>
      </MidContainer>

      <BottomContainer>
        <TextContainerBottom>{bottomText}</TextContainerBottom>
        <LearnMoreButton>{learnMoreText}</LearnMoreButton>
      </BottomContainer>
    </StatusSliderContainer>
  );
};
