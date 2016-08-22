import camelCase from 'lodash/camelCase';

/**
 * Recursively initializes a components hierarchy
 *
 * @param  {Object|Function} component        [Wrapper component|Leaf component]
 * @param  {Object}          styles           [Styles for every component]
 * @param  {Object}          parentComponents [Already initialized components from parent layers]
 * @param  {Array}           keyPath          [Path to current component]
 * @return {Object}                           [Initialized component or components hierarchy]
 */
const initComponent = (component, styles, parentComponents, keyPath = []) => {
  if (typeof component !== `function`) {
    return Object.keys(component).reduce((result, componentKey) => ({
      ...result,
      [componentKey]: initComponent(component[componentKey], styles, parentComponents, [...keyPath, componentKey]),
    }), {});
  } else {
    return component(styles[camelCase(keyPath[0])] || {}, parentComponents);
  }
};

/**
 * Initializes layer
 *
 * @param  {Object} layer            [Components object related to current layer]
 * @param  {Object} styles           [Styles for every component]
 * @param  {Object} parentComponents [Already initialized components from parent layers]
 * @return {Object}                  [Initialized components for current layer]
 */
const initLayer = (layer, styles, parentComponents) => {
  return Object.keys(layer).reduce((layerComponents, componentKey) => ({
    ...layerComponents,
    [componentKey]: initComponent(layer[componentKey], styles, parentComponents, [componentKey]),
  }), {});
};

/**
 * Initializes React UI
 *
 * @param  {Object} styles   [Styles for every component]
 * @param  {Array}  uiLayers [Components grouped into layer objects]
 * @return {Object}          [Initialized components object that is ultimately used by clients]
 */
const init = (...uiLayers) => (styles = {}) => uiLayers.reduce((initializedComponents, layer) => ({
  ...initializedComponents,
  ...initLayer(layer, styles, initializedComponents),
}), {});

export default init;
