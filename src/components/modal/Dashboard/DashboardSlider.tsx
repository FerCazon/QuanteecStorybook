import { FC, useState } from "react";
import {
  DashboardWrapper,
  Card,
  Subtitle,
  Label,
  Value,
  ProgressBar,
  ProgressFill,
  InfoContainer,
  ConnectedContainer,
  LeftContainer,
  ImageContainer,
  LiteTitle,
  SwitchDot,
  RadioIcon,
  LiteSwitchContainer,
  DotColumn,
  Dot,
  SwitchWrapper,
} from "./styles";

const DashboardSlider: FC = () => {
  const [radioOn, setRadioOn] = useState(false);
  const connected = 28;
  const sharedData = 80;
  const energySaved = 45;

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
            Contributors
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
                alt="frame"
                width={15}
                height={15}
              />
            </ImageContainer>
            Data
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
                alt="charge"
                width={11}
                height={15}
              />
            </ImageContainer>{" "}
            Energy
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
              Lite
            </LiteTitle>
            <LiteSwitchContainer>
              <RadioIcon active={radioOn}>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ opacity: radioOn ? 1 : 0.4 }}
                >
                  <g clipPath="url(#clip0_1_353)">
                    <path
                      d="M11.2207 8.75749C11.2207 9.2448 11.0762 9.72116 10.8055 10.1263C10.5348 10.5315 10.15 10.8473 9.69976 11.0338C9.24955 11.2203 8.75415 11.2691 8.27621 11.174C7.79827 11.0789 7.35925 10.8443 7.01468 10.4997C6.6701 10.1551 6.43544 9.71611 6.34037 9.23817C6.2453 8.76023 6.2941 8.26483 6.48058 7.81462C6.66706 7.36441 6.98286 6.97961 7.38804 6.70888C7.79322 6.43815 8.26958 6.29364 8.75688 6.29364C9.41033 6.29364 10.037 6.55323 10.4991 7.01529C10.9611 7.47735 11.2207 8.10404 11.2207 8.75749ZM13.6846 8.75749C13.6861 7.5452 13.2392 6.37518 12.4299 5.47257C12.387 5.42317 12.3348 5.38279 12.2762 5.35378C12.2177 5.32476 12.1539 5.30769 12.0887 5.30356C12.0234 5.29943 11.958 5.30832 11.8962 5.32972C11.8345 5.35111 11.7776 5.38459 11.7289 5.42819C11.6802 5.47179 11.6406 5.52464 11.6125 5.58367C11.5845 5.6427 11.5684 5.70673 11.5653 5.77203C11.5622 5.83733 11.5721 5.90259 11.5945 5.96401C11.6169 6.02543 11.6513 6.08179 11.6956 6.1298C12.342 6.85254 12.6994 7.78817 12.6994 8.7578C12.6994 9.72744 12.342 10.6631 11.6956 11.3858C11.6109 11.4835 11.568 11.6106 11.5762 11.7397C11.5844 11.8688 11.643 11.9895 11.7393 12.0757C11.8357 12.162 11.9621 12.2069 12.0913 12.2008C12.2205 12.1947 12.3421 12.138 12.4299 12.043C13.2391 11.1401 13.6859 9.96995 13.6846 8.75749ZM5.81812 6.1298C5.86249 6.08179 5.89687 6.02543 5.91924 5.96401C5.94162 5.90259 5.95155 5.83733 5.94845 5.77203C5.94536 5.70673 5.92931 5.6427 5.90123 5.58367C5.87315 5.52464 5.8336 5.47179 5.78489 5.42819C5.73619 5.38459 5.67929 5.35111 5.61752 5.32972C5.55575 5.30832 5.49034 5.29943 5.4251 5.30356C5.35986 5.30769 5.29609 5.32476 5.23751 5.35378C5.17894 5.38279 5.12672 5.42317 5.0839 5.47257C4.27501 6.37566 3.82773 7.54542 3.82773 8.7578C3.82773 9.97018 4.27501 11.1399 5.0839 12.043C5.17168 12.138 5.29328 12.1947 5.42247 12.2008C5.55166 12.2069 5.67808 12.162 5.77444 12.0757C5.87081 11.9895 5.9294 11.8688 5.93757 11.7397C5.94574 11.6106 5.90284 11.4835 5.81812 11.3858C5.17109 10.6634 4.81332 9.72763 4.81332 8.7578C4.81332 7.78798 5.17109 6.85224 5.81812 6.1298ZM15.5676 5.88341C15.2069 5.02694 14.6874 4.24652 14.0363 3.58341C13.9914 3.53543 13.9374 3.49691 13.8774 3.47011C13.8174 3.44331 13.7527 3.42878 13.687 3.42736C13.6214 3.42594 13.5561 3.43767 13.495 3.46186C13.4339 3.48605 13.3783 3.5222 13.3314 3.5682C13.2845 3.6142 13.2472 3.66911 13.2219 3.72971C13.1965 3.79031 13.1835 3.85537 13.1836 3.92106C13.1838 3.98675 13.1971 4.05176 13.2227 4.11224C13.2483 4.17273 13.2858 4.22749 13.3329 4.27329C14.5073 5.46988 15.1653 7.07959 15.1653 8.75626C15.1653 10.4329 14.5073 12.0426 13.3329 13.2392C13.2874 13.2854 13.2515 13.3401 13.2272 13.4002C13.2028 13.4603 13.1906 13.5245 13.1911 13.5893C13.1916 13.6541 13.2049 13.7182 13.2302 13.7779C13.2554 13.8376 13.2922 13.8917 13.3384 13.9371C13.3846 13.9826 13.4393 14.0185 13.4994 14.0428C13.5594 14.0671 13.6237 14.0794 13.6885 14.0789C13.7533 14.0784 13.8174 14.0651 13.877 14.0398C13.9367 14.0145 13.9908 13.9778 14.0363 13.9316C15.0565 12.8898 15.7461 11.5698 16.0185 10.1373C16.2909 8.7049 16.1341 7.2239 15.5676 5.88033V5.88341ZM2.85411 11.2509C2.36174 10.087 2.22499 8.80334 2.46111 7.56181C2.69722 6.32028 3.29563 5.17644 4.1809 4.27452C4.27254 4.18124 4.32338 4.05537 4.32223 3.92461C4.32107 3.79385 4.26802 3.6689 4.17474 3.57725C4.08146 3.4856 3.95559 3.43477 3.82483 3.43592C3.69406 3.43708 3.56911 3.49013 3.47747 3.58341C2.12123 4.96411 1.36133 6.82211 1.36133 8.75749C1.36133 10.6929 2.12123 12.5509 3.47747 13.9316C3.52234 13.9796 3.57636 14.0181 3.63634 14.0449C3.69632 14.0717 3.76105 14.0862 3.82673 14.0876C3.8924 14.089 3.9577 14.0773 4.01878 14.0531C4.07986 14.0289 4.13549 13.9928 4.18239 13.9468C4.22929 13.9008 4.26652 13.8459 4.29189 13.7853C4.31726 13.7247 4.33026 13.6596 4.33012 13.5939C4.32998 13.5282 4.31671 13.4632 4.29108 13.4027C4.26546 13.3423 4.22799 13.2875 4.1809 13.2417C3.6171 12.6677 3.16693 11.9922 2.85411 11.2509Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_353">
                      <rect
                        width="16.0145"
                        height="16.0145"
                        fill="white"
                        transform="translate(0.798828 0.750366)"
                      />
                    </clipPath>
                  </defs>
                </svg>
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
            Boost
          </ImageContainer>
        </LeftContainer>
        <DotColumn>
          {[...Array(6)].map((_, i) => {
            const dotIndex = 5 - i;
            const isActive = radioOn ? true : dotIndex === 0;
            return <Dot key={i} active={isActive} />;
          })}
        </DotColumn>
      </Card>
    </DashboardWrapper>
  );
};

export default DashboardSlider;
