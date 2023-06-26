import '../styles/player.css'
import Typewriter from 'typewriter-effect'

const Player = () => {
    return (
        <div id="playerStats">
            <h1>Alex Hu</h1>
            <h2 id="level">Level 29</h2>
            <div id="playerStats__lines">
                <span id="playerStats__lines__thick"></span>
                <span id="playerStats__lines__thin"></span>
            </div>
            <h3>
                <Typewriter
                    options={{
                        loop: true,
                    }}
                    onInit={typewriter => {
                        typewriter
                            .typeString('Fullstack Web Developer')
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('Cloud Engineer')
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('Solution Architecture ')
                            .start()
                    }}
                />
            </h3>
        </div>
    )
}

export default Player
