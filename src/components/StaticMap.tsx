import { Box, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { staticMapUrl } from './ts/embeddedMap';

export const StaticMap = (): JSX.Element => {
    const [url, setUrl] = useState('');
    useEffect(() => {
        (async () => {
            setUrl(await staticMapUrl());
        })();
    });
    return (
        <Box>
            <Image src={url} />
        </Box>
    );
};
