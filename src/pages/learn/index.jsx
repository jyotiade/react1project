
const Learn = () => {

    console.log("viti")

    // function show() {
    //     alert("hii");
    //     console.log("hello")
    // }

    return (
        <>
            <section id="learn">
                {/* <h1> this is learn page</h1> */}
                {/* ==========================dash part====================================== */}
                <aside>
                    <ul id="dash1">
                        <li style={{ color: "grey" }}>GET STARTED</li>

                        <li>Quick Start</li>

                        {/* <li style={{fontSize:"12px"}}>Tutorial:Tic-Tac-Toe</li>
                 <li  style={{fontSize:"12px"}}>Thinking in React</li> */}

                        <li>Installation</li>
                        <hr />
                        <li style={{ color: "grey" }}>LEARN REACT</li>
                        <li>Describing the UI</li>
                        <li>Adding Interactivity</li>
                        <li>Managing State</li>
                        <li>Escape Hatches</li>
                    </ul>
                </aside>

                {/* ==========================================dash2=============================== */}

                <aside >
                    <ul id="dash2">
                        <li style={{ fontSize: "18px" }}>ON THIS PAGE</li>
                        <li style={{ color: "grey" }}>Overview</li>
                        <li>Creating and nesting components</li>
                        <li>Writing markup with JSX</li>
                        <li>Adding styles</li>
                        <li>Displaying data</li>
                        <li>Conditional rendering</li>
                        <li>Rendering lists</li>
                        <li>Responding to event</li>
                        <li>Updating the screen</li>
                        <li>Using Hooks</li>
                        <li>Sharing data between components</li>
                        <li>Next Steps</li>
                    </ul>
                </aside>

                {/* ===================================page======================================= */}
                <div id="lpage">
                    <div style={{ fontSize: "13px", color: "grey" }}>LEARN REACT </div>

                    <div style={{ fontSize: "30px", padding: "20px" }}>Quick Start</div>
                    <p>Welcome to the React documentation! This page will give you an introduction to the 80% of <br />
                        React concepts that you will use on a daily basis.</p>

                    <img src="https://educraft.tech/wp-content/uploads/2023/03/class-syllabus1-scaled-uai-761x228.jpg" alt="" />
                    <div style={{ fontSize: "25px" }}>Creating and nesting components</div>
                    <p>React apps are made out of components. A component is a piece of the UI (user interface) that has its own <br />
                        logic and appearance. A component can be as small as a button, or as large as an entire.
                        <br /><br />
                        React components are JavaScript functions that return markup:
                    </p>
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyGwhQPeysOrx2b1x68rN1G3uhWTACGuHXytXNp7WNj3W6tMbZ" alt="" />

                    <p>Now that you’ve declared MyButton, you can nest it into another component:</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbWMzvTC0KbJkn3nmXqyNCiNa5g9pQ6ScdbzYJ1GnIn12ebpv" alt="" />

                    <p>Notice that MyButton starts with a capital letter. That’s how you know it’s a React component. React <br />
                        component names must always start with a capital letter, while HTML tags must be lowercase.

                        Have a look at the result:</p>
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDKWrSP5InoJ1fG1RrtfStBUMu600mW4XFqfJTCdSAj0K7Q3yb" alt="" />


                    <p>
                        The information you pass down like this is called props. Now the MyApp component contains the <br />
                        count state and the handleClick event handler, and passes both of them down as props to each <br />
                        of the buttons.

                        Finally, change MyButton to read the props you have passed from its parent component:
                    </p>
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZUFCKsbM9FaNAiNemOIGN1qxGxwJyki-rhBMs9weSr0wcRFFe" alt="" />

                    <p>
                        When you click the button, the onClick handler fires. Each button’s onClick prop was set to <br />
                        the handleClick function inside MyApp, so the code inside of it runs. That code calls <br />
                        setCount(count + 1), incrementing the count state variable. The new count value is passed as <br />
                        a prop to each button, so they all show the new value. This is called “lifting state up”. By moving <br />
                        state up, you’ve shared it between components.
                    </p>
                    <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*3i9xGsHEr0bVFw5oJ85tzw.png" alt="" style={{ width: "700px", height: "500px" }} />
                    <img src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*_o7jZGE9UqgbdCGKlMUtfg.png" alt="" style={{ width: "700px", height: "400px" }} />

                    <p style={{fontSize:"25px"}}>Next Steps </p><br />
                       <p> By now, you know the basics of how to write React code! <br /><br />

                        Check out the Tutorial to put them into practice and build your first mini-app with React.</p>
                </div>
                <p style={{marginLeft:"900px", marginTop:"60px"}}>
                    NEXT <br />
                    Tutorial: Tic-Tac-Toe
                </p>

                <center id="cen">
                    <hr />
                    <div style={{ marginTop: "40px", marginBottom: "20px" }}> How do you like these docs!</div>
                    <br /><br /><br />
                    <button id="buton" style={{ marginTop: "10px" }}>Take our survey!</button>
                    <hr />
                </center>
            </section>
        </>
    )
}
export { Learn };