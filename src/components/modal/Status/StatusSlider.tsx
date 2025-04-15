import { BottomPartContainer, BottomPartTextContainer, CreditBox, CreditContainer, LearnMoreButton, ToggleContainer, ToggleSwitch } from "../styles"

import { StatusSliderContainer } from "./styles"

export const StatusSlider = () => {
  return (
<StatusSliderContainer>
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
</StatusSliderContainer>
  )
}