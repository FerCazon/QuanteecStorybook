import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  gap: 10.55px;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Card = styled.div`
  background-color: #1f1f1f;
  border-radius: 16.97px;
  padding: 14.55px;
  gap: 24.25px;
  color: white;
  display: flex;
  max-width: 115px;
  max-height: 88px;
  width: 115px;
  height: 77px;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ConnectedContainer = styled.div`
  width: 100%;
`;

export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  opacity: 50%;
  margin: 0;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
`;

export const Value = styled.div`
  font-size: 24.25px;
  font-weight: bold;
  font-weight: 700;
  font-family: "Inter", sans-serif;
`;

export const ProgressBar = styled.div`
  height: 60px;
  width: 12px;
  border-radius: 20px;
  background-color: #555;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`;

export const ProgressFill = styled.div<{ height: number; color: string }>`
  width: 100%;
  height: ${({ height }) => `${height}%`};
  background-color: ${({ color }) => color};
  border-radius: 20px;
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
  font-size: 11px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  gap: 2.08px;
`;

export const LiteTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4.45px;
  font-size: 18px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
`;

export const SwitchWrapper = styled.div<{ active: boolean }>`
  width: 30px;
  height: 15px;
  border-radius: 999px;
  background-color: ${({ active }) => (active ? "#3FB0FF" : "#555")};
  padding: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SwitchDot = styled.div<{ active: boolean }>`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: white;
  top: 2px;
  left: 2px;
  transition: 0.3s ease;
  transform: ${({ active }) =>
    active ? "translateX(15px)" : "translateX(2px)"};
`;

export const RadioIcon = styled.div<{ active: boolean }>`
  svg {
    fill: ${({ active }) => (active ? "#3FB0FF" : "#555")};
    width: 24px;
    height: 24px;
  }
  display: flex;
`;

export const LiteSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.94px;
`;

export const DotColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? "#2F90B0" : "rgba(255, 255, 255, 0.1)"};
  transition: background-color 0.3s ease;
`;
