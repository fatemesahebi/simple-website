import {Container,Row,Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import './team.styles.css'


function Team({imageList,page,setPage}){
    const [team,setTeam]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const getData=()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
            .then(data=>setTeam(data))

    }
    useEffect(()=>{
        document.title='go to front end'
        getData()
        setIsLoading(false)
        setPage(1)
    },[])

    let [searchTerm,setSearchTerm]=useState('')

    return(
        <div >
            <div className={'teamHeader'}>
                <h1>OUR TEAM</h1>
                <div id={'searchBox'}> <input onChange={e=>setSearchTerm(e.target.value)} placeholder={'search'}/><ion-icon name="search-outline"></ion-icon></div>
            </div>
            {
                <>
                    ({isLoading})? <div><p>is loading...</p></div> :
                    <Container>
                        <Row className={'teamContainer'}>
                            {team.filter(item=>item.name.toLowerCase().includes(searchTerm.toLowerCase())).map(item=>(
                                <Col xs={12} sm={5} xl={3} className={'card'} key={item.id}>
                                    <div>
                                        <img src={imageList[item.id%11]} className={'cardImage'}  alt={'person'}/>
                                        <div className={'cardBody'}>
                                            <h4>{item.name}</h4>
                                            <h5>Company:{item.company.name}</h5>
                                            <p>{item.company.catchPhrase}</p>
                                            <button className={'cardButton'}><Link className={'link'} style={{color:'black'}} to={`/team/${item.id}`}>Read more</Link></button>

                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>

                </>
            }
                        </div>
                        )
                    }
                    export default Team