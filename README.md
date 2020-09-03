# Front End Technical Assessment

## Overview

Create a [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) using LitElement and Typescript
that can render markdown. The component should be able to render the markdown client side,
or send the markdown to an API endpoint to be rendered.

## Requirements

- [ ] Ability to render markdown client side - given a plain text string or file of markdown, make it possible to render it as HTML.
- [ ] Ability to call http service to render markdown - use an API that is capable of rendering markdown as an alternative to using local rendering
- [ ] Make an option for all links in the rendered markdown to open in a new tab - markdown includes links, so make sure that those open in a new tab
- [ ] Publish the component to `npm`
- [ ] Create a separate project with the Angluar or Vue CLI in the "consumer" sub-folder and use your newly published package in it
- [ ] Document web component API / usage

Use 3rd party libraries as needed.

## Provided Markdown Service

You can run the provided markdown serivce with either of the following methods:

1. Docker Compose
  - in the `markdown-server` folder run `docker-compose up`
2. Manually
  - install nodejs/npm (node 10 is known working, other versions untested)
  - be in the `markdown-server` folder
  - run `npm install`
  - run `npm start`

The API is very simple, a POST request with markdown text body to `/markdown` will return html text

There is an example http request in `markdown-server/example-requests`

## Considerations

* The web component does not need to support IE11, just latest versions of modern browsers

## References

* [open-wc](https://open-wc.org/)
* [lit-element](https://lit-element.polymer-project.org/)
* [Relevant blog post](https://levelup.gitconnected.com/creating-a-web-component-with-open-wc-fe1922128080)

## Output

Your output for this assessment should be code committed to the git bundle provided to you where you found this readme
