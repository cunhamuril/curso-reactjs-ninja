import { PureComponent } from "react";

/**
 * Este componente basicamente funciona como se fosse um Try Catch de erros em componentes
 */

class ErrorBoundary extends PureComponent {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("error: ", error);
    console.log("info: ", info.componentStack);
  }

  // render() {
  //   if (this.state.hasError) {
  //     return <h1>Deu erro!</h1>;
  //   }

  //   return this.props.children;
  // }

  render() {
    return this.props.children(this.state.hasError);
  }
}

export default ErrorBoundary;
