import variables from '../scss/_vendor.module.scss'

const {
  colorPrimary,
  colorSecondary,
  colorNeutral,
  colorDanger,
  colorSuccess,
  colorWarning,
  colorInfo,
  space4xsmall,
  space3xsmall,
  space2xsmall,
  spaceXsmall,
  spaceMedium,
  spaceLarge,
  spaceXlarge,
  space2xlarge,
  space3xlarge,
  space4xlarge,
  space5xlarge,
  space6xlarge,
  spaceRare,
  spaceXrare,
  breakpoint2xlarge,
  breakpointXlarge,
  breakpointLarge,
  breakpointMedium,
  breakpointSmall,
  breakpointXsmall,
  baseFontSize
} = variables

export function sassVars(str: string): Record<string, string | undefined> {
  switch (str) {
    case 'color':
      return {
        primary: colorPrimary,
        secondary: colorSecondary,
        neutral: colorNeutral,
        danger: colorDanger,
        success: colorSuccess,
        warning: colorWarning,
        info: colorInfo
      }
    case 'space':
      return {
        '4xsmall': space4xsmall,
        '3xsmall': space3xsmall,
        '2xsmall': space2xsmall,
        xsmall: spaceXsmall,
        medium: spaceMedium,
        large: spaceLarge,
        xlarge: spaceXlarge,
        '2xlarge': space2xlarge,
        '3xlarge': space3xlarge,
        '4xlarge': space4xlarge,
        '5xlarge': space5xlarge,
        '6xlarge': space6xlarge,
        rare: spaceRare,
        xrare: spaceXrare
      }
    case 'breakpoint':
      return {
        '2xlarge': breakpoint2xlarge,
        xlarge: breakpointXlarge,
        large: breakpointLarge,
        medium: breakpointMedium,
        small: breakpointSmall,
        xsmall: breakpointXsmall
      }
    case 'setting':
      return {
        baseFontSize
      }
    default:
      return {}
  }
}

export function sassSpaceValue(str: string) {
  const spaceVars = sassVars('space');
  const value = spaceVars[str];
  if (value?.endsWith('px')) {
    return `<code>${value}</code>`;
  }
  else {
    return `<code>${value}</code> (<code>${value ? (parseFloat(value) * parseFloat(sassVars('setting')['baseFontSize'] || '16')) + "px" : 'NaN'}</code>)`;
  }
}
