import React from 'react'
import ReactEcharts from 'echarts-for-react'
import {Link} from "react-router-dom"
// import echarts from 'echarts/lib/echarts'
import moment from 'moment'


const User = (props)=>{
    const thisMonth = moment().format('MMMM')

    const calculateWork = (userName, month) => {
        let total = 110
        for(let index in props.allConnections){
            const conditionsArray = [
                props.allConnections[index].contact_method === 'session',
                props.allConnections[index].contact_method === 'classroom presentation',
                props.allConnections[index].contact_method === 'group session',
                props.allConnections[index].contact_method === 'check-in',
                props.allConnections[index].contact_method === 'crisis intervention',
                props.allConnections[index].contact_method === 'home visit',
                props.allConnections[index].contact_type === 'parent',
                props.allConnections[index].contact_method === "outside agency meeting",
                props.allConnections[index].contact_method === 'other meeting',
                props.allConnections[index].cp_referral === 'Yes',
                props.allConnections[index].contact_method === "sbst, mdt, case conference"
            ]
            if((props.allConnections[index].user_name === userName) && (moment(props.allConnections[index].connection_date, 'YYYY-MM-DD').format('MMMM') === month)){
                if (conditionsArray.includes(true)) {
                    total += 1
                 }
            }
        }
        return total
    }
    
    const engagement = (userName, month, population) => {
        let total = 120
        for(let index in props.students){
            // console.log("taken", props.students[index].mon, "moment", moment(props.students[index].mon).format('MMMM'))
            if((props.students[index].user_name === userName) && (moment(props.students[index].mon, 'YYYY-MM-DD').format('MMMM') === month)){
            //    console.log("enter")
                total += parseInt(props.students[index].students, 10)
            }
        }
        return Math.round(Math.round(1000 * (total /population))/1000 * 100, 2)
    }

    const calculatedEngagement = engagement(props.name, thisMonth, props.population)

        var className
        var hudColor
    if(calculatedEngagement < 1){
        className = 'light'
        hudColor="rgba(31, 147, 255, 1)"
    }
    if(calculatedEngagement >= 1 && calculatedEngagement < 25){
        className = 'danger'
        hudColor="rgba(255, 0, 0, 1)"

    }
    if(calculatedEngagement >= 25 && calculatedEngagement < 50){
        className = 'warning'
        hudColor="rgba(244, 255, 31, 1)"

    }
    if(calculatedEngagement >= 50 && calculatedEngagement < 100){
        className = "success"
        hudColor="rgba(98, 255, 31, 1)"

    }

    const option = {
        series: [{
            type: 'treemap',
            // roam: false,
            // nodeClick: false,
            breadcrumb: { show: false },
            levels:[
                {borderWidth:10, 
                borderColor:'rgba(105, 94, 91, 1)'},
                {borderWidth:10, 
                borderColor:'rgba(105, 94, 91, 1)'},
                {borderWidth:10, 
                borderColor:'rgba(105, 94, 91, 1)'}],
            data: [{
                name: "Output \n\n" + calculateWork(props.name, thisMonth),          // First tree
                value: 15,
                label:{
                    fontSize:20
                  
                },
                
            }, {
                name: `Engagement \n\n ${calculatedEngagement}%`,            // Second tree
                value: 20,
                label:{
                    fontSize:20,  
                },
                itemStyle:{
                    color:hudColor
                }
                        }]
    }]
    }

    return(
       
            <div className= "col card text-center"
                            style={{
                                marginTop:"50px",
                                marginBottom:"50px",
                                marginRight:"10px",
                                boxShadow:"2px 2px 4px", 
                                height:"300px", 
                                width:"300px",
                                textOverflow:'elipsis',
                                }}>
            <Link to={"/hud/" + props.name}>  
                    <h4 className={className}>{props.name}</h4>
            </Link>
                <ReactEcharts 
                    option={option} 
                    style={{height: '100%', width: '100%'}}  
                    className="align-text-bottom" 
                />
            </div>
        
    
    )
    
}

export default User