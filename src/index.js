import camelCase from 'lodash/camelCase';

const recursiveInitComponent = (component, styles, composes, keyPath = []) => {
  if (typeof component !== `function`) {
    return Object.keys(component).reduce((result, componentKey) => ({
      ...result,
      [componentKey]: recursiveInitComponent(component[componentKey], styles, composes, [...keyPath, componentKey]),
    }), {});
  } else {
    return component(styles[camelCase(keyPath[0])] || {}, composes);
  }
};

export default ({ components = {}, styles = {}, composes = {} } = {}) => ({
  ...composes,
  ...recursiveInitComponent(components, styles, composes, []),
});
