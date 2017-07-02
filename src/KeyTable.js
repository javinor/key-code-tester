'use strict'

const React = require('react')

const eventProperties = [
  'type',
  'altKey',
  'ctrlKey',
  'metaKey',
  'shiftKey',
  'repeat',
  'code',
  'key',
  'keyCode',
  'charCode',
  'which'
]

const boolean = [
  'altKey',
  'ctrlKey',
  'metaKey',
  'shiftKey',
  'repeat'
]

const depricated = [
  'charCode',
  'which'
]

const isLowlighted = (key) => depricated.indexOf(key) !== -1
const isHighlighted = (event, key) => boolean.indexOf(key) !== -1 && event[key]

const KeyTableHeader = () =>
  React.createElement('thead', null,
    React.createElement('tr', null,
      eventProperties.map((key, i) =>
        React.createElement('th', {key: i,
            style: {backgroundColor: isLowlighted(key) ? 'rgba(3, 10, 3, 0.1)' : 'inherit'}
          }, `${key}`)
      )
    )
  )

const KeyTableBody = (props) =>
  React.createElement('tbody', null,
    props.events.map((event, j) =>
      React.createElement('tr', {key: j},
        eventProperties.map((key, i) =>
          React.createElement('td', {
            key: i,
            style: {backgroundColor: isHighlighted(event, key) ? 'rgba(62, 188, 125, 0.1)' : 'inherit'}
          }, `${event[key]}`)
        )
      )
    )
  )

const KeyTable = (props) => {
  if (!props.events) {
    return React.createElement('h3', null, 'Press any key to see details of the key event')
  }

  return React.createElement('div', null, [
    React.createElement('h4', {key: 'intro'}, 'Each column is a property of the Key Event you created!'),
    React.createElement('table', {
      key: 'table',
      className: 'table table-sm table-condensed table-striped table-bordered table-hover'
    }, [
      React.createElement(KeyTableHeader, {key: 'thead'}),
      React.createElement(KeyTableBody, Object.assign({key: 'tbody'}, props))
    ])
  ])
}

module.exports = KeyTable
