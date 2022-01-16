import {useEffect, useState} from "react";
import {useParams,Link} from "react-router-dom";
import './person-styles.css'

function Person({imageList}){
    const [personInfo,setPersonInfo]=useState({})
    let params=useParams()
    const getPerson = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        return (data)
    }
    useEffect(()=>{
        getPerson(params.teamId).then(data => {
            setPersonInfo(data)})},[params.teamId])
    return(
        <div id={'profileCardContainer'}>
            <div className={'profileCard'}>
                <div className={'profileCardText'}>
                    <h2>{personInfo.name}</h2>
                    <h4>{personInfo.username}</h4>
                    <div style={{paddingTop:'20px'}}>
                        <h5>email:</h5>
                        <p>{personInfo.email}</p>
                        <h5>Phone:</h5>
                        <p>{personInfo.phone}</p>
                        <h5>Website:</h5>
                        <p>{personInfo.website}</p>
                        <Link to='/team' id={'back'}><p>Back to list</p><ion-icon name="arrow-forward-outline" ></ion-icon></Link>
                    </div>
                </div>
                <div>
                    <img src={imageList[personInfo.id%11]} alt={'person'} className={'profileCardImage'}/>
                </div>
            </div>

        </div>
    )
}
export default Person