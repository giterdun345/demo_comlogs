/* eslint-disable */
import React from 'react'
// import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment'

const BigChart = (props) =>{
        // function yearTotal (results, name, year) { 
        //     let total = 0
        //     for(let i = 0; i < results.length; i++){
        //         if ((results[i].user_name === name) && (moment(results[i].connection_date).year() === year)){
        //             total += 1
        //         }
        //     }
        //     return total
        // }

        // function monthTotal (results, name, month) { 
        //     let total = 50
        //     for(let i = 0; i < results.length; i++){
        //         if ((results[i].user_name === name) && (moment(results[i].connection_date, 'YYYY-MM-DD').format('MMMM') === month)){
        //             total += 1
        //         }
        //     }
        //     return total
        // }

        
        function parseSchool(element, month){
            let schoolAmount = {
                'Lighthouse' : 0,
                'Cornerstones' : 0,
                'Early Intervention' : 0,
                'Little Stars' : 0,
                'Stepping Stones' : 0,
                'Theoline L. McCoy' : 0,
                'Sir John A. Cumber' : 0,
                'Edna M. Moyle' : 0,
                'Georgetown': 0, 
                'East End' : 0,
                'Prospect': 0,
                'Red Bay' : 0,
                'Savannah' : 0,
                'John Gray' : 0,
                'Clifton Hunter' : 0,
                'CIFEC' : 0,
                'Creek & Spot' : 0,
                'West End' : 0,
                'Layman E. Scott' : 0,
            } 
            for (let i in element){ 
                    if ((element[i].user_name === props.name) && (moment(element[i].connection_date, 'YYYY-MM-DD').format('MMMM') === month)) 
                    {
                        schoolAmount[element[i].school] += 1
                    }
            }
            return schoolAmount
        }

        function filterQuery(schoolKey, arr, month, column){
            let result = []
            for(let index in arr){                
                if((arr[index].school === schoolKey) && (moment(arr[index].mon, 'YYYY-MM-DD').format('MMMM') === month) && (arr[index].user_name === props.name)){
                    result.push(arr[index][column])
                }
            }
            if(result.length < 1){
                return 0 
            }else{
                return result[0]
            }
        }

var data = [
        {   name: '2020', 
            value:120 ,
            children:[
            {   name:'Sep', 
                value:30, 
                children:[
                {   name:'Lighthouse', 
                    value: 15,
                    children:[ 
                        {name:"Sessions", value:5},
                        {name:"SBST, MDT, Case Conf", value:1}, 
                        {name:"Outside Agencies", value:1},
                        {name:"CP Referrals", value:2},
                        // {name:"Discharges", 
                        //  value:filterQuery("Lighthouse", props.discharges, "September", "discharges")},
                        // {name:"Referrals",
                        //  value:filterQuery("Lighthouse", props.referrals, "September", "referrals")},
                        {name:"Classroom Presentations", value:2},    
                        {name: "Group Sessions", value:2},
                        {name:"Check-ins", value:5},
                        {name:"Crisis Intervention", value:2},
                        {name:"Home Visits", value:3},
                        {name:"Parent Contacts", value:5},
                        {name:"Meetings", value:2}
                        ]
                },
                {   name:'Cornerstones', 
                    value: 15,
                    children:[ 
                        {name:"Sessions",
                         value:filterQuery("Cornerstones", props.sessions, "September", "sessions")},
                         {name:"SBST, MDT, Case Conf",
                         value: filterQuery("Cornerstones", props.sbst, "September", "sbsts")},
                        {name:"Outside Agencies",
                         value:filterQuery("Cornerstones", props.agencies, "September", "agencies")},
                        {name:"CP Referrals", 
                         value:filterQuery("Cornerstones", props.cpref, "September", "cps")},
                        // {name:"Discharges", 
                        //  value:filterQuery("Cornerstones", props.discharges, "September", "discharges")},
                        // {name:"Referrals",
                        //  value:filterQuery("Cornerstones", props.referrals, "September", "referrals")},
                        {name:"Classroom Presentations",
                         value: filterQuery("Cornerstones", props.presentations, "September", "presentations")},    
                        {name: "Group Sessions",
                         value:filterQuery("Cornerstones", props.groups, "September", "groups")},
                        {name:"Check-ins",
                         value:filterQuery("Cornerstones", props.checks, "September", "checks")},
                        {name:"Crisis Intervention",
                         value:filterQuery("Cornerstones", props.interventions, "September", "interventions")},
                        {name:"Home Visits",
                         value:filterQuery("Cornerstones", props.visits, "September", "visits")},
                        {name:"Parent Contacts",
                         value:filterQuery("Cornerstones", props.parent, "September", "parents")},
                        {name:"Meetings",
                         value:filterQuery("Cornerstones", props.meets, "September", "meets")}
                        ]
                } 
               ]
            },
            {   name:"Oct", 
                value: 30,
                children:[            
                    {   name:'Lighthouse', 
                    value: 15,
                    children:[ 
                        {name:"Sessions", value:5},
                        {name:"SBST, MDT, Case Conf", value:1}, 
                        {name:"Outside Agencies", value:1},
                        {name:"CP Referrals", value:2},
                        // {name:"Discharges", 
                        //  value:filterQuery("Lighthouse", props.discharges, "September", "discharges")},
                        // {name:"Referrals",
                        //  value:filterQuery("Lighthouse", props.referrals, "September", "referrals")},
                        {name:"Classroom Presentations", value:2},    
                        {name: "Group Sessions", value:2},
                        {name:"Check-ins", value:5},
                        {name:"Crisis Intervention", value:2},
                        {name:"Home Visits", value:3},
                        {name:"Parent Contacts", value:5},
                        {name:"Meetings", value:2}
                        ]
                },
                {   name:'Cornerstones', 
                    value: 15,
                    children:[ 
                        {name:"Sessions",
                         value:filterQuery("Cornerstones", props.sessions, "September", "sessions")},
                         {name:"SBST, MDT, Case Conf",
                         value: filterQuery("Cornerstones", props.sbst, "September", "sbsts")},
                        {name:"Outside Agencies",
                         value:filterQuery("Cornerstones", props.agencies, "September", "agencies")},
                        {name:"CP Referrals", 
                         value:filterQuery("Cornerstones", props.cpref, "September", "cps")},
                        // {name:"Discharges", 
                        //  value:filterQuery("Cornerstones", props.discharges, "September", "discharges")},
                        // {name:"Referrals",
                        //  value:filterQuery("Cornerstones", props.referrals, "September", "referrals")},
                        {name:"Classroom Presentations",
                         value: filterQuery("Cornerstones", props.presentations, "September", "presentations")},    
                        {name: "Group Sessions",
                         value:filterQuery("Cornerstones", props.groups, "September", "groups")},
                        {name:"Check-ins",
                         value:filterQuery("Cornerstones", props.checks, "September", "checks")},
                        {name:"Crisis Intervention",
                         value:filterQuery("Cornerstones", props.interventions, "September", "interventions")},
                        {name:"Home Visits",
                         value:filterQuery("Cornerstones", props.visits, "September", "visits")},
                        {name:"Parent Contacts",
                         value:filterQuery("Cornerstones", props.parent, "September", "parents")},
                        {name:"Meetings",
                         value:filterQuery("Cornerstones", props.meets, "September", "meets")}
                        ]
                }]
            }, 
            {   name:"Nov", 
                value: 30,
                children:[                      
                {name:'Lighthouse', 
                        value: 15,
                    children:[ 
                    {name:"Sessions", value:5},
                    {name:"SBST, MDT, Case Conf", value:1}, 
                    {name:"Outside Agencies", value:1},
                    {name:"CP Referrals", value:2},
                    // {name:"Discharges", 
                    //  value:filterQuery("Lighthouse", props.discharges, "September", "discharges")},
                    // {name:"Referrals",
                    //  value:filterQuery("Lighthouse", props.referrals, "September", "referrals")},
                    {name:"Classroom Presentations", value:2},    
                    {name: "Group Sessions", value:2},
                    {name:"Check-ins", value:5},
                    {name:"Crisis Intervention", value:2},
                    {name:"Home Visits", value:3},
                    {name:"Parent Contacts", value:5},
                    {name:"Meetings", value:2}
                    ]
            },
                {  name:'Cornerstones', 
                    value: 15,
                    children:[ 
                        {name:"Sessions",
                         value:filterQuery("Cornerstones", props.sessions, "September", "sessions")},
                         {name:"SBST, MDT, Case Conf",
                         value: filterQuery("Cornerstones", props.sbst, "September", "sbsts")},
                        {name:"Outside Agencies",
                         value:filterQuery("Cornerstones", props.agencies, "September", "agencies")},
                        {name:"CP Referrals", 
                         value:filterQuery("Cornerstones", props.cpref, "September", "cps")},
                        // {name:"Discharges", 
                        //  value:filterQuery("Cornerstones", props.discharges, "September", "discharges")},
                        // {name:"Referrals",
                        //  value:filterQuery("Cornerstones", props.referrals, "September", "referrals")},
                        {name:"Classroom Presentations",
                         value: filterQuery("Cornerstones", props.presentations, "September", "presentations")},    
                        {name: "Group Sessions",
                         value:filterQuery("Cornerstones", props.groups, "September", "groups")},
                        {name:"Check-ins",
                         value:filterQuery("Cornerstones", props.checks, "September", "checks")},
                        {name:"Crisis Intervention",
                         value:filterQuery("Cornerstones", props.interventions, "September", "interventions")},
                        {name:"Home Visits",
                         value:filterQuery("Cornerstones", props.visits, "September", "visits")},
                        {name:"Parent Contacts",
                         value:filterQuery("Cornerstones", props.parent, "September", "parents")},
                        {name:"Meetings",
                         value:filterQuery("Cornerstones", props.meets, "September", "meets")}
                        ]
                // }]
                    }]
            }, 
            {   name:"Dec", 
                value: 30,
                children:[            
                    {   name:'Lighthouse', 
                    value: 15,
                    children:[ 
                        {name:"Sessions", value:5},
                        {name:"SBST, MDT, Case Conf", value:1}, 
                        {name:"Outside Agencies", value:1},
                        {name:"CP Referrals", value:2},
                        // {name:"Discharges", 
                        //  value:filterQuery("Lighthouse", props.discharges, "September", "discharges")},
                        // {name:"Referrals",
                        //  value:filterQuery("Lighthouse", props.referrals, "September", "referrals")},
                        {name:"Classroom Presentations", value:2},    
                        {name: "Group Sessions", value:2},
                        {name:"Check-ins", value:5},
                        {name:"Crisis Intervention", value:2},
                        {name:"Home Visits", value:3},
                        {name:"Parent Contacts", value:5},
                        {name:"Meetings", value:2}
                        ]
                },
                {   name:'Cornerstones', 
                    value: 15,
                    children:[ 
                        {name:"Sessions",
                         value:filterQuery("Cornerstones", props.sessions, "September", "sessions")},
                         {name:"SBST, MDT, Case Conf",
                         value: filterQuery("Cornerstones", props.sbst, "September", "sbsts")},
                        {name:"Outside Agencies",
                         value:filterQuery("Cornerstones", props.agencies, "September", "agencies")},
                        {name:"CP Referrals", 
                         value:filterQuery("Cornerstones", props.cpref, "September", "cps")},
                        // {name:"Discharges", 
                        //  value:filterQuery("Cornerstones", props.discharges, "September", "discharges")},
                        // {name:"Referrals",
                        //  value:filterQuery("Cornerstones", props.referrals, "September", "referrals")},
                        {name:"Classroom Presentations",
                         value: filterQuery("Cornerstones", props.presentations, "September", "presentations")},    
                        {name: "Group Sessions",
                         value:filterQuery("Cornerstones", props.groups, "September", "groups")},
                        {name:"Check-ins",
                         value:filterQuery("Cornerstones", props.checks, "September", "checks")},
                        {name:"Crisis Intervention",
                         value:filterQuery("Cornerstones", props.interventions, "September", "interventions")},
                        {name:"Home Visits",
                         value:filterQuery("Cornerstones", props.visits, "September", "visits")},
                        {name:"Parent Contacts",
                         value:filterQuery("Cornerstones", props.parent, "September", "parents")},
                        {name:"Meetings",
                         value:filterQuery("Cornerstones", props.meets, "September", "meets")}
                        ]
                } ]
            } 
            ]
        }, 
        {
            // 9423, 1500, 1200, 1723, 1500, 1290, 1210
            name:'2021', 
            value:80, 
            children:[
            {   name:"Jan", 
                value: 20,
                children:[
                    {   name:'Lighthouse', 
                    value: 10,
                    children:[ 
                        {name:"Sessions", value:5},
                        {name:"SBST, MDT, Case Conf", value:1}, 
                        {name:"Outside Agencies", value:1},
                        {name:"CP Referrals", value:2},
                        // {name:"Discharges", 
                        //  value:filterQuery("Lighthouse", props.discharges, "September", "discharges")},
                        // {name:"Referrals",
                        //  value:filterQuery("Lighthouse", props.referrals, "September", "referrals")},
                        {name:"Classroom Presentations", value:1},    
                        {name: "Group Sessions", value:3},
                        {name:"Check-ins", value:1},
                        {name:"Crisis Intervention", value:5},
                        {name:"Home Visits", value:3},
                        {name:"Parent Contacts", value:0},
                        {name:"Meetings", value:2}
                        ]
                },
                {   name:'Cornerstones', 
                    value: 10,
                    children:[ 
                        {name:"Sessions",
                         value:filterQuery("Cornerstones", props.sessions, "September", "sessions")},
                         {name:"SBST, MDT, Case Conf",
                         value: filterQuery("Cornerstones", props.sbst, "September", "sbsts")},
                        {name:"Outside Agencies",
                         value:filterQuery("Cornerstones", props.agencies, "September", "agencies")},
                        {name:"CP Referrals", 
                         value:filterQuery("Cornerstones", props.cpref, "September", "cps")},
                        // {name:"Discharges", 
                        //  value:filterQuery("Cornerstones", props.discharges, "September", "discharges")},
                        // {name:"Referrals",
                        //  value:filterQuery("Cornerstones", props.referrals, "September", "referrals")},
                        {name:"Classroom Presentations",
                         value: filterQuery("Cornerstones", props.presentations, "September", "presentations")},    
                        {name: "Group Sessions",
                         value:filterQuery("Cornerstones", props.groups, "September", "groups")},
                        {name:"Check-ins",
                         value:filterQuery("Cornerstones", props.checks, "September", "checks")},
                        {name:"Crisis Intervention",
                         value:filterQuery("Cornerstones", props.interventions, "September", "interventions")},
                        {name:"Home Visits",
                         value:filterQuery("Cornerstones", props.visits, "September", "visits")},
                        {name:"Parent Contacts",
                         value:filterQuery("Cornerstones", props.parent, "September", "parents")},
                        {name:"Meetings",
                         value:filterQuery("Cornerstones", props.meets, "September", "meets")}
                        ]
                }     
                ]
            }, 
            {   name:"Feb", 
            value: 20,
            children:[
                {   name:'Lighthouse', 
                    value: 15,
                    children:[ 
                        {name:"Sessions", value:5},
                        {name:"SBST, MDT, Case Conf", value:1}, 
                        {name:"Outside Agencies", value:1},
                        {name:"CP Referrals", value:2},
                        // {name:"Discharges", 
                        //  value:filterQuery("Lighthouse", props.discharges, "September", "discharges")},
                        // {name:"Referrals",
                        //  value:filterQuery("Lighthouse", props.referrals, "September", "referrals")},
                        {name:"Classroom Presentations", value:2},    
                        {name: "Group Sessions", value:2},
                        {name:"Check-ins", value:5},
                        {name:"Crisis Intervention", value:2},
                        {name:"Home Visits", value:3},
                        {name:"Parent Contacts", value:5},
                        {name:"Meetings", value:2}
                        ]
                },
                {   name:'Cornerstones', 
                    value: 15,
                    children:[ 
                        {name:"Sessions",
                         value:filterQuery("Cornerstones", props.sessions, "September", "sessions")},
                         {name:"SBST, MDT, Case Conf",
                         value: filterQuery("Cornerstones", props.sbst, "September", "sbsts")},
                        {name:"Outside Agencies",
                         value:filterQuery("Cornerstones", props.agencies, "September", "agencies")},
                        {name:"CP Referrals", 
                         value:filterQuery("Cornerstones", props.cpref, "September", "cps")},
                        // {name:"Discharges", 
                        //  value:filterQuery("Cornerstones", props.discharges, "September", "discharges")},
                        // {name:"Referrals",
                        //  value:filterQuery("Cornerstones", props.referrals, "September", "referrals")},
                        {name:"Classroom Presentations",
                         value: filterQuery("Cornerstones", props.presentations, "September", "presentations")},    
                        {name: "Group Sessions",
                         value:filterQuery("Cornerstones", props.groups, "September", "groups")},
                        {name:"Check-ins",
                         value:filterQuery("Cornerstones", props.checks, "September", "checks")},
                        {name:"Crisis Intervention",
                         value:filterQuery("Cornerstones", props.interventions, "September", "interventions")},
                        {name:"Home Visits",
                         value:filterQuery("Cornerstones", props.visits, "September", "visits")},
                        {name:"Parent Contacts",
                         value:filterQuery("Cornerstones", props.parent, "September", "parents")},
                        {name:"Meetings",
                         value:filterQuery("Cornerstones", props.meets, "September", "meets")}
                        ]
                } ]
            },
            {   
                name:"April", 
                value: 10,
                children:[{}]
            }, 
            {   name:"May", 
                value: 10,
                children:[{}]
                }, 
            {   name:"June", 
                value: 10,
                children:[{}]
            }   
            ]
        }
    ]
           
const option = {
        title:{
            show: true, 
            text: `All Communication Logs`,
            textStyle:{
                fontSize:20,
                // color:'#d4d4d4',
                // textShadowColor:'white',
                // textShadowBlur:10
            },
            padding:50
        },
        tooltip:{
            show: true,
            trigger:'item',
            alwaysShowContent:true,
        },
        visualMap: {
                    type: 'continuous',
                    min: 0,
                    max: 50,
                    
                    inRange: {
                        color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C'],
                        symbolSize:[10, 60]
                    },
                    text:'High', 
                    textGap:20,
                    itemGap:20,
                    itemWidth:30,
                    itemHeight:600,
                    // textStyle:{color:"white"}
                    },
            series: {
                    type: 'sunburst',
                    data: data,
                    radius: [0, '90%'],
                    xaxis:{
                        interval:0
                    },
                    levels: [{},
                        {
                            itemStyle: {borderWidth: 2},
                            label: {
                                rotate: 'tangential',
                                minAngle: 15
                            }
                        }, 
                    {
                        label: {
                            align: 'right',
                            fontSize:20
                        }
                    }, {
                        label: {
                            position: 'inside',
                            padding: 3,
                            fontSize:15,
                            rotate:'tangential',
                            verticalAlign:'bottom',
                            minAngle: 30
                        }
                    }, {
                            label: {
                                position: 'outside',
                                padding: 3,
                                fontSize:15,
                                // silent:true,
                                rotate:0,
                                minAngle: 10
                            }
                        }
                    ]
                }
    }
    

    return( 
        <div className='col'>
            <ReactEcharts 
                option={option} 
                style={{height: '600px', width: '100%'}}  
                className='center' />
        </div>       
    )
}

export default BigChart