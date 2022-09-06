import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/provider';
import { Box, Code, list, Text } from '@chakra-ui/react';
import { GoogleMap } from './components/GoogleMap';

const App = (): JSX.Element => {
    return (
        <Box className="App">
            <GoogleMap />
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
