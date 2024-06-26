import { Component, ReactNode } from "react";

import { ErrorFallback } from "@/components/error-boundary/error-fallback";

type PropsType = {
  children?: ReactNode;
};

type StateType = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<PropsType, StateType> {
  constructor(props: Readonly<PropsType>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): StateType {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
