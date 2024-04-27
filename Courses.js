import React, { useState, useEffect } from 'react';

function Courses() {
  const [year, setYear] = useState('');
  const [oddEven, setOddEven] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [remainingSubjects, setRemainingSubjects] = useState([]);

  const subjectsByYearOddEven = {
    '1-Odd': ['Maths', 'DTI', 'DTW', 'DS', 'JAVA', 'C', 'COA', 'DIS'],
    '1-Even': ['Maths', 'DTI', 'DTW', 'DS', 'JAVA', 'C', 'COA', 'DIS'],
    '2-Odd': ['MP', 'PSQT', 'AOOP', 'PYTHON', 'PSRS', 'ENGLISH'],
    '2-Even': ['MP', 'PSQT', 'AOOP', 'PYTHON', 'PSRS', 'ENGLISH'],
    '3-Odd': ['ML', 'JSFS', 'AIDS', 'NPS'],
    '3-Even': ['ML', 'JSFS', 'AIDS', 'NPS'],
    '4-Odd': ['Subject1', 'Subject2', 'Subject3', 'Subject4'], // Add your subjects for year 4 odd
    '4-Even': ['Subject1', 'Subject2', 'Subject3', 'Subject4'], // Add your subjects for year 4 even
  };

  useEffect(() => {
    // Retrieve selected subjects from local storage
    const savedSubjects = JSON.parse(localStorage.getItem('selectedSubjects'));
    if (savedSubjects) {
      setSelectedSubjects(savedSubjects);
    }
  }, []);

  useEffect(() => {
    // Save selected subjects to local storage
    localStorage.setItem('selectedSubjects', JSON.stringify(selectedSubjects));
  }, [selectedSubjects]);

  const getRandomTime = () => {
    const startHours = Math.floor(Math.random() * (17 - 8) + 8); // Random hours between 8 and 17 (5 pm)
    const startMinutes = Math.random() < 0.5 ? '00' : '30'; // Randomly choose between :00 and :30
    const endHours = startHours + Math.floor(Math.random() * (3 - 1) + 1); // Random duration between 1 and 3 hours
    const endMinutes = startMinutes;
    return {
      startTime: `${startHours}:${startMinutes}`,
      endTime: `${endHours}:${endMinutes}`
    };
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    setYear(value);
    setOddEven('');
    setSelectedSubjects([]);
    // Set remaining subjects based on the selected year
    setRemainingSubjects(subjectsByYearOddEven[`${value}-Odd`]);
  };

  const handleOddEvenChange = (e) => {
    const value = e.target.value;
    setOddEven(value);
    setSelectedSubjects([]);
    // Set remaining subjects based on the selected year and semester
    setRemainingSubjects(subjectsByYearOddEven[`${year}-${value}`]);
  };

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    const { startTime, endTime } = getRandomTime();
    const roomNumber = Math.floor(Math.random() * 10) + 1; // Random room number between 1 and 10
    const subjectInfo = { name: value, startTime, endTime, roomNumber, oddEven };

    if (!selectedSubjects.some((subject) => subject.name === value)) {
      setSelectedSubjects([...selectedSubjects, subjectInfo]);
      // Remove selected subject from remaining subjects
      setRemainingSubjects(remainingSubjects.filter((subject) => subject !== value));
    } else {
      setSelectedSubjects(selectedSubjects.filter((subject) => subject.name !== value));
      // Add selected subject back to remaining subjects
      setRemainingSubjects([...remainingSubjects, value]);
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div align="center" style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center' }}>Courses Registration</h2>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label style={{ marginBottom: '10px' }}>
            Select Year:
            <select value={year} onChange={handleYearChange} style={{ fontSize: '20px', marginLeft: '10px', padding: '5px', borderRadius: '5px' }}>
              <option value="">Select</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </label>
          {year && (
            <label style={{ marginBottom: '10px' }}>
              Select Odd/Even:
              <select value={oddEven} onChange={handleOddEvenChange} style={{ fontSize: '20px', marginLeft: '10px', padding: '5px', borderRadius: '5px' }}>
                <option value="">Select</option>
                <option value="Odd">Odd</option>
                <option value="Even">Even</option>
              </select>
            </label>
          )}
          {oddEven && (
            <div style={{ marginBottom: '10px', textAlign: 'left', width: '300px' }}>
              <p>Select Subjects:</p>
              {subjectsByYearOddEven[`${year}-${oddEven}`].map((subject, index) => (
                <label key={index} style={{ display: 'block' }}>
                  <input type="checkbox" value={subject} checked={selectedSubjects.some((s) => s.name === subject)} onChange={handleSubjectChange} style={{ marginRight: '5px' }} />
                  {subject}
                </label>
              ))}
            </div>
          )}
        </form>
        <div style={{ marginTop: '20px' }}>
          <h2>Selected Subjects:</h2>
          <table style={{ borderCollapse: 'collapse', width: '70%', textAlign: 'center' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px' }}>Subject</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Start Time</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>End Time</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Room Number</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Semester</th>
              </tr>
            </thead>
            <tbody>
              {selectedSubjects.map((subject, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{subject.name}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{subject.startTime}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{subject.endTime}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{subject.roomNumber}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{subject.oddEven}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: '20px' }}>
          <h2>Remaining Subjects:</h2>
          <ul>
            {remainingSubjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Courses;
