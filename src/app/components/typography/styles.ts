import styled from "styled-components"

export type Variant = "subtitle" | "body"

export const TypographyWrapper = styled.div<{ variant: Variant }>`
  font-size: 1.6rem;
  font-weight: ${(props) => (props.variant === "subtitle" ? 600 : 300)};
  margin-bottom: ${(props) => (props.variant === "subtitle" ? "1.6rem" : "1rem")};
`
