import camelCase from 'lodash/camelCase';

const recursiveInitComponent = (component, styles, initializedUI, keyPath = []) => {
  if (typeof component !== `function`) {
    return Object.keys(component).reduce((result, componentKey) => ({
      ...result,
      [componentKey]: recursiveInitComponent(component[componentKey], styles, initializedUI, [...keyPath, componentKey]),
    }), {});
  } else {
    return component(styles[camelCase(keyPath[0])] || {}, initializedUI);
  }
};

const init = (styles = {}) => (...uiLayers) => uiLayers.reduce((initializedUI, layer) => ({
  ...initializedUI,
  ...recursiveInitComponent(layer, styles, initializedUI),
}), {});

export default init;
