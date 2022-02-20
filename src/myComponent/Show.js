import React from 'react'
import {useState} from 'react';
import { useEffect } from 'react';

export const Show = ({data}) => {
    const[d, setd] = useState()
    useEffect(()=>{
        setd(JSON.parse(data))
    },[])
    
    return (
        <div>
            {typeof(d) === "undefined"? "null": <>
            <table>
            <th>NAME</th>
            <th>Roll_No</th>
            <th>DB_MARKS</th>
            <th>DB_GRADE</th>
            <th>DB_GPA</th>
            <th>DB_LAB_MARKS</th>
            <th>DB_LAB_GRADDE</th>
            <th>DB_LAB_GPA</th>
            <th>OOAD_MARKS</th>
            <th>OOAD_GRADE</th>
            <th>OOAD_GPA</th>
            <th>TOA_MARKS</th>
            <th>TOA_GRADE</th>
            <th>TOA_GPA</th>
            <th>OS_MARKS</th>
            <th>OS_GRADE</th>
            <th>OS_GPA</th>
            <th>FL_MARKS</th>
            <th>FL-GRADE</th>
            <th>FL-GPA</th>
            <th>POM_MARKS</th>
            <th>POM_GRADE</th>
            <th>POM_GPA</th>
            <tr><td>{d.nam}</td>
            <td>{d.rollNo}</td>
            <td>{d.dbmarks}</td>
            <td>{d.dbgrade}</td>
            <td>{d.dbgpa}</td>
            <td>{d.dblab}</td>
            <td>{d.dblabgrade}</td>
            <td>{d.dblabgpa}</td>
            <td>{d.ooadmarks}</td>
            <td>{d.ooadgrade}</td>
            <td>{d.ooadgpa}</td>
            <td>{d.toamarks}</td>
            <td>{d.toagrade}</td>
            <td>{d.toagpa}</td>
            <td>{d.osmarks}</td>
            <td>{d.osgrade}</td>
            <td>{d.osgpa}</td>
            <td>{d.flmarks}</td>
            <td>{d.flgrade}</td>
            <td>{d.flgpa}</td>
            <td>{d.pommarks}</td>
            <td>{d.pomgrade}</td>
            <td>{d.pomgpa}</td>
            </tr>
            
            </table>
            </>}
        </div>
    )
}
