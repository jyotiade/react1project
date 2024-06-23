
const Reference = () => {

    // let [kuchbhi,setKuchbhi]
    return (
        <>
            {/* <section id="reference">
        <h1> this is reference  page</h1>
       </section> */}


            {/*=====================================page start=================================================== */}
            <section id="reference">
                <aside>
                    <ul id="dash3">
                        <li style={{ color: "grey", marginTop:"35px" }}>react@18.2.0</li>

                        <li>Overview</li>
                        <li>Hooks</li>
                        <li>Components</li>
                        <li>APIs</li>
                        <li>Directives</li>
                        <hr />
                        <li style={{ color: "grey" }}>react-dom@18.2.0</li>
                        <li>Hooks</li>
                        <li>Components</li>
                        <li>APIs</li>
                        <li>Client APIs</li>
                        <li>Server APIs</li>
                        <hr />
                        <li style={{ color: "grey" }}>Legacy APIs</li>
                        <li>Legacy React APIs</li>
                    </ul>
                </aside>
                <aside>
                    <ul id="dash2">
                        <li style={{ fontSize: "18px" }}>ON THIS PAGE</li>
                        <li style={{ color: "grey" }}>Overview</li>
                        <li>React</li>
                        <li>React DOM</li>
                        <li>Legacy APIs</li>
                       
                    </ul>
                    {/* ==========================================land page=================================== */}
                    <div id="lpage">
                        <div style={{ fontSize: "20px", color: "grey", paddingTop: "30px" }}>API REFERENCE </div>

                        <div style={{ fontSize: "40px", padding: "20px" }}>Built-in React DOM Hooks</div>

                        <p style={{ fontSize: "22px" }}>The react-dom package contains Hooks that are only supported for web <br />
                            applications (which run in the browser DOM environment). These Hooks are not <br />
                            supported in non-browser environments like iOS, Android, or Windows applications. <br />
                            If you are looking for Hooks that are supported in web browsers and other <br />
                            environments see the React Hooks page. This page lists all the Hooks in the react- <br />
                            dom package.</p>
                        <hr />

                        <div style={{ fontSize: "30px", marginTop: "40px" }}>Form Hooks </div>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Sy3u7x4lVzFLiQyGBc9OAd59TL10s-04dLPb03PGTmcxuTF9" alt="" />
                        <p>Forms let you create interactive controls for submitting information.  To manage forms in your <br />
                            components, use one of these Hooks: </p>
                        <br /><br />
                        <ul>
                            <li>useFormStatus allows you to make updates to the UI based on the status of the a form.</li>
                            <li>useFormState allows you to manage state inside a form.</li>
                        </ul>
                        <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*9DTKx9rXUyJWWW_uR7WXBg.png" alt="" style={{ width: "700px", height: "400px" }} />


                        <p style={{ marginLeft: "700px", marginTop: "60px" }}>
                            NEXT <br />
                            useFormState
                        </p>
                        
                <center id="cen">
                    <hr />
                    <div style={{ marginTop: "40px", marginBottom: "20px" }}> How do you like these docs!</div>
                    <br /><br /><br />
                    <button id="buton" style={{ marginTop: "10px" }}>Take our survey!</button>
                    <hr />
                </center>





                    </div>
                </aside>
            </section>

        </>
    )
}
export { Reference };