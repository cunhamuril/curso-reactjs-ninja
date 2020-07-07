import { PureComponent } from "react";

class ErrorBoundary extends PureComponent {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
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
