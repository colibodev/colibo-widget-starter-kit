import { LitElement, html, css} from "lit";
import { customElement, property } from "lit/decorators.js";

declare global {
    interface Window { colibo: any; }
}

interface Configuration {
    forDemo: boolean;
}

@customElement("colibo-demo-widget")
export class ColiboDemoWidgetElement extends LitElement {
    static styles = [css`
    `];

    _conf: Configuration = { forDemo: true };

    @property()
    set configuration(newVal: Configuration) {
        this._conf = newVal;
    }

    get configuration(): Configuration {
        return this._conf;
    }

    render() {
        return html`
            ${ this.configuration.forDemo
                ? html`<div>This is a demo template</div>`
                : html`<div>Hello World</div>`
            }
        `;
    }
}
