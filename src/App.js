import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


function App() {
  
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 50,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "none",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 100.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#2f9f",
                    },
                    links: {
                        color: "#ffffff",
                        // distance: 150,
                        // enable: true,
                        // opacity: 0.5,
                        // width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        // outModes: {
                        //     default: "bounce",
                        // },
                        random: false,
                        speed: {min: 0.5, max: 1},
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.5, max: 3.5 },
                    },
                },
                detectRetina: true,
            }}
        />
    </div>
  );
}

export default App;
