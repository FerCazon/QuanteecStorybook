import styled, { css } from "styled-components";

interface TabProps {
  $active?: boolean;
  $color?: string;
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
  font-family: 'Inter', sans-serif;
`

export const BorderContainer = styled.div<{ $color: string }>`
  padding: 2px;
  border-radius: 22px; /* slightly more than content to avoid clipping */
  background: linear-gradient(
    to bottom,
    ${({ $color }) => $color} 0%,
    ${({ $color }) => $color} 5%,
    transparent 100%
  );
  display: inline-block;
`;

export const ModalContent = styled.div<{ $sponsor?: string }>`
  background-color: #000000;
  padding: 69.5px 68.5px;
  border-radius: 20px;
  width: 500px;
  min-height: 600px;
  color: white;
  gap: 16px;
  position: relative;
  z-index: 1;

  ${({ $sponsor }) =>
    $sponsor === "redbull" &&
    css`
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(238, 60, 71, 0.4) 0%,
          rgba(238, 60, 71, 0.2) 20%,
          transparent 50%
        );
        z-index: -1;
        pointer-events: none;
      }
    `}
`;

export const SponsorWrapper = styled.div`
  display: flex;
  paddingbottom: 20px;
`

export const SponsorBlock = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background: #ea3a3a;
  border-radius: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 160px;
    height: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  margin-bottom: 23.52px;
`;

export const CloseButton = styled.button`
  background: #ffffff1a;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 47px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 3.3px;
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
  margin-bottom: 18.63px;
`;

export const Tab = styled.button<TabProps>`
  all: unset;
  flex: 1;
  text-align: center;
  padding: 23.95px 0;
  max-width: 228px;
  color: white;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 28.74px;
  background: transparent;

  border-bottom: ${({ $active, $color }) =>
    $active ? `3px solid ${$color}` : "none"};
`;

export const CreditContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`

export const CreditBox = styled.div`
  flex: 1;
  background: #222;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  padding: 12px;
  border-radius: 8px;
`

export const ToggleSwitch = styled.input.attrs({ type: 'checkbox' })`
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
    content: '';
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
`
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
`

export const BottomPartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const BottomPartText = styled.p`
  display: flex;
  width: 50%;
`

export const BottomPartTextContainer = styled.div`
  display: flex;
  width: 50%;
`

export const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const TextContainerBottom = styled.div`
  font-size: 26.11px;
  font-weight: 400;
`

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
`

