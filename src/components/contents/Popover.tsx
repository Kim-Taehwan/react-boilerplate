import React from 'react'
import OverlayTrigger, { OverlayTriggerProps } from 'react-bootstrap/OverlayTrigger'
import BSPopover, { PopoverProps } from 'react-bootstrap/Popover'

interface Props extends PopoverProps {
  triggerProps?: Partial<OverlayTriggerProps>
  description: React.ReactNode
  children: React.ReactNode
}

function Popover({ children, triggerProps, title, description, ...rest }: Props) {
  const { trigger = 'click', placement = 'right', ...triggerPropsRest } = triggerProps || {}

  return (
    <OverlayTrigger
      trigger={trigger}
      placement={placement}
      {...triggerPropsRest}
      overlay={
        <BSPopover {...rest}>
          <BSPopover.Title as="h3">{title}</BSPopover.Title>
          <BSPopover.Content>{description}</BSPopover.Content>
        </BSPopover>
      }
    >
      <span>{children}</span>
    </OverlayTrigger>
  )
}

export default Popover
