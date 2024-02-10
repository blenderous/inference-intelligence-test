import "./App.css"
import BasicTabs from "./components/BasicTabs/BasicTabs"
import Header from "./components/Header"
import Ratings from "./components/Ratings/Ratings"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <div className="App__rating-and-label">
          <div className="App__label">Yoga</div>
          <Ratings averageRating={4.5} numberOfRatings={365}/>
        </div>
        <h3>Yoga Body Stretching</h3>
        <BasicTabs />
      </div>
    </div>
  )
}

export default App
