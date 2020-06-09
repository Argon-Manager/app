import React, { ReactNode, useCallback, useState } from "react"
import { DropdownWrapper } from "./styles"

type Props = {
  label: ReactNode
  items: ReactNode[]
}

const Dropdown = ({ label, items }: Props) => {
  const [open, setOpen] = useState(false)
  const handleClick = useCallback(() => {
    setOpen((prevState) => !prevState)
  }, [open])

  return (
    <DropdownWrapper>
      <button onClick={handleClick}>{label}</button>
      <ul className={open ? `dropdown__open` : ""}>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </DropdownWrapper>
  )
}

export default Dropdown
