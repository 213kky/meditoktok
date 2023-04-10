import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KakaoLoginButton from './kakao_login_button.png'

const KAKAO_REST_API_KEY = '74a35f3b7af1de62c09794f8e2c630cb'; // REST API 키
const REDIRECT_URI = 'http://localhost:3000/callback'; // 콜백 URL
const SCOPE = 'profile_nickname, account_email, gender'; // 요청할 동의항목

function LoginKakao() {
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  // 카카오 로그인 함수
  const handleKakaoLogin = () => {
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;
    window.location.href = url;
  };

  // 액세스 토큰을 발급받고 사용자 정보를 가져오는 함수
  const getUserInfo = async (code) => {
    const tokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`;
    const tokenResponse = await axios.post(tokenUrl);
    setAccessToken(tokenResponse.data.access_token);

    const userInfoUrl = 'https://kapi.kakao.com/v2/user/me';
    const headers = {
      Authorization: `Bearer ${tokenResponse.data.access_token}`,
    };
    const userInfoResponse = await axios.get(userInfoUrl, { headers });
    setUserInfo(userInfoResponse.data);
  };

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const authorizationCode = urlParams.get('code');

    if (authorizationCode) {
      getUserInfo(authorizationCode);
    }
  }, []);

  // 로그아웃 함수
  const handleLogout = async () => {
    const url = 'https://kapi.kakao.com/v1/user/logout';
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    await axios.post(url, null, { headers });
    setAccessToken('');
    setUserInfo(null);
  };

  const renderUserInfo = () => {
    if (userInfo) {
      alert(`${userInfo.properties.nickname}님 환영합니다!`);
    }
    return null;
  };

  return (
    <div>
      {accessToken ? (
        <div>
          {renderUserInfo()}
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div className='kakaoLogin'>
          <button onClick={handleKakaoLogin}>
            <img src={KakaoLoginButton} alt="카카오 로그인"
            style={{}} />
          </button>
        </div>
      )}
    </div>
  );

}

export default LoginKakao;
