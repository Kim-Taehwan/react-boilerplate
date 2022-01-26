import React, { useMemo } from 'react'
import cx from 'classnames'
import Utils from '@/lib/utils/Utils'

interface Props {
  label?: React.ReactNode
  inline?: boolean
  disabled?: boolean
  checked?: boolean
  onChange?: (v: boolean) => void
}

function Checkbox({ label, disabled, inline, checked, onChange }: Props) {
  const id = useMemo(() => Utils.uuid(), [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e) return

    const checked = !!e.target?.checked
    if (onChange) onChange(checked)
  }

  return (
    <div className={cx('form-group', inline ? 'form-check-inline' : 'form-check')}>
      <input type="checkbox" className="form-check-input" id={id} disabled={disabled} checked={checked} onChange={handleChange} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
