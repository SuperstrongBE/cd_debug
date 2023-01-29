import classnames from 'classnames'
import PropTypes from 'prop-types'
import ScrollArea from '../../interface/ScrollArea'

function ScrollWrapper({ children, scrollable }) {
  if (scrollable) {
    return <ScrollArea>{children}</ScrollArea>
  } else {
    return children
  }
}

const CardContent = ({
  isCollapsed,
  children,
  emptyText,
  scrollable,
  overflowHidden,
}) => {
  // Closed styles are for the closed state on SM and MD. It will automatically open on higher widths.
  const isCollapsedStyles = isCollapsed && 'mobile:hidden md:hidden lg:flex'
  const scrollableStyles = scrollable && 'overflow-y-auto'
  const overflowHiddenStyles = overflowHidden && 'overflow-hidden'

  return (
    <>
      {children ? (
        // Not empty
        <ScrollWrapper scrollable={scrollable}>
          <div
            className={classnames(
              'flex flex-grow flex-col overscroll-contain',
              isCollapsedStyles,
              // scrollableStyles,
              overflowHiddenStyles,
            )}>
            {children}
          </div>
        </ScrollWrapper>
      ) : (
        // Empty
        <div
          className={classnames(
            'flex h-max flex-col items-center justify-center px-8 py-12 text-slate-400 dark:text-slate-50/30 md:h-full',
            isCollapsedStyles,
          )}>
          {emptyText}
        </div>
      )}
    </>
  )
}

CardContent.defaultProps = {
  isCollapsed: true,
  emptyText: 'Coming Soon',
}

CardContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
}

export default CardContent
