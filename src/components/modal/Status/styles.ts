import styled from "styled-components";

export const StatusSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  width: 100%;
  max-width: 100%;
`;

export const TopContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 33.53px;
  padding: 24.38px 28px;
  margin-bottom: 18.72px;
`;
export const MidContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16.83px 28.74px;
  border-radius: 57.49px;
  margin-bottom: 27.36px;
`;
export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QoinsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24.38px;
`;
export const GraphicsContainer = styled.div`
  display: flex;
  width: fit-content;
`;

export const QoinsNumContainer = styled.div`
  font-size: 22.26px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const QoinsNumTopContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10.66px;
  font-size: 22px;
`;
export const ClaimButton = styled.button`
  all: unset;
  position: relative;

  padding: 23px 17px;
  width: 174.78px;
  font-size: 21.32px;
  font-weight: 700;
  text-align: center;
  border-radius: 14.21px;
  color: white;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  background-color: ${({ disabled }) => (disabled ? "#444" : "#2F90B0")};
  box-shadow: ${({ disabled }) =>
    disabled ? "none" : "0 2px 8px rgba(47, 144, 176, 0.4)"};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: ${({ disabled }) => (disabled ? 0 : 0.3)};
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='100%' viewBox='0 0 60 40'><polygon fill='white' fill-opacity='0.3' points='0,0 20,20 0,40 20,40 40,20 20,0'/></svg>");
    background-repeat: repeat-x;
    background-size: 60px 100%;
    transform: scaleX(-1);
  }
`;

export const QoinsNum = styled.div`
  font-size: 36.5px;
  font-weight: 700;
  margin-right: 13.71px;
`;

export const DotColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 13.03px;
  height: 13.03px;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? "#2F90B0" : "rgba(255, 255, 255, 0.1)"};
  transition: background-color 0.3s ease;
`;

export const LiteTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 21.56px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
`;

export const LeftGraphicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11.98px;
  color: rgba(255, 255, 255, 0.5);
`;

export const RightGraphicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  margin-left: 57px;
`;

export const ProgressTextContainer = styled.div`
  font-size: 21.56px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Inter", sans-serif;
`;

export const PercentageText = styled.span`
  color: white;
  font-size: 28.74px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  margin-left: 8px;
`;

export const ProgressBarBackground = styled.div`
  margin-top: 2px;
  width: 100%;
  height: 13px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #2f90b0;
  border-radius: 4px 0 0 4px;
  transition: width 0.3s ease;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SwitchWrapper = styled.div<{ active: boolean }>`
  width: 86.23px;
  height: 47.91px;
  border-radius: 999px;
  background-color: ${({ active }) => (active ? "#3FB0FF" : "#555")};
  padding: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SwitchDot = styled.div<{ active: boolean }>`
  width: 33.53px;
  height: 33.53px;
  border-radius: 50%;
  background: white;
  top: 2px;
  left: 2px;
  transition: 0.3s ease;
  transform: ${({ active }) =>
    active ? "translateX(47px)" : "translateX(7px)"};
`;

export const RadioIcon = styled.div`
  svg {
    fill: #555;
    width: 24px;
    height: 24px;
  }
  display: flex;
`;

export const TextContainer = styled.div`
  font-size: 31.14px;
  font-weight: 600;
`;

export const LeftMidContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5.28px;
`;

export const TextContainerBottom = styled.div`
  font-size: 26.11px;
  font-weight: 400;
`;

export const LearnMoreButton = styled.button`
  all: unset;
  display: flex;
  text-align: center;
  width: 208px;
  background-color: white;
  color: black;
  border-radius: 35.58px;
  font-size: 26.35px;
  font-weight: 600;
  padding: 21px;
`;
