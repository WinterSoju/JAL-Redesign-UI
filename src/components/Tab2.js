import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import DatePicker from 'react-datepicker';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import FlightIcon from '@mui/icons-material/Flight';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import "./Tab2.css";

export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  const [flightDate, setFlightDate] = React.useState(null);
  const [milesDate, setMilesDate] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"
          centered
          TabIndicatorProps={{
            style: { background: '#ea351f' } 
          }}
          sx={{
          '& .Mui-selected': {
          color: '#FFA3A6 !important',
          }
      
        }}
          >
          <Tab icon={<AirplaneTicketIcon sx={{ fontSize: 100 }} />} sx={{ mx: 7 }} label="Manage Booking" value="1"/>
            <Tab icon={<AssignmentIndOutlinedIcon sx={{ fontSize: 100 }} />} sx={{ mx: 7 }} label="Check In" value="2"/>
            <Tab icon={<FlightIcon sx={{ fontSize: 100 }}/>} sx={{ mx: 7 }}label="Flight Status" value="3"/>
            <Tab icon={<LoyaltyIcon sx={{ fontSize: 100 }} />} sx={{ mx: 7 }} label="My Miles" value="4"/>
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ 
          textAlign: 'center', 
          backgroundColor: '#FDF4F4',
          borderRadius: '8px',
          minHeight: 100,
        }}>
        <input
          type="text"
          placeholder="Booking Reference"
          style={{
            width: '20%',
            padding: '10px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}>
        </input>
        <br />
        <input
          type="text"   
          placeholder="Last Name"
          style={{
            width: '20%',
            padding: '10px',
            border: '1px solid #ccc',
            fontSize: '16px',
            marginTop: '20px'
          }}>
        </input>
        <br />
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#ea351f',
            color: '#fff',
            border: 'none',
            borderRadius: '100px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
          Find Booking
        </button>
        </TabPanel>
        <TabPanel value="2" sx={{
          textAlign: 'center' ,
          backgroundColor: '#FDF4F4',
          minHeight: 100,
        }}>
        <input
          type="text"
          placeholder="Booking Reference"
          style={{
            width: '20%',
            padding: '10px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}>
        </input>
        <br />
        <input
          type="text"   
          placeholder="Last Name"
          style={{
            width: '20%',
            padding: '10px',
            border: '1px solid #ccc',
            fontSize: '16px',
            marginTop: '20px'
          }}>
        </input>
        <br />
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#ea351f',
            color: '#fff',
            border: 'none',
            borderRadius: '100px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
          Check In
        </button>
        </TabPanel>
        <TabPanel value="3" sx={{
          textAlign: 'center' ,
          backgroundColor: '#FDF4F4',
          minHeight: 100,
        }}>
        <input
          type="text" 
          placeholder="Flight Number"
          style={{
            width: '15%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
            marginTop: '20px'
          }}>
        </input>
        <DatePicker
          selected={flightDate}
          onChange={(date) => setFlightDate(date)}
          className="custom-datepicker-input"
          placeholderText='Departure Date'
        />
        <br />
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#ea351f',
            color: '#fff',
            border: 'none',
            borderRadius: '100px',
            cursor: 'pointer',
            fontSize: '16px',
            
          }}>
          Check Status
        </button>
        </TabPanel>
        <TabPanel value="4" sx={{
          textAlign: 'center' ,
          backgroundColor: '#FDF4F4',
          minHeight: 100,
        }}>
        <input
          type="text" 
          placeholder="JAL Mileage ID/Email"
          style={{
            width: '20%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
            marginTop: '20px'
          }}>
        </input>
        <DatePicker
          selected={milesDate}
          placeholderText='Date of Birth'
          onChange={(date) => setMilesDate(date)}
          className="custom-datepicker-input"
        />
        <br/>
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#ea351f',
            color: '#fff',
            border: 'none',
            borderRadius: '100px',
            cursor: 'pointer',
            fontSize: '16px',
          }}>
          Next
        </button>
        </TabPanel>
      </TabContext>
    </Box>
  );
}