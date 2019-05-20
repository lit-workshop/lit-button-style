import { LitElement, html, css } from 'lit-element';

/**
 * `lit-button-styles`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LitButtonStyles extends LitElement {
  static get styles() {
    return css`
      .btn {
        height: 30px;
        border: 1px solid var(--neutral-color);
        font-size: var(--font-size-small);
        border-radius: 4px;
      }
    `;
  }
  render() {
    return html``;
  }

  createRenderRoot() {
    return this;
  }
}

window.customElements.define('lit-button-styles', LitButtonStyles);
