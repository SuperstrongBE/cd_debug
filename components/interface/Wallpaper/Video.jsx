import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Video = props => {
  const [videoIsLoaded, setVideoIsLoaded] = useState(false)
  const onLoadedData = () => {
    setVideoIsLoaded(true)
  }

  return (
    <div className={classnames('fixed inset-0 z-0 bg-primary-1000')}>
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/wallpapers/video.mp4"
        onLoadedData={onLoadedData}
        className={classnames(
          'absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[4s] motion-reduce:duration-[10s]',
          videoIsLoaded && '!opacity-10',
        )}></video>
    </div>
  )
}

Video.defaultProps = {
  title: 'Video',
  href: '#',
  icon: null,
}

Video.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
}

export default Video
