import React, { useState } from 'react';

function CounselorForm() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [oddEven, setOddEven] = useState('');
  const [experience, setExperience] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    } else if (step === 4) {
      setStep(5);
    } else if (step === 5) {
      setStep(6);
    } else if (step === 6) {
      const newData = { firstName, lastName, branch, year, oddEven, experience };
      console.log('Submitted:', newData);
      setSubmittedData([...submittedData, newData]);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setStep(1);
    setFirstName('');
    setLastName('');
    setBranch('');
    setYear('');
    setOddEven('');
    setExperience('');
    setSubmitted(false);
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, ''); // Filter out non-alphabetic characters
    setFirstName(value);
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, ''); // Filter out non-alphabetic characters
    setLastName(value);
  };

  const handleBranchChange = (e) => {
    const value = e.target.value;
    setBranch(value);
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    setYear(value);
  };

  const handleOddEvenChange = (e) => {
    const value = e.target.value;
    setOddEven(value);
  };

  const handleExperienceChange = (e) => {
    const value = e.target.value;
    setExperience(value);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div align="center" style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center' }}>CounselorForm</h2>
        {submitted ? (
          <div>
            <h2>Thank you for submitting!</h2>
            <button onClick={handleReset} style={{ marginTop: '10px' }}>Submit another response</button>
            <div style={{ marginTop: '20px' }}>
              <h2>Submitted Details</h2>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>First Name</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Last Name</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Branch</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Year</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Odd/Even</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedData.map((data, index) => (
                    <tr key={index}>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{data.firstName}</td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{data.lastName}</td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{data.branch}</td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{data.year}</td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{data.oddEven}</td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{data.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {step === 1 && (
              <label style={{ marginBottom: '10px', textAlign: 'left', width: '300px' }}>
                First Name:
                <input
                  type="text"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  style={{ fontSize: '20px', marginLeft: '10px', padding: '5px', borderRadius: '5px' }}
                />
              </label>
            )}
            {step === 2 && (
              <label style={{ marginBottom: '10px', textAlign: 'left', width: '300px' }}>
                Last Name:
                <input
                  type="text"
                  value={lastName}
                  onChange={handleLastNameChange}
                  style={{ fontSize: '20px', marginLeft: '10px', padding: '5px', borderRadius: '5px' }}
                />
              </label>
            )}
            {step === 3 && (
              <label style={{ marginBottom: '10px', textAlign: 'left', width: '300px' }}>
                Branch:
                <select
                  value={branch}
                  onChange={handleBranchChange}
                  style={{ fontSize: '20px', marginLeft: '10px', padding: '5px', borderRadius: '5px' }}
                >
                  <option value="">Select</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="MECH">MECH</option>
                  <option value="CE">CE</option>
                  <option value="AIDS">AIDS</option>
                </select>
              </label>
            )}
            {step === 4 && (
              <label style={{ marginBottom: '10px', textAlign: 'left', width: '300px' }}>
                Year:
                <input
                  type="number"
                  value={year}
                  onChange={handleYearChange}
                  style={{ fontSize: '20px', marginLeft: '10px', padding: '5px', borderRadius: '5px' }}
                />
              </label>
            )}
            {step === 5 && (
              <label style={{ marginBottom: '10px', textAlign: 'left', width: '300px' }}>
                Odd/Even:
                <select
                  value={oddEven}
                  onChange={handleOddEvenChange}
                  style={{ fontSize: '20px', marginLeft: '10px', padding: '5px', borderRadius: '5px' }}
                >
                  <option value="">Select</option>
                  <option value="Odd">Odd</option>
                  <option value="Even">Even</option>
                </select>
              </label>
            )}
            {step === 6 && (
              <label style={{ marginBottom: '10px', textAlign: 'left', width: '300px' }}>
                Experience (in years):
                <input
                  type="number"
                  value={experience}
                  onChange={handleExperienceChange}
                  style={{ fontSize: '20px', marginLeft: '10px', padding: '5px', borderRadius: '5px' }}
                />
              </label>
            )}
            {step < 6 && (
              <button type="submit" style={{ fontSize: '20px', padding: '8px 20px', marginTop: '10px', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>Next</button>
            )}
            {step === 6 && (
              <button type="submit" style={{ fontSize: '20px', padding: '8px 20px', marginTop: '10px', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>Submit</button>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default CounselorForm;
