type ModalProps = {
    isActive?: boolean,
    closeModal?: () => void,
    children?: ReactNode
    title?: string
  }

  type ModalDirection = ModalProps & { 
    direction: string 
  }

  type OptionsProps = {
    isActive: boolean
    closeModal?: () => void
  }