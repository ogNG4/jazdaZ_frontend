export const decodeToken = (value: string) => {
  const parts = value.split('.');
  if (parts.length === 3) {
    const payload = parts[1];
    const decodedPayload = Buffer.from(payload, 'base64').toString('utf8');

    return JSON.parse(decodedPayload);
  }
};
