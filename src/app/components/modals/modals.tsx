import React, { useRef } from "react"
import { useClickAway } from "react-use"
import { useModal } from "../../lib"
import { ModalWrapper } from "./styles"

const Modals = () => {
  const { state: modals, setModal } = useModal()

  const ref = useRef(null)
  useClickAway(ref, () => {
    setModal(undefined)
  })

  return <>{modals && <ModalWrapper ref={ref}>{modals.name ?? modals.content}</ModalWrapper>}</>
}

export default Modals
