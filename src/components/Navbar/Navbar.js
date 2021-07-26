import {  useState } from "react";
import "./Navbar.css"

export default function Navbar() {


    let [data, setdata] = useState([]);



    async function Myfetch(url) {

        await fetch(url)
            .then((resp) => {
                return resp.json();
            })
            .then((newdata) => {
                console.log(data)
                setdata([newdata])
            }).catch((err) => {
                console.log(err);
            })
    }




    return <>
        <div className="title">
        <h1> THE NEWYORK TIMES</h1>
        </div>

        <nav className="navbar navbar-dark" >

            <button type="button" className="btn btn-outline-dark" onClick={() => {
                Myfetch("https://api.nytimes.com/svc/topstories/v2//home.json?api-key=aMijduIUfbS0R5UfIUjFh9MdNO2iVhwv")
            }}  >HOME</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => {
                Myfetch("https://api.nytimes.com/svc/topstories/v2//world.json?api-key=aMijduIUfbS0R5UfIUjFh9MdNO2iVhwv")
            }}>WORLD</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => {
                Myfetch("https://api.nytimes.com/svc/topstories/v2//politics.json?api-key=aMijduIUfbS0R5UfIUjFh9MdNO2iVhwv")
            }}>POLITICS</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => {
                Myfetch("https://api.nytimes.com/svc/topstories/v2//magazine.json?api-key=aMijduIUfbS0R5UfIUjFh9MdNO2iVhwv")
            }}>MAGAZINE</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => {
                Myfetch("https://api.nytimes.com/svc/topstories/v2//technology.json?api-key=aMijduIUfbS0R5UfIUjFh9MdNO2iVhwv")
            }}>TECHNOLOGY</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => {
                Myfetch("https://api.nytimes.com/svc/topstories/v2//science.json?api-key=aMijduIUfbS0R5UfIUjFh9MdNO2iVhwv")
            }}>SCIENCE</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => {
                Myfetch("https://api.nytimes.com/svc/topstories/v2//health.json?api-key=aMijduIUfbS0R5UfIUjFh9MdNO2iVhwv")
            }}>HEALTH</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => {
                Myfetch("https://api.nytimes.com/svc/topstories/v2//sports.json?api-key=aMijduIUfbS0R5UfIUjFh9MdNO2iVhwv")
            }}>SPORTS</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => {
                Myfetch("https://api.nytimes.com/svc/topstories/v2//arts.json?api-key=aMijduIUfbS0R5UfIUjFh9MdNO2iVhwv")
            }}>ARTS</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => {
                Myfetch("https://api.nytimes.com/svc/topstories/v2//fashion.json?api-key=aMijduIUfbS0R5UfIUjFh9MdNO2iVhwv")
            }}>FASHION</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => {
                Myfetch("https://api.nytimes.com/svc/topstories/v2//food.json?api-key=aMijduIUfbS0R5UfIUjFh9MdNO2iVhwv")
            }}>FOOD</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => {
                Myfetch("https://api.nytimes.com/svc/topstories/v2//travel.json?api-key=aMijduIUfbS0R5UfIUjFh9MdNO2iVhwv")
            }}>TRAVEL</button>

        </nav>

        <div className="container-fluid p-2 m-3 ">
        
            {

!data ? <div class="spinner-grow text-info" role="status">
<span class="sr-only">Loading...</span>
</div> :

               data.map((obj) => {
                        return obj.results.map((item) => {
                         
                            return <div className="card shadow mb-4">
                                <div className="row no-gutters">
                                    <div className="col-md-8">
                                        <div className="card-body mb-0">
                                            <p className="section-card mb-0"><b>{item.section}</b></p>
                                            <p className="titlecard mb-0" ><i>{item.title}</i></p>
                                            <p className="date-card mb-0">{item.updated_date}</p>
                                            <p className="abstract-card mb-0">{item.abstract}</p>
                                            <a href={item.url} target="_blank" rel="noreferrer" className="link">Continue reading...</a>
                                           
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={item.multimedia[0].url} alt="" style={{ "height": "11rem", "width": "500px", "background-size": "cover" }} ></img>
                                    </div>
                                </div>
                            </div>
                             
                        })

                    })

            }
        </div>

    </>
}