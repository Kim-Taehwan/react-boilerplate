import React from 'react'
import OverlayTrigger, { OverlayTriggerProps } from 'react-bootstrap/OverlayTrigger'
import BSTooltip, { TooltipProps } from 'react-bootstrap/Tooltip'

interface Props extends TooltipProps {
  triggerProps?: Partial<OverlayTriggerProps>
  content: React.ReactNode
  children: React.ReactNode
}

function Tooltip({ triggerProps, content, children, ...rest }: Props) {
  const { placement = 'right', ...triggerPropsRest } = triggerProps || {}

  return (
    <OverlayTrigger
      placement={placement}
      {...triggerPropsRest}
      overlay={
        <BSTooltip {...rest}>
          {content}
        </BSTooltip>
      }
    >
      <span>{children}</span>
    </OverlayTrigger>
  )
}

export default Tooltip
