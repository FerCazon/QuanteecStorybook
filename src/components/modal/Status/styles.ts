import styled from "styled-components";

export const StatusSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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