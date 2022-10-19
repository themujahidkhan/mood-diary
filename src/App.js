import "./App.css";
import Input from "./components/Input";
import { getMood, setMood } from "./contracts/contract";
import diary from "./assets/diary.png";
function App() {
  return (
    <div className="app">
      <header>
        <h1 className="logoText">Mood Diary</h1>
      </header>
      <div className="container">
        <figure>
          <img src={diary} alt="Diary" />
        </figure>

        <div className="form">
          <h1 className="hero-title">How are you feeling Today?</h1>
          <Input placeholder="Enter your mood, Happy, Sad, Nervous" />
          <button onClick={setMood}>Set Mood</button>
          <button onClick={getMood}>Get Mood</button>
          <div>
            <h2 id="dispalyMood">{}</h2>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Created by{" "}
          <a href="https://twitter.com/themujahidkhan">Mujahid Khan</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
