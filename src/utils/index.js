// @flow

function addHiddenClass (condition: boolean, classNames: string): string {
  return `${classNames} ${condition ? '' : 'hidden'}`
}

export { addHiddenClass }
