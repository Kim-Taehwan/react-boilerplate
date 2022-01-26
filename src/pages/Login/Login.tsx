import React from 'react'
import { observer } from 'mobx-react'
import AuthWrapper from '@/components/layout/AuthWrapper'
import { useHistory } from 'react-router-dom'

function Login() {
  const history = useHistory()

  function onClick() {
    history.push('/')
  }

  function onGotoSignup() {
    history.push('/signup')
  }

  return (
    <AuthWrapper>
      <div className="form-group">
        <input type="email" className="form-control" placeholder="이메일을 입력해주세요" />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" placeholder="비밀번호를 입력해주세요" />
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-block" onClick={onClick}>
          로그인
        </button>
        <button className="btn btn-outline-secondary btn-block" onClick={onGotoSignup}>
          회원가입
        </button>
      </div>
    </AuthWrapper>
  )
}

export default observer(Login)
