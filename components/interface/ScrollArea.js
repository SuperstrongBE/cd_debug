import * as RadixScrollArea from '@radix-ui/react-scroll-area'
import classNames from 'classnames'
import { useState } from 'react'

export default function ScrollArea({ children, scrollableRef }) {
  const [fadeBottom, setFadeBottom] = useState(true)
  const [fadeTop, setFadeTop] = useState(true)

  function handleScroll(e) {
    let container = e.target

    if (
      container.scrollHeight - container.scrollTop <=
      container.clientHeight + 10
    ) {
      setFadeBottom(false)
    } else if (fadeBottom === false) {
      setFadeBottom(true)
    }

    if (container.scrollTop <= 1) {
      setFadeTop(false)
    } else if (fadeTop === false) {
      setFadeTop(true)
    }
  }
  return (
    <RadixScrollArea.Root
      scrollHideDelay={100}
      className={classNames('ScrollAreaRoot', {
        fadeBottom: fadeBottom,
        fadeTop: fadeTop,
      })}>
      <RadixScrollArea.Viewport
        ref={scrollableRef}
        onScroll={e => handleScroll(e)}
        className={classNames('ScrollAreaViewport overscroll-contain', {})}>
        {children}
      </RadixScrollArea.Viewport>
      <RadixScrollArea.Scrollbar
        className="ScrollAreaScrollbar hover:bg-slate-400/20 dark:hover:bg-slate-900/20"
        orientation="vertical">
        <RadixScrollArea.Thumb className="ScrollAreaThumb bg-slate-900/60 shadow dark:bg-slate-400/50" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="horizontal">
        <RadixScrollArea.Thumb className="ScrollAreaThumb" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Corner className="ScrollAreaCorner" />
    </RadixScrollArea.Root>
  )
}
