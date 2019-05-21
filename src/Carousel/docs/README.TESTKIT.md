# Polyfills

It is important to make sure you require the matchMedia polyfill before you test your component.

```javascript
import { matchMediaPolyfill } from 'wix-style-react/dist/testkit/polyfills';

beforeAll(() => {
  matchMediaPolyfill.install();
});

afterAll(() => {
  matchMediaPolyfill.uninstall();
});
```
