import React from 'react'
import cx from 'classnames'

interface Props {
  label?: React.ReactNode
  value?: string | number
  inline?: boolean
  placeholder?: string
  multiple?: boolean
  group: {
    [label: string]: string | number // { label: value }
  }
  onChange?: (v: string | number) => void
}

function SelectBox({ label, placeholder, value, inline, multiple, group = {}, onChange }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (!e) return

    const value = e.target?.value
    if (onChange) onChange(value)
  }

  const selectCmp = (
    <select className="custom-select" multiple={multiple} value={value} onChange={handleChange}>
      {placeholder && (
        <option value="" selected disabled hidden>
          {placeholder}
        </option>
      )}
      {Object.entries(group).map(([gLabel, gValue]) => (
        <option value={gValue}>{gLabel}</option>
      ))}
    </select>
  )

  return (
    <div className={cx('form-group', { row: inline })}>
      {label && <label className={cx({ 'col-sm-2 col-form-label': inline })}>{label}</label>}
      {inline ? <div className="col-sm-10">{selectCmp}</div> : selectCmp}
    </div>
  )
}

export default SelectBox
