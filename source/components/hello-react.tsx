import * as React from 'react'
import * as angular from 'angular'
import { react2angular } from 'react2angular'
import { PropTypes } from 'prop-types'

const HelloReact: React.StatelessComponent<any> = (props: any) => (
  <div>hello react {props.hello}<button onClick={props.test}>test</button></div>
)

HelloReact.propTypes = {
  hello: PropTypes.string,
  test: PropTypes.func
}

angular.module('helloReact', [])
.component('helloReact', react2angular(HelloReact))
