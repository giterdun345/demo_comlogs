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
//   data used for demo version 
  const [allConnections, setAllConnections] = useState([
      {"connection_id":"12345", 
        "referal_discharge":"Yes",
        "cp_referral":"Yes",
        "purpose":"purpse of communication",
        "provision":"Any Additional Notes",
        "connection_date":"08/07/2020",
        "school":"Lighthouse",
        "student_id":"45023",
        "yeargroup":"yr03",
        "gender":"M",
        "contact_type":"student",
        "contact_method":"in-person",
        "referral_discharge":"Yes"
      }, 
      {"conection_id":"22345", 
        "referal_discharge":"No",
        "cp_referral":"Yes",
        "purpose":"purpse of communication",
        "provision":"Any Additional Notes",
        "connection_date":"08/07/2020",
        "school":"Lighthouse",
        "student_id":"45023",
        "yeargroup":"yr04",
        "gender":"M",
        "contact_type":"parent",
        "contact_method":"phone call",
        "referral_discharge":"Yes"
      }, 
      {"connection_id":"32345", 
        "referal_discharge":"Yes",
        "cp_referral":"Yes",
        "purpose":"purpse of communication",
        "provision":"Any Additional Notes",
        "connection_date":"08/07/2020",
        "school":"Lighthouse",
        "student_id":"45023",
        "yeargroup":"yr12",
        "gender":"M",
        "contact_type":"staff",
        "contact_method":"email",
        "referral_discharge":"No"
      }, 
      {"connection_id":"32345", 
      "referal_discharge":"Yes",
      "cp_referral":"Yes",
      "purpose":"purpse of communication",
      "provision":"Any Additional Notes",
      "connection_date":"08/07/2020",
      "school":"Lighthouse",
      "student_id":"45023",
      "yeargroup":"yr12",
      "gender":"M",
      "contact_type":"staff",
      "contact_method":"email",
      "referral_discharge":"No"
    }, 
    {"connection_id":"32345", 
    "referal_discharge":"Yes",
    "cp_referral":"Yes",
    "purpose":"purpse of communication",
    "provision":"Any Additional Notes",
    "connection_date":"08/07/2020",
    "school":"Lighthouse",
    "student_id":"45023",
    "yeargroup":"yr12",
    "gender":"M",
    "contact_type":"staff",
    "contact_method":"email",
    "referral_discharge":"No"
  }, 
  {"connection_id":"32345", 
  "referal_discharge":"Yes",
  "cp_referral":"Yes",
  "purpose":"purpse of communication",
  "provision":"Any Additional Notes",
  "connection_date":"08/07/2020",
  "school":"Lighthouse",
  "student_id":"45023",
  "yeargroup":"yr12",
  "gender":"M",
  "contact_type":"staff",
  "contact_method":"email",
  "referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}, 
{"connection_id":"32345", 
"referal_discharge":"Yes",
"cp_referral":"Yes",
"purpose":"purpse of communication",
"provision":"Any Additional Notes",
"connection_date":"08/07/2020",
"school":"Lighthouse",
"student_id":"45023",
"yeargroup":"yr12",
"gender":"M",
"contact_type":"staff",
"contact_method":"email",
"referral_discharge":"No"
}
  ])
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