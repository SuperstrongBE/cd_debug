import { Card } from '@/components/layout'
import classnames from 'classnames'
import Image from "next/legacy/image";
import { useState } from 'react'

const ImageCard = ({ id, className, title, href, image, children }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  return (
    <Card
      hideHeader
      id={id}
      className={classnames(className)}
      title={title}
      href={href}>
      <div
        className={classnames(
          'Image relative flex h-full items-center justify-center p-2 opacity-0 motion-safe:transition-opacity 2xl:p-0.5',
          imageIsLoaded && '!opacity-100',
        )}>
        <Image
          src={image}
          alt="Picture of the author"
          // layout="fill"
          width="1122"
          height="838"
          // className="object-top"
          onLoad={event => {
            const target = event.target

            // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
            if (target.src.indexOf('data:image/gif;base64') < 0) {
              setImageIsLoaded(true)
            }
          }}
        />
      </div>
      {children}
    </Card>
  )
}

ImageCard.defaultProps = {
  id: 'Image',
  title: 'ImageCard',
  href: '/',
}

ImageCard.propTypes = {}

export default ImageCard
