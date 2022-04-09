import { Box, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getCurrentPositionPromise } from './ts/getCurrentPosition';

export const GetLocation = (): JSX.Element => {
    const [position, setPosition] = useState([0, 0]);
    useEffect(() => {
        (async () => {
            const location = await getCurrentPositionPromise;
            setPosition(location);
        })();
    });
    return (
        <Box>
            <Text>
                {position[0]}, {position[1]}
            </Text>
        </Box>
    );
};
