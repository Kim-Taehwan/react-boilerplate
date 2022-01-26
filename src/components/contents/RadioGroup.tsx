import React, { useMemo } from 'react'
import Utils from '@/lib/utils/Utils'

interface Props {
  label?: React.ReactNode
  value?: string | number
  inline?: boolean
  disabled?: boolean
  group: {
    [label: string]: string | number // { label: value }
  }
  onChange?: (v: string | number) => void
}

function RadioGroup({ label, value, inline, disabled, group = {}, onChange }: Props) {
  const name = useMemo(() => Utils.uuid(), [])
  const ids = useMemo(() => Object.keys(group).map(() => Utils.uuid()), [group])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e) return

    const checked = !!e.target?.checked
    if (checked && onChange) onChange(e.target.value)
  }

  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      {Object.entries(group).map(([gLabel, gValue], idx) => (
        <div className={inline ? 'form-check-inline' : 'form-check'}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={ids[idx]}
            value={gValue}
            disabled={disabled}
            checked={value ? value === gValue : undefined}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor={ids[idx]}>
            {gLabel}
          </label>
        </div>
      ))}
    </div>
  )
}

export default RadioGroup
