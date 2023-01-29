import { useEffect, useState } from 'react'
import Modal from '../interface/Modal'
import { createRoot } from 'react-dom/client'

const STARTUP_TIME = 200
const CLEANUP_TIME = 500

function generateId() {
  return Math.random().toString().split('.')[1]
}

function CommonModal({
  icon: Icon,
  title: Title,
  content: Content,
  isDraggable: isDraggable,
  resolveFn,
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, STARTUP_TIME)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const handleClose = (value: any) => {
    setOpen(false)
    resolveFn(value)
  }

  return (
    <Modal
      className="app-CommonModal"
      icon={<Icon />}
      title={<Title />}
      content={<Content onClose={handleClose} />}
      open={open}
      setOpen={() => handleClose(undefined)}
      backdrop={false}
      isDraggable={isDraggable}
    />
  )
}

const activeModals: Record<
  string,
  {
    id: string
    cleanup: Function
  }
> = {}

export async function hideAllModals() {
  const allModalIds = Object.keys(activeModals)

  for (const modelId of allModalIds) {
    const fn = activeModals[modelId]?.cleanup

    fn?.()
  }

  await new Promise(r => setTimeout(r, CLEANUP_TIME))
}

export async function showModal({
  icon,
  title,
  content,
  isDraggable,
  killOthers = false,
}) {
  return new Promise(async (resolve, reject) => {
    const internalModalId = generateId()

    const rootContainer = document.createElement('div')
    rootContainer.setAttribute('id', 'df-modal-' + internalModalId)

    const root = createRoot(rootContainer)

    const cleanup = () => {
      root.unmount()

      if (document.body.contains(rootContainer)) {
        document.body.removeChild(rootContainer)
      }

      delete activeModals[internalModalId]
    }

    // const rejectFn = (...args) => {
    //   console.error('failed', ...args);
    //   cleanup();
    //   reject(...args);
    // };

    const resolveFn = value => {
      // wait for exit animation
      setTimeout(() => {
        cleanup()
        resolve(value)
      }, CLEANUP_TIME)
    }

    if (killOthers) {
      await hideAllModals()
    }

    root.render(
      <CommonModal
        icon={icon}
        title={title}
        content={content}
        isDraggable={isDraggable}
        resolveFn={resolveFn}
      />,
    )

    document.body.appendChild(rootContainer)
    activeModals[internalModalId] = {
      id: internalModalId,
      cleanup,
    }
  })
}
