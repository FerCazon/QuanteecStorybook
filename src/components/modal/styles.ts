import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #141414;
  padding: 24px;
  border-radius: 16px;
  width: 307px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 337px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Tab = styled.button`
  flex: 1;
  padding: 10px;
  background: #333;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
`

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
  background: white;
  color: black;
  padding: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  justify-content: center;
  align-items: center;
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