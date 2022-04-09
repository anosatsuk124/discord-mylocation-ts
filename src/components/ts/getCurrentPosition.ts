export const getCurrentPositionPromise = new Promise((resolve, reject): void => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const location = position.coords;
                resolve([location.latitude, location.longitude]);
            },
            (err) => {
                reject(err);
            }
        );
    }) as Promise<[number, number]>;
