import React from 'react'
import cx from 'classnames'

interface Props {
  label?: React.ReactNode
  value?: string
  type?: HTMLInputElement['type']
  help?: string
  inline?: boolean
  onChange?: (v: string) => void
}

function TextInput({ label, value, type = 'text', help, inline, onChange }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e) return

    const value = e.target?.value || ''
    if (onChange) onChange(value)
  }

  return (
    <div className={cx('form-group', { row: inline })}>
      {label && <label className={cx({ 'col-sm-2 col-form-label': inline })}>{label}</label>}
      {inline ? (
        <div className="col-sm-10">
          <input type={type} className="form-control" value={value} onChange={handleChange} />
        </div>
      ) : (
        <input type={type} className="form-control" value={value} onChange={handleChange} />
      )}
      {help && <small className="form-text text-muted">We'll never share your email with anyone else.</small>}
    </div>
  )
}

export default TextInput
