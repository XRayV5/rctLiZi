var React = require('react')
var PropTypes = React.PropTypes
var styles = require('../style')
var ReactRouter =require('react-router')
var Link = ReactRouter.Link


const MainContainer = (props) => (
  <div className="jumbotron col-sm-12 text-center" style={ styles.transparentBg }>
    { props.children }
  </div>
)


module.exports = MainContainer
