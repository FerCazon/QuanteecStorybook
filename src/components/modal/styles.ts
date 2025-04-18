import styled from "styled-components";

interface TabProps {
  $active?: boolean;
}

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #00000099;
  padding: 35.16px 34.7px 34.85px;
  border-radius: 29.09px;
  width: 307.7054748535156px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 337.04px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20.35px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  padding: 4.6px;
`;

export const CloseButton = styled.button`
  background: #ffffff1a;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23.98px;
  height: 23.98px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 14.76px;
    height: 2.3px;
    border: white;
    background-color: white;
    top: 50%;
    left: 50%;
    transform-origin: center;
    border-radius: 25px;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;

export const Tab = styled.button<TabProps>`
  all: unset;
  flex: 1;
  text-align: center;
  padding: 10px;
  color: white;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14.55px;
  background: transparent;

  border-bottom: ${({ $active }) =>
    $active ? "1.22px solid #2F90B0" : "none"};
`;

export const CreditContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const CreditBox = styled.div`
  flex: 1;
  background: #222;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  padding: 12px;
  border-radius: 8px;
`;

export const ToggleSwitch = styled.input.attrs({ type: "checkbox" })`
  width: 40px;
  height: 20px;
  appearance: none;
  background: #444;
  border-radius: 12px;
  position: relative;
  cursor: pointer;

  &:checked {
    background: #4caf50;
  }

  &::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    top: 1px;
    left: 2px;
    transition: 0.3s;
  }

  &:checked::before {
    left: 20px;
  }
`;
export const LearnMoreButton = styled.button`
  background: white;
  color: black;
  padding: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

export const BottomPartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const BottomPartText = styled.p`
  display: flex;
  width: 50%;
`;

export const BottomPartTextContainer = styled.div`
  display: flex;
  width: 50%;
`;

export const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
`;
