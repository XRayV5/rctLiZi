when a component mounts or unmounts.
Here are some things that we may need to do:

  Establish some default props in our component

  Set some initial state in our component

  Make an Ajax request to fetch some data needed for this component
      (componentDidMount)
  Set up any listeners (ie Websockets or Firebase listeners)
      (componentDidMount)
  Remove any listeners you initially set up (when unmounted)
      (componentWillUnmount)



This key word

implicit binding

The Context of where the function is invoked decides the reference of this key word

Explicit binding

functionName.call(objectOfContext)
functionName.call(objectOfContext, arg1forfunction, arg2forfunction, arg3...)
functionName.apply(objectOfContext, arrayOfArguments)
functionName.bind()

var newfunctionReturned = functionName.bind(objectOfContext, arg1forfunction, arg2forfunction, arg3...) //not inovked immediately

newfunctionReturned() //invoked separately

new binding

When a function is invoked with 'new' keyword, the keyword this used inside the function is auto binded to the constructor object created with the invoked function

default binding

If a function is inovked, and it is not a property of any object( means not inovked by something from the left of the '.' ), and it is not binded using 'new', and it is not using 'bind()', 'call()', 'apply()'
  Then, the 'this' keyword inside the function is by default, point to the window object ( global scope )



propTypes.shape()

Go deeper and add type constraint to properties of an object


Generally, it is an anti-pattern in react that set the value of its state to the value of a prop that is passed down.
    - state duplication
However, if the prop is only being read (e.g set as initial state see following)
then it's not an anti pattern
getInitialState : function() {


  this.originalText = this.props.text
  return {
    text: this.originalText
  }
},
