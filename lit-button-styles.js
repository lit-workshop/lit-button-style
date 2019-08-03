import { LitElement, html } from 'lit-element';

class LitButtonStyles extends LitElement {
  render() {
    return html`
      <style>
        .btn {
          height: 30px;
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
