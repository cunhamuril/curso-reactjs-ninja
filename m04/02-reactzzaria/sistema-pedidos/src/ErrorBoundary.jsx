import { PureComponent } from 'react'

/**
 * Este componente basicamente funciona como se fosse um Try Catch de erros em componentes
 */

class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log('error: ', error)
    console.log('info: ', info.componentStack)
  }

  render() {
    return this.props.children(this.state.hasError)
  }
}

export default ErrorBoundary
