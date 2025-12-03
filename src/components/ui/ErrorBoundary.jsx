import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-screen flex items-center justify-center bg-[#304056] text-white">
                    <div className="text-center p-8">
                        <h1 className="text-4xl font-voltaire uppercase mb-4">Oops! Something went wrong</h1>
                        <p className="text-lg mb-6 opacity-75">
                            The application encountered an error. Please refresh the page to try again.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-[rgb(235,116,152)] text-white rounded-full hover:bg-[rgb(215,96,132)] transition-colors duration-300"
                        >
                            Refresh Page
                        </button>
                        {import.meta.env.DEV && this.state.error && (
                            <details className="mt-8 text-left bg-black/30 p-4 rounded">
                                <summary className="cursor-pointer font-semibold mb-2">Error Details</summary>
                                <pre className="text-xs overflow-auto">
                                    {this.state.error.toString()}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
