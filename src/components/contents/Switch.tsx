import React, { useMemo } from 'react'
import Utils from '@/lib/utils/Utils'

interface Props {
  label?: React.ReactNode
  isOn?: boolean
  onChange?: (v: boolean) => void
}

function Switch({ label, isOn, onChange }: Props) {
  const id = useMemo(() => Utils.uuid(), [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e) return

    const checked = !!e.target?.checked
    if (onChange) onChange(checked)
  }

  return (
    <div className="custom-control custom-switch">
      <input type="checkbox" className="custom-control-input" id={id} checked={isOn} onChange={handleChange} />
      <label className="custom-control-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default Switch
