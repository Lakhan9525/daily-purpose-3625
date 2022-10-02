import React from 'react'
import MainContent from '../../Components/TimesheetComps/MainContent'

import Timesheetcalender from './Timesheetcalender'
import TimesheetNavbar from './Timesheetnavbar'


const Timesheet = () => {
  return (
    <>
      <TimesheetNavbar />
      <Timesheetcalender />
      <MainContent/>

    </>
  )
}

export default Timesheet