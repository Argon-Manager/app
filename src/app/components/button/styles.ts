import styled from "styled-components"

export type Variant = "submit" | "default" | "action"

const styles: { [variant in Variant]: string } = {
  submit: `
    background: #1a79f4;
    color: #ffffff;
    
    &:hover {
      background: #0d68d8
    }
  `,
  default: `
    background: #84fff6;
  `,
  action: `
    background: none;
  `,
}

export const ButtonWrapper = styled.button<{ variant: Variant }>`
  font-family: Roboto;
  font-weight: 600;
  font-size: 1.3rem;

  padding: 1rem 3rem;
  margin: 1rem 0;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  transition: background 0.25s;

  letter-spacing: 1px;

  ${(props) => styles[props.variant]}
`
