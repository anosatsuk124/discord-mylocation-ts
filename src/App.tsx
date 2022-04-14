import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/provider';
import { Box, Code, list, Text } from '@chakra-ui/react';
import { GetLocation } from './components/GetLocation';
import { GoogleMap } from './components/GoogleMap';

const App = (): JSX.Element => {
    return (
        <Box className="App">
            <p>Hello Vite + React!</p>
            <Box>
                Edit <Code>App.tsx</Code> and save to test HMR updates.
            </Box>
            <GoogleMap />
            <p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {' | '}
                <a
                    className="App-link"
                    href="https://vitejs.dev/guide/features.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vite Docs
                </a>
            </p>
        </Box>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
