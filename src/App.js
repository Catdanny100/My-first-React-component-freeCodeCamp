import "./App.css";
import Testimony from "./components/Testimony.js";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>This is what our students say about freeCodeCamp:</h1>
        <Testimony
          name="Shawn Wang"
          country="Singapur"
          image="shawn"
          position="Software Engineer"
          company="Amazon"
          testimony="It is scary to change careers. I only gained the confidence that I could code by working through the hundreds of hours of free lessons at freeCodeCamp. Within a year I had a six figure job as a software engineer. freeCodeCamp changed my life."
        />
        <Testimony
          name="Sarah Chima"
          country="Nigeria"
          image="sarah"
          position="Software engineer"
          company="ChatDesk"
          testimony="freeCodeCamp was my ticket to land a software developer job. The well-structured curriculum took my programming knowledge from a complete beginner to a very confident level. It was everything i needed to get a job in an amazing company"
        />
        <Testimony
          name="Emma Bostian"
          country="Sweden"
          image="emma"
          position="Software engineer"
          company="Spotify"
          testimony="I have always had trouble learning JavaScript. I took so many courses, but the freeCodeCamp course was the one that stuck on me. Studying JavaScript as well as data structures and algorithms at freeCodeCamp gave me the skills and confidence i needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  );
}

export default App;
