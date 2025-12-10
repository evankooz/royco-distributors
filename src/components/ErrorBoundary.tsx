import React, { type ReactNode } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background: #fff;
`;

const ErrorContent = styled.div`
  background: #ffebee;
  border: 2px solid #f44336;
  border-radius: 8px;
  padding: 2rem;
  color: #c62828;
`;

const ErrorTitle = styled.h1`
  color: #d32f2f;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const ErrorMessage = styled.p`
  margin: 1rem 0;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ErrorDetails = styled.pre`
  background: #fff3e0;
  border: 1px solid #ff9800;
  border-radius: 4px;
  padding: 1rem;
  margin: 1.5rem 0;
  overflow-x: auto;
  text-align: left;
  color: #e65100;
  font-size: 0.875rem;
  max-height: 300px;
  overflow-y: auto;
`;

const ReloadButton = styled.button`
  background: #d32f2f;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #c62828;
  }
`;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error): void {
    // Log to console in development
    console.error('Error caught by boundary:', error);
    // In production, you could send this to an error tracking service
    // e.g., Sentry.captureException(error);
  }

  handleReload = (): void => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorContent>
            <ErrorTitle>Oops! Something went wrong</ErrorTitle>
            <ErrorMessage>
              We're sorry for the inconvenience. An unexpected error has occurred.
            </ErrorMessage>
            <ErrorMessage>
              Please try refreshing the page or contact us if the problem persists.
            </ErrorMessage>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <ErrorDetails>
                {this.state.error.toString()}
                {'\n\n'}
                {this.state.error.stack}
              </ErrorDetails>
            )}
            <ReloadButton onClick={this.handleReload}>
              Refresh Page
            </ReloadButton>
          </ErrorContent>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
