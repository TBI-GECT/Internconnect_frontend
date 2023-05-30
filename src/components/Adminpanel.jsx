import React, { useState, useEffect } from 'react';
import './Adminpanel.css';
// import axios from 'axios';
import { CSVLink } from 'react-csv';  
function Adminpanel({ userData }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/app/adminpanel', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userData');
        setData(data.data);
      });
  }, []);

  useEffect(() => {
    setFilteredData(search(data));
  }, [data, query]);

  const logout = () => {
    window.localStorage.clear();
    window.location.href = '/';
  };
  const keys=["firstName","lastName","email","phone","college"];
  const search = (data) => {
    return data.filter((item) => 
    keys.some((key)=>{
      const property = item[key];
      return property && property.toLowerCase().includes(query)})
    );
  };
  //delete row

  // const deleteRow = (id) => {
  //   fetch(`https://internconnect-backend-production.up.railway.app/app/adminpanel/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result.success) {
  //         // Remove the deleted row from the data state
  //         const updatedData = data.filter((item) => item.id !== id);
  //         setData(updatedData);
  //       } else {
  //         console.error('Error deleting row:', result.error);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error deleting row:', error);
  //     });
  // };
  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`https://internconnect-backend-production.up.railway.app/app/adminpanel/${id}`);
  //     setData(data.filter((item) => item._id !== id));
  //   } catch (error) {
  //     console.error('Error deleting data:', error);
  //   }
  // };
  const csvHeaders = [
    { label: 'Date', key: 'date' },
    { label: 'Firstname', key: 'firstName' },
    { label: 'Lastname', key: 'lastName' },
    { label: 'Email', key: 'email' },
    { label: 'Phone no', key: 'phone' },
    { label: 'College', key: 'college' },
    { label: 'Branch',key:'branch'},
    { label: 'Year',key:'year'},
    { label: 'Github', key: 'github' },
    { label: 'Linkedin', key: 'linkedin' },
    { label: 'Resume', key: 'resume' },
    { label: 'Web development', key: 'webdev' },
    { label: 'App development', key: 'appdev' },
    { label: 'ML', key: 'ml' },
    { label: 'AI', key: 'ai' },
    { label: 'Embedded', key: 'embedded' },
    { label: 'Mech', key: 'mech' },
    { label: 'Java', key: 'java' },
    { label: 'SpringBoot', key: 'springboot' },
    { label: 'Javascript', key: 'javascript' },
    { label: 'Solid works', key: 'solidwork' },
    { label: 'Autocad', key: 'autocad' }
   
    // Add more headers as needed
  ];
  return (
    <div className="adminpanel">
      <div className="innerpart">
        <div className="uppart">
          <h2>Admin Panel</h2>
            < CSVLink 
              data={data}
              headers={csvHeaders}
              filename="registered_data.csv"
              className="exportbtn"
              target="_blank"> 
            <button className="sheet">Export</button>
            </CSVLink>
           
             < CSVLink 
              data={filteredData}
              headers={csvHeaders}
              filename="registered_data.csv"
              className="exportbtn"
              target="_blank"> 
            <button className="filtersheet">Filtered data</button>
            </CSVLink>
            <button onClick={logout} className="logoutbutton">
            Logout
             </button>
        </div>
        <input
          type="text"
          className="search"
          placeholder="Search ..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="tabfull">
        <table className="tab">
          <thead>
            <tr>
              <th>Date</th>
              <th>Firstname</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>College</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Github</th>
              <th>Linkedin</th>
              <th>Resume</th>
              <th>Webdev</th>
              <th>Appdev</th>
              <th>ML</th>
              <th>AI</th>
              <th>Embedded</th>
              <th>Mech</th>
              <th>Java</th>
              <th>Springboot</th>
              <th>Javacript</th>
              <th>Solidwork</th>
              <th>Autocad</th>
              {/* <th>Action</th> */}
              
            </tr>
          </thead>
          <tbody>
            {filteredData.map((i) => (
              <tr key={i._id}>
                <td>{i.date}</td>
                <td>{i.firstName}</td>
                <td>{i.lastName}</td>
                <td>{i.email}</td>
                <td>{i.phone}</td>
                <td>{i.college}</td>
                <td>{i.branch}</td>
                <td>{i.year}</td>
                <td>{i.github}</td>
                <td>{i.linkedin}</td>
                <td>{i.resume}</td>
                <td>{i.webdev ? 'Yes' : 'No'}</td>
                <td>{i.appdev ? 'Yes' : 'No'}</td>
                <td>{i.ml ? 'Yes' : 'No'}</td>
                <td>{i.ai ? 'Yes' : 'No'}</td>
                <td>{i.embedded ? 'Yes' : 'No'}</td>
                <td>{i.mech ? 'Yes' : 'No'}</td>
                <td>{i.java ? 'Yes' : 'No'}</td>
                <td>{i.springboot ? 'Yes' : 'No'}</td>
                <td>{i.javacript ? 'Yes' : 'No'}</td>
                <td>{i.solidwork ? 'Yes' : 'No'}</td>
                <td>{i.autocad ? 'Yes' : 'No'}</td>
                {/* <td><button onClick={() => deleteRow(i.id)}>Delete</button></td> */}
                {/* <td><button onClick={() => handleDelete(i._id)}>Delete</button></td> */}


              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default Adminpanel;
