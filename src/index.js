import camelCase from 'lodash/camelCase';

/**
 * Recursively initialize a components hierarchy
 * @param  {Object|Function} component             [Function if a leaf component is supplied, Object if a wrapper component is detected]
 * @param  {Object}          styles                [Global styles object]
 * @param  {Object}          parentLayerComponents [An object of already initialized components from parent layer]
 * @param  {Array}           keyPath               [Path to current component]
 * @return {Object}                                [An object containing initialized component or components hierarchy]
 */
const initComponent = (component, styles, parentLayerComponents, keyPath = []) => {
  if (typeof component !== `function`) {
    return Object.keys(component).reduce((result, componentKey) => ({
      ...result,
      [componentKey]: initComponent(component[componentKey], styles, parentLayerComponents, [...keyPath, componentKey]),
    }), {});
  } else {
    return component(styles[camelCase(keyPath[0])] || {}, parentLayerComponents);
  }
};

/**
 * Recursive initialization of a layer
 * @param  {Object} layer                 [Components object related to current UI abstraction layer]
 * @param  {Object} styles                [Global styles object]
 * @param  {Object} parentLayerComponents [An object of already initialized components from parent layer]
 * @return {Object}                       [An object containing initialized components for current layer]
 */
const initLayer = (layer, styles, parentLayerComponents) => {
  return Object.keys(layer).reduce((layerComponents, componentKey) => ({
    ...layerComponents,
    [componentKey]: initComponent(layer[componentKey], styles, parentLayerComponents, [componentKey]),
  }), {});
};

/**
 * React UI initialization
 * @param  {Object} styles [Styles for every component]
 * @return {Object}        [UI object that contains initialized components]
 */
const init = (styles = {}) => (...uiLayers) => uiLayers.reduce((initializedComponents, layer) => ({
  ...initializedComponents,
  ...initLayer(layer, styles, initializedComponents),
}), {});

export default init;
