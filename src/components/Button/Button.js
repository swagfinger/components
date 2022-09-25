import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { typeScale } from '../../utils';

const BUTTON_MODIFIERS = {
  small: () => css`
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,

  large: () => css`
    font-size: ${typeScale.header5};
    padding: 20px 24px;
  `
};

export const Button = styled.button.attrs((props) => ({
  children: props.label
}))`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 8px;
  min-width: 100px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  outline: none;

  ${(props) => {
    console.log('here: ', props);

    const interactiveStates = () => css`
      &:hover {
        background-color: ${props.theme.primaryColorHover};
        color: ${props.theme.textColorOnPrimary};
      }

      &:focus {
        outline: 3px solid ${props.theme.primaryColorHover};
        outline-offset: 2px;
      }

      &:active {
        background-color: ${props.theme.primaryColorActive};
        border-color: ${props.theme.primaryColorActive};
        color: ${props.theme.textColorOnPrimary};
      }
    `;

    switch (props.variation) {
      case 'primary':
        return css`  
          background-color: ${props.theme.primaryColor};
          border: none;
          color: ${props.theme.textColorOnPrimary};

          &:disabled{
            background-color ${props.theme.disabled};
            color: ${props.theme.textOnDisabled};
            cursor: not-allowed;
          }
          ${interactiveStates}
        `;

      case 'secondary':
        return css`
          background: none;
          border: 2px solid ${props.theme.primaryColor};
          color: ${props.theme.primaryColor};

          &:disabled {
            background: none;
            color: ${props.theme.disabled};
            border-color: ${props.theme.disabled};
            cursor: not-allowed;
          }
          ${interactiveStates}
        `;

      case 'tertiary':
        return css`
          background: none;
          border: none;
          color: ${props.theme.primaryColor};

          &:disabled {
            background: none;
            color: ${props.theme.disabled};
            cursor: not-allowed;
          }
          ${interactiveStates}
        `;

      case 'warning':
        return css`
          background-color: ${props.theme.status.warningColor};
          color: ${props.theme.textColorInverted};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            background-color: ${props.theme.status.warningColorHover};
            outline: 3px solid ${props.theme.status.warningColorHover};
            outline-offset: 2px;
          }
          &:active {
            background-color: ${props.theme.status.warningColorActive};
          }
        `;

      case 'error':
        return css`
          background-color: ${props.theme.status.errorColor};
          color: ${props.theme.textColorInverted};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            background-color: ${props.theme.status.errorColorHover};
            outline: 3px solid ${props.theme.status.errorColorHover};
            outline-offset: 2px;
          }
          &:active {
            background-color: ${props.theme.status.errorColorActive};
          }
        `;

      case 'success':
        return css`
          background: ${props.theme.status.successColor};
          color: ${props.theme.textColorInverted};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            background-color: ${props.theme.status.successColorHover};
            outline: 3px solid ${props.theme.status.successColorHover};
            outline-offset: 2px;
          }
          &:active {
            background-color: ${props.theme.status.successColorActive};
          }
        `;
    }
  }}

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
