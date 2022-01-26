import React from 'react'
import AuthWrapper from '@/components/layout/AuthWrapper'
import { useHistory } from 'react-router-dom'

function Signup() {
  const history = useHistory()

  function onClick() {
    history.push('/')
  }

  function onGotoLogin() {
    history.push('/login')
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
        <input type="password" className="form-control" placeholder="비밀번호 재확인" />
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-block" onClick={onClick}>
          회원가입
        </button>
        <button className="btn btn-outline-secondary btn-block" onClick={onGotoLogin}>
          로그인하러 가기
        </button>
      </div>
    </AuthWrapper>
  )
}

export default Signup
