import styled, { css } from 'styled-components'

const variants = {
  primary: {
    color: '#ffffff',
    backgroundColor: '#1D3461',
    border: 'none',
  },
  success: {
    color: '#ffffff',
    backgroundColor: '#5AB203',
    border: 'none',
  },
  transparent: {
    color: '#ff0000',
    backgroundColor: 'transparent',
    border: '5px solid black',
  },
} as const

export type StyledButtonProps = {
  variant: keyof typeof variants
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) => {
    // variantに与えられたキーを元に、対応するスタイルを取得する
    const style = variants[variant]

    // cssを使い、複数のスタイルを返す
    console.log("test")

    return css`
      color: ${style.color};
      background-color: ${style.backgroundColor};
      border: ${style.border};
    `;
  }}

  border-radius: 12px;
  font-size: 14px;
  height: 38px;
  line-height: 22px;
  letter-spacing: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`