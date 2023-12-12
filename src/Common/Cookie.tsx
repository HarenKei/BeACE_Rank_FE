import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface CookieContextProps {
    cookieValue: string | null;
    setCookie: (value: string) => void;
    deleteCookie: () => void;
  }

// 초기 상태는 빈 문자열 또는 기본값으로 설정
const CookieContext = createContext<CookieContextProps | undefined>(undefined);

interface CookieProviderProps {
    children: ReactNode;
  }

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
    const [cookieValue, setCookieValue] = useState<string | null>(Cookies.get('cookie : ') || '');
  
    const setCookie = (value: string) => {
      setCookieValue(value);
      Cookies.set('cookie_name', value);
    };

    const deleteCookie = () => {
        Cookies.remove('cookie_name');
        setCookieValue(null);
      };

    useEffect(() => {
        // 컴포넌트가 마운트될 때, 저장된 쿠키 값을 가져와서 초기화
        const initialCookie = Cookies.get('cookie_name');
        if (initialCookie) {
          setCookieValue(initialCookie);
        }
      }, []);
  
    return (
      <CookieContext.Provider value={{ cookieValue, setCookie, deleteCookie }}>
        {children}
      </CookieContext.Provider>
    );
  };

export const useCookie = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookie는 반드시 CookieProvider와 함께 사용되어야 합니다.');
  }
  return context;
};