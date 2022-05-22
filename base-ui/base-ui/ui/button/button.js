import React from 'react';
import {Button as RmwcButton} from '@rmwc/button'
import styled from 'styled-components'

const FilteredRmwcButton = (props) => <RmwcButton {...props} />
const StyledRmwcButton = styled(FilteredRmwcButton)`
  &&&.mdc-button--raised:not(:disabled),
  &&&.mdc-button--unelevated:not(:disabled) {
    color: var(--mdc-theme-on-primary);
  }
  &&&.mdc-button--outlined:not(:disabled) {
    color: var(--mdc-theme-text-primary-on-background);
    border-color: var(--mdc-theme-text-primary-on-background); 
  }
`
export function Button({children, ...otherProps}) {
  return <StyledRmwcButton {...otherProps}>{children}</StyledRmwcButton>
}