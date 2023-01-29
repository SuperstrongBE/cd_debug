import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Video from './Video'

import Image from 'next/legacy/image'

function Clock() {
  const [time, setTime] = useState()

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      setTime(date.toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <div
      className={classnames(
        ` relative flex font-carbon text-[14vh] text-white/90`,
      )}>
      <div className="z-10 py-10 px-24">{time}</div>
      <div className="absolute inset-0 z-0 h-full w-full rounded-r-full bg-primary-1000/50 opacity-80 blur-[75px]" />
    </div>
  )
}

const Wallpaper = props => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)
  const transitionStyles =
    'transition transform-gpu duration-[4s] motion-reduce:duration-[10s]'

  const DTS = () => {
    return (
      <svg
        width="227"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 .336h6.896c5.171 0 8.35 2.486 8.35 7.165 0 4.746-3.201 7.164-8.35 7.164H0V.336zm6.896 10.791c2.865 0 4.208-1.141 4.208-3.649 0-2.552-1.41-3.649-4.208-3.649H4.142v7.276h2.754v.022zM16.477.336h14.418V3.85H20.597v1.858h10.12v3.336H20.618v2.082h10.299v3.515h-14.44V.336zm24.202 0h4.433l8.575 14.328h-4.88l-1.344-2.418H38.35l-1.343 2.418h-4.881L40.679.336zm4.814 8.395l-2.575-4.656-2.597 4.656h5.172zm10.455-4.88h-6.336V.336h16.836V3.85h-6.359v10.813h-4.141V3.851zM67.59.336h4.141v5.082h8.418V.336h4.142v14.328H80.15V8.955h-8.418v5.71H67.59V.334zM96.806 3.85H90.47V.336h16.836V3.85h-6.358v10.813h-4.142V3.851z"
          fill="currentColor"
        />
        <path
          d="M106.59 7.5c0-4.5 3.447-7.5 9.044-7.5s9.068 2.978 9.068 7.5-3.448 7.5-9.068 7.5c-5.597-.022-9.044-3-9.044-7.5zm13.97 0c0-2.62-1.791-3.963-4.926-3.963-3.112 0-4.903 1.344-4.903 3.963 0 2.62 1.791 3.963 4.903 3.963 3.135 0 4.926-1.344 4.926-3.963zm10.433 2.418h4.41c-.045.963 1.299 1.545 3.56 1.545 2.731 0 4.365-.448 4.365-1.232 0-2.462-11.888 1.187-11.888-5.35 0-2.956 3.068-4.881 7.657-4.881 4.702 0 7.948 2.015 7.97 5.06h-4.41c.045-.963-1.164-1.545-3.224-1.545-2.418 0-3.851.448-3.851 1.231 0 2.62 11.888-.76 11.888 5.351 0 2.955-3.246 4.88-8.149 4.88-5.015 0-8.373-1.992-8.328-5.06zm23.171-6.067h-6.336V.336h16.836V3.85h-6.358v10.813h-4.142V3.851zM164.866 7.5c0-4.5 3.447-7.5 9.044-7.5 5.598 0 9.068 2.978 9.068 7.5S179.53 15 173.91 15c-5.574-.022-9.044-3-9.044-7.5zm13.992 0c0-2.62-1.791-3.963-4.925-3.963-3.112 0-4.903 1.344-4.903 3.963 0 2.62 1.791 3.963 4.903 3.963 3.112 0 4.925-1.344 4.925-3.963zm5.149 0c0-4.5 3.448-7.5 8.642-7.5 5.172 0 8.642 2.62 8.642 6.56h-4.164c-.179-2.06-1.97-3.045-4.456-3.045-2.708 0-4.5 1.343-4.5 3.963 0 2.619 1.792 3.962 4.5 3.962 2.508 0 4.299-.985 4.456-3.044h4.142c0 3.94-3.448 6.56-8.642 6.56-5.172.022-8.62-2.956-8.62-7.456zM202.5.336h4.142v6.47l7.119-6.47h6.135l-6.135 5.418 6.784 8.91h-5.754l-4.5-6.022-3.649 3.045v2.977H202.5V.336zm19.948 2.015h1.813c.47 0 .717.246.717.604s-.291.56-.717.56h-.224c.56.045.784.358 1.142 1.097h-.783c-.426-.739-.538-.896-.874-.896h-.425v.896h-.649V2.35zm1.701.85c.112 0 .179-.044.179-.156s-.067-.157-.179-.157h-1.052v.336h1.052V3.2z"
          fill="currentColor"
        />
        <path
          d="M223.612.336a3.143 3.143 0 0 0-3.134 3.134 3.143 3.143 0 0 0 3.134 3.135 3.143 3.143 0 0 0 3.134-3.135 3.143 3.143 0 0 0-3.134-3.134zm1.925 5.06a2.744 2.744 0 0 1-1.925.806 2.708 2.708 0 0 1-1.926-.806 2.747 2.747 0 0 1-.805-1.926c0-.76.313-1.433.805-1.925a2.748 2.748 0 0 1 1.926-.806c.761 0 1.433.313 1.925.806.493.492.806 1.186.806 1.925 0 .761-.291 1.433-.806 1.926z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <div
      className={classnames(
        'fixed inset-0 transform-gpu bg-primary-1000 transition',
        // props.show ? '!z-0' : '!z-50',
      )}>
      {/* <span
        className={classnames(
          'absolute left-0 right-0 top-0 z-20 h-40 w-full bg-gradient-to-b from-primary-1000/80 to-primary-1000/0',
        )}
      /> */}
      {/* <span
        className={classnames(
          '0 absolute left-0 right-0 top-0 z-20 h-4 w-full bg-gradient-to-b from-primary-1000/80 to-primary-1000/0 mobile:top-12',
        )}
      /> */}
      <div
        className={classnames(
          'absolute inset-0 z-10 transform-gpu',
          transitionStyles,
          imageIsLoaded
            ? props.opacity
              ? 'translate-x-0 scale-110 opacity-30 dark:opacity-20 mobile:opacity-40'
              : '!opacity-80'
            : 'scale-100 opacity-0',
        )}>
        <div
          className={classnames(
            `h-screen-safe relative z-10 w-full transform-gpu`,
            transitionStyles,
            props.grayscale ? 'grayscale' : 'grayscale-0',
            props.blur ? 'blur-3xl' : ' blur-0',
          )}>
          <Image
            src={props.image}
            alt="Picture of the author"
            objectFit="cover"
            layout="fill"
            objectPosition={props.position}
            onLoad={event => {
              const target = event.target

              // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
              if (target.src.indexOf('data:image/gif;base64') < 0) {
                setImageIsLoaded(true)
              }
            }}
          />
        </div>
        <div
          className={classnames(
            transitionStyles,
            `absolute inset-0 z-20 flex transform-gpu items-center justify-center will-change-transform`,
            props.show ? `translate-y-0 scale-100` : `translate-y-o scale-80`,
          )}>
          <div
            className={classnames(
              transitionStyles,
              `relative z-10 flex transform-gpu will-change-transform`,
              props.show ? `scale-100 opacity-100` : ` scale-90 opacity-0`,
            )}>
            {/* CLOCK */}
            {props.type === 'clock' && <Clock />}

            {/* BRAND */}
            {props.type === 'brand' && (
              <div className={classnames(`flex flex-col gap-8 text-white `)}>
                <div className="scale-[3] ">
                  <DTS />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Wallpaper.Video = Video

Wallpaper.defaultProps = {
  title: 'Wallpaper',
  href: '#',
  icon: null,
  type: 'clock',
  image: '/wallpapers/gradient.jpg',
}

Wallpaper.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
}

export default Wallpaper
