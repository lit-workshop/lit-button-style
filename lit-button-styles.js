import { LitElement, html } from 'lit-element';

/**
 * `lit-button-styles`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LitButtonStyles extends LitElement {
  render() {
    return html`
      <style>
        .btn {
          height: 30px;
          width: 40px;
          border: 1px solid var(--neutral-color);
          font-size: var(--font-size-small);
          border-radius: 4px;
        }
      </style>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

window.customElements.define('lit-button-styles', LitButtonStyles);
