import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
  constructor(props) {
     super(props);
     this.state = { error: null, errorInfo: null, hasError: false};
   }

   // static getDerivedStateFromError(error) {
   //   // Update state so the next render will show the fallback UI.
   //   return { hasError: true };
   // }

   componentDidCatch(error, errorInfo) {
     // You can also log the error to an error reporting service
     this.setState({
      error: error,
      errorInfo: errorInfo
    })
   }

   render() {
     if (this.state.error) {
       return (
         <Fragment>
           <h1>Something went wrong.</h1>
           {this.state.error && this.state.error.toString()}
           <br />
           {this.state.errorInfo.componentStack}
         </Fragment>
       );
     }

     return this.props.children;
   }
}

export default ErrorBoundary;
