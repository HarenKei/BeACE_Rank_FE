import React from 'react';
import { useCookie } from '@/src/Common/Cookie';

const LogoutButton = () => {
  const { deleteCookie } = useCookie();

  const handleLogout = () => {
    deleteCookie(); // deleteCookie 함수 호출
    // 추가적인 로그아웃 처리가 필요하다면 이 부분에 추가
  };

  return (
    <button onClick={handleLogout}>
      로그아웃
    </button>
  );
};

export default LogoutButton;