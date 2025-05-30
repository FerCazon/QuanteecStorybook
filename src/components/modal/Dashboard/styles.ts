import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: rgb(255, 255, 255, 0.05);
  border-radius: 33.57px;
  padding: 28.7px;
  color: white;
  display: flex;
  width: 183.45px;
  height: 140px;
  justify-content: space-around;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

export const ConnectedContainer = styled.div`
  width: 100%;
`;

export const Subtitle = styled.p`
  font-size: 19.18px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  opacity: 50%;
  margin: 0;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  font-size: 21.58px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
`;

export const Value = styled.div`
  font-size: 47.95px;
  font-weight: bold;
  font-weight: 700;
  font-family: "Inter", sans-serif;
`;

export const ProgressBar = styled.div`
  height: 117px;
  width: 31.17px;
  border-radius: 20px;
  background-color: #555;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  margin-left: 34.06px;
  position: relative;
`;

export const ProgressFill = styled.div<{ height: number; color: string }>`
  width: 100%;
  height: ${({ height }) => `${height}%`};
  background-color: ${({ color }) => color};
  border-radius: 0 0 0 20px;
  transition: height 0.3s ease-in-out;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SwitchLabel = styled.div<{ active: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ active }) => (active ? "#00A3FF" : "#aaa")};
`;

export const SwitchCircle = styled.div<{ active: boolean }>`
  height: 16px;
  width: 16px;
  background-color: ${({ active }) => (active ? "#00A3FF" : "#444")};
  border-radius: 50%;
`;

export const StatusDot = styled.div<{ active: boolean }>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#23B0D9" : "#555")};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 21.48px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  margin-right: 4.8px;
  margin-bottom: 5px;
`;

export const LiteTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4.45px;
  font-size: 18px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
`;

export const SwitchWrapper = styled.div<{ active: boolean; $sponsor?: string }>`
  width: 40.84px;
  height: 22.69px;
  border-radius: 999px;
  background-color: ${({ active, $sponsor }) => (active ? $sponsor : "#555")};
  padding: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ active, $sponsor }) =>
    active
      ? $sponsor === "redbull"
        ? "#FF3B3B"
        : "#2F90B0"
      : "rgba(255, 255, 255, 0.1)"};
`;

export const SwitchDot = styled.div<{ active: boolean }>`
  width: 15.88px;
  height: 15.88px;
  border-radius: 50%;
  background: white;
  top: 2px;
  left: 2px;
  transition: 0.3s ease;
  transform: ${({ active }) =>
    active ? "translateX(21px)" : "translateX(3px)"};
`;

export const RadioIcon = styled.div<{ active: boolean }>`
  svg {
    fill: ${({ active }) => (active ? "#3FB0FF" : "#555")};
    width: 30px;
    height: 30px;
  }
  display: flex;
  margin-right: 2px;
`;

export const LiteSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.94px;
`;

export const DotColumn = styled.div<{ $inactive?: boolean; $color?: string }>`
  display: flex;
  flex-direction: column-reverse;
  gap: 6px;
  justify-content: center;
`;

export const Dot = styled.div<{ active: boolean; $sponsor?: string }>`
  width: 16.14px;
  height: 16.14px;
  border-radius: 50%;
  background-color: ${({ active, $sponsor }) =>
    active
      ? $sponsor === "redbull"
        ? "#FF3B3B"
        : "#2F90B0"
      : "rgba(255, 255, 255, 0.1)"};
  transition: background-color 0.3s ease;
`;

export const LeftContainerSpeed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardSpeed = styled.div`
  border-radius: 33.57px;
  padding: 28.7px;
  color: white;
  display: flex;
  width: 183.45px;
  height: 140px;
  justify-content: space-between;
  background-color: rgb(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const TopLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StepCounter = styled.p`
  font-size: 45px;
  font-weight: 700;
  color: white;
  margin: 0;
  font-family: "Inter", sans-serif;
`;

export const Slash = styled.span<{ $sponsor?: string }>`
  color: ${({ $sponsor }) => ($sponsor === "redbull" ? "#FF3B3B" : "#2f90b0")};
`;

export const PlusIcon = styled.div`
  position: absolute;
  top: -5px;
  right: 0;
  left: 0;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  color: white;
  z-index: 1;
`;
