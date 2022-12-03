function Modal({ children, onClose }) {
  return (
    <div onClick={onClose}>
      <dialog onClick={(event) => event.stopPropagation()}>
        {children}
      </dialog>

    </div>
  )
}