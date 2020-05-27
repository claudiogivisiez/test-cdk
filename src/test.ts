export const handler = async (event: any = {}): Promise<any> => {
    try {
        const response = { oi: 'test' };
        return { statusCode: 200, body: JSON.stringify(response) };
    } catch (dbError) {
        return { statusCode: 500, body: JSON.stringify(dbError) };
    }
};
