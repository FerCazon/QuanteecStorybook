import styled from "styled-components";

export const StatusSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: "Inter", sans-serif;
  width: 100%;
  max-width: 100%;
`;

export const TopContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 17px;
  padding: 15px 0;
  gap: 12.5px;
`;
export const MidContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  border-radius: 30px;
`;
export const BottomContainer = styled.div`
  height: 40px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

export const QoinsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
`;
export const GraphicsContainer = styled.div`
  height: 26px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
`;

export const QoinsNumContainer = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

export const QoinsNumTopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;
export const ClaimButton = styled.button`
  all: unset;
  padding: 12px;
  width: 90px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  border-radius: 7.27px;
  background: ${({ disabled }) =>
    disabled
      ? "rgba(255, 255, 255, 0.1)"
      : "repeating-linear-gradient(135deg, #2F90B0, #2F90B0 10px, #2F90B080 10px, #2F90B080 20px)"};
  color: ${({ disabled }) =>
    disabled ? "rgba(255, 255, 255, 0.4)" : "#ffffff"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
`;
export const QoinsNum = styled.div`
  font-size: 18.5px;
  font-weight: 700;
`;

export const DotColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? "#2F90B0" : "rgba(255, 255, 255, 0.1)"};
  transition: background-color 0.3s ease;
`;

export const LiteTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 11px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
`;

export const LeftGraphicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: rgba(255, 255, 255, 0.5);
`;

export const RightGraphicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 155px;
`;

export const ProgressTextContainer = styled.div`
  font-size: 11px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Inter", sans-serif;
`;

export const PercentageText = styled.span`
  color: white;
  font-size: 14.5px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
`;

export const ProgressBarBackground = styled.div`
  margin-top: 2px;
  width: 100%;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #2f90b0;
  border-radius: 4px 0 0 4px;
  transition: width 0.3s ease;
`;

export const SwitchWrapper = styled.div<{ active: boolean }>`
  width: 43px;
  height: 24px;
  border-radius: 999px;
  background-color: ${({ active }) => (active ? "#3FB0FF" : "#555")};
  padding: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SwitchDot = styled.div<{ active: boolean }>`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: white;
  top: 2px;
  left: 2px;
  transition: 0.3s ease;
  transform: ${({ active }) =>
    active ? "translateX(22px)" : "translateX(2px)"};
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
  font-size: 15.7px;
  font-weight: 600;
`;

export const LeftMidContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5.28px;
`;

export const TextContainerBottom = styled.div`
  width: 50%;
  size: 13.21px;
  font-weight: 400;
`;

export const LearnMoreButton = styled.button`
  all: unset;
  background-color: white;
  color: black;
  padding: 10.5px 16px;
  border-radius: 30px;
  size: 13.33px;
  font-weight: 600;
`;
