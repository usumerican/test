/* eslint-env browser */
/* global __APP_VERSION__ */

window.test = () => {
  const el = document.createElement('div');
  el.textContent = `${document.title} ${__APP_VERSION__}, coi: ${window.crossOriginIsolated}`;
  document.body.appendChild(el);
};
