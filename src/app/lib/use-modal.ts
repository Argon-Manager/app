import { ReactNode } from "react"
import { createStateContext } from "react-use"

type ModalState = {
  name?: string
  content?: ReactNode
}

const [useSharedModal, ModalProvider] = createStateContext<ModalState | undefined>(undefined)

const useModal = () => {
  const [state, setModal] = useSharedModal()

  return {
    state,
    setModal,
  }
}

export default useModal

export { ModalProvider }
