import React from 'react';
import styled, { keyframes } from 'styled-components';

const LodeCompoent = () => {
  return <Spinner />;
};

export default LodeCompoent;

// 회전 애니메이션 키프레임 정의
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// 스타일드 컴포넌트로 로딩 스피너 스타일링
const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  position: fixed;
  top: 50%;
  left: 50%;
`;
