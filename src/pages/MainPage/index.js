import './App.css';
import requests from './api/request.js';
import Banner from "../../components/Banner.js"; 
import Row from './components/Row.js'; 
function MainPage() {
    return (<div className="App"> 
        <Banner/>
        <Row
            title="NETFLIX ORIGINALS"
            id="NO"
            fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow
        />
        <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" id="Cm" fetchUrl={requests.fetchComedyMovies}/> 
    </div>);
}

export default MainPage;
