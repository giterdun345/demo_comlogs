/* eslint-disable */
import React, { Fragment, useState, useEffect } from 'react'
//components
import InputConnection from './connectionlist/InputConnection'
import ListConnections from './connectionlist/ListConnections'
// import LogoutBtn from './LogoutBtn'
import ReportingLayout from './reporting/Layout/ReportingLayout'

const Dashboard = ({ type }) => {
  const [name, setName] = useState('')
  const [connectionsChange, setConnectionsChange] = useState(false)
  const [timeDay, setTimeDay] = useState("Good Morning,")
  const [allConnections, setAllConnections] = useState([])
  const greeting = () => {
      let date = new Date()
      const hours = date.getHours()
      if(hours < 12){
          setTimeDay("Good Morning, ")
      }else if (hours >= 12 && hours < 17){
          setTimeDay("Good Afternoon, ")
      }else{
          setTimeDay("Good Evening, ")
      }
  }

  useEffect(() => {
      setName(type)
      greeting()
      setConnectionsChange(false)
  }, [connectionsChange, timeDay, type])



  if(type === "Lead School Counsellor" ){
    return(
          <div>
              <ReportingLayout allConnections={ allConnections } />    
          </div>
        )
  }
  else{
    return(
        <Fragment>
            <div className="container">
                <a href='/'> Go Back </a>
                    <h1 className="d-flex mt-3 pl-3 mb-4 font-familyA" > {timeDay} {name}.&nbsp;&nbsp;</h1>
                <InputConnection defaultSchool='Lighthouse' setConnectionsChange={setConnectionsChange}/>
                <ListConnections allConnections={ allConnections } setConnectionsChange={setConnectionsChange}/> 
            </div>     
        </Fragment>
    )
  }
}

export default Dashboard;   