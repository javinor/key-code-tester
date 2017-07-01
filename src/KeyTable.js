'use strict'

const React = require('React')

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

const KeyTableHeader = () =>
  React.createElement('thead', null,
    React.createElement('tr', null,
      eventProperties.map((key, i) =>
        React.createElement('th', {key: i}, `${key}`)
      )
    )
  )

const KeyTableBody = (props) =>
  React.createElement('tbody', null,
    props.events.map((event, j) =>
      React.createElement('tr', {key: j},
        eventProperties.map((key, i) =>
          React.createElement('td', {key: i}, `${event[key]}`)
        )
      )
    )
  )

const KeyTable = (props) => {
  if (!props.events) {
    return React.createElement('h3', null, 'Press any key to see details of the key event')
  }

  return React.createElement('div', null, [
    React.createElement('h4', null, 'Each column is a property of the Key Event you created!'),
    React.createElement('table', {
      className: 'table table-sm table-condensed table-striped table-bordered table-hover'
    }, [
      React.createElement(KeyTableHeader),
      React.createElement(KeyTableBody, props)
    ])
  ])
}

module.exports = KeyTable
