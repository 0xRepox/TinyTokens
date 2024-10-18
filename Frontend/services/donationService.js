export const makeDonation = async (userId, charityId, amount) => {
  const response = await fetch('/api/donations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, charityId, amount })
  });
  return response.json();
};
