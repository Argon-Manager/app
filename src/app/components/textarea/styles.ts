import styled from "styled-components"

export const TextareaWrapper = styled.div<{ fullWidth?: boolean; error?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & textarea {
    -webkit-appearance: none;
    outline: none;

    resize: none;

    width: ${(props) => (props.fullWidth ? "100%" : "inherit")};
    padding: 1.5rem;

    font-family: "Roboto", sans-serif;
    font-size: 1.3rem;

    border: solid 2px #f5f8fc;
    border-radius: 5px;

    line-height: 1.5;

    background: #fafdff;

    transition: background 0.25s, border-color 0.25s, color 0.25s;

    &:focus {
      background: #ffffff;
      border-color: #ccd0d8;
    }

    &::placeholder {
      color: #ccd0d8;
    }

    &.input-error {
      border-color: #db235d;
    }
  }
`

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  color: #ccd0d8;
  padding: 1rem 0;
`

export const Error = styled.span`
  padding: 1rem 0;
  font-size: 1.2rem;
  color: #db235d;
`
