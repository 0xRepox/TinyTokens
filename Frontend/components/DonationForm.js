import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeDonation } from '../services/donationService';

function DonationForm() {
  const { causeId } = useParams();
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = 'your-user-id';  // Replace with actual user ID
    const response = await makeDonation(userId, causeId, amount);
    if (response.success) {
      alert('Donation successful!');
    } else {
      alert('Donation failed: ' + response.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Donation Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <button type="submit">Donate</button>
    </form>
  );
}

export default DonationForm;
