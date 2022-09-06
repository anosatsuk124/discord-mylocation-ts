import { Box, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { googleMapUrl } from './ts/googleMap';

// Rendering a Google map component
export const GoogleMap = (): JSX.Element => {
    const [url, setUrl] = useState('');
    useEffect(() => {
        (async () => {
            setUrl(await googleMapUrl());
        })();
    });
    return (
        <Box>
            <iframe width="750" height="650" src={url} scrolling="no"></iframe>
        </Box>
    );
};
