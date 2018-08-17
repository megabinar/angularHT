# AngularElements

Functionality
--
* #1 no module bootstrap, just elements
* #2 init value input
* #3 communication through output-input
* #4 communication through shared service
* added conditional styles

Observations
--
* camelCase not works for inputs, only dash
* ViewEncapsulation.Native **breaks the styles**.
* styles.scss is the right place to link common styles. They will be put in styles.css in dist
* temporary set the polyfill version to "document-register-element": "1.8.1" until angular team fix the bug.