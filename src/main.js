'use strict'

require('./main.css')
require('bootstrap/dist/css/bootstrap.min.css')

const React = require('react')
const ReactDom = require('react-dom')
const KeyTable = require('./KeyTable')

const MAX_NUM_OF_EVENTS = 20
const events = []
const addEvent = (event) => {
  events.unshift(event)
  if (events.length > MAX_NUM_OF_EVENTS) events.pop()
  render({events})
}

const eventNames = [
  'keydown',
  'keypress',
  'keyup'
]
eventNames.forEach(name => window.addEventListener(name, addEvent))

const render = (props) => {
  requestAnimationFrame(() => ReactDom.render(
    React.createElement(KeyTable, props),
    document.querySelector('#app')
  ))
}

render()
