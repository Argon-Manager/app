import React, { ReactNode, useCallback, useRef, useState } from "react"
import { useClickAway } from "react-use"
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

  const ref = useRef(null)
  useClickAway(ref, () => {
    setOpen(false)
  })

  return (
    <DropdownWrapper ref={ref}>
      <span onClick={handleClick}>{label}</span>
      <div className={open ? `dropdown__open` : ""}>
        {items.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </DropdownWrapper>
  )
}

export default Dropdown
