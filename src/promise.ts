/**
 * Call an array of promises in order, waiting for each promise to resolve before calling the next.
 */
export async function callSequentially(
    promises: Array<() => Promise<unknown>>,
): Promise<unknown> {
    return promises.reduce(
        async (promise: Promise<unknown>, callback): Promise<unknown> => {
            await promise;
            return callback();
        },
        Promise.resolve(),
    );
}

/**
 * Map an array using an asynchronous callback function, waiting for each promise to resolve before calling the next.
 */
export async function mapSequentially<TValue, TResult>(
    array: Array<TValue>,
    callbackFn: (value: TValue) => Promise<TResult>,
): Promise<Array<TResult>> {
    const results: Array<TResult> = [];

    await array.reduce(async (promise: Promise<unknown>, value) => {
        await promise;
        const result = await callbackFn(value);
        results.push(result);
    }, Promise.resolve());

    return results;
}
