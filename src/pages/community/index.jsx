
const Community = () => {

    return (
        <>
            {/* <section id="community">
        <h1> this is community page</h1>
       </section> */}
            <section id="community">

                <aside>
                    <ul id="dash3">
                        <li style={{ color: "grey" }}>GET INVOLVED</li>

                        <li>Community</li>
                        <li>React Conferences</li>
                        <li>React Meetups</li>
                        <li>React Videos</li>
                        <li>Meet the Team</li>
                        <li>Docs Contributors</li>
                        <li>Acknowledgements</li>
                        <li>Versioning Policy</li>
                    </ul>
                </aside>


                <aside >
                    <ul id="dash2">
                        <li style={{ fontSize: "18px" }}>ON THIS PAGE</li>
                        <li style={{ color: "grey" }}>Overview</li>
                        <li>Code of Conduct</li>
                        <li>Stack Overflow</li>
                        <li>Popular Discussion Forums</li>
                        <li>News</li>
                    </ul>
                </aside>

                {/* =======================page========================================== */}
                <div id="lpage">
                    <div style={{ fontSize: "20px", color: "grey", paddingTop: "30px" }}>COMMUNITY </div>

                    <div style={{ fontSize: "40px", padding: "20px" }}>React Community</div>

                    <p style={{ fontSize: "22px" }}>React has a community of millions of developers. On this page we’ve listed some <br />
                        React-related communities that you can be a part of; see the other pages in this <br />
                        section for additional online and in-person learning materials.

                    </p>

                    <div style={{ fontSize: "30px", marginTop: "20px" }}>Code of Conduct </div>


                    <p>Before participating in React’s communities, please read our Code of Conduct. We have adopted <br />
                        the Contributor Covenant and we expect that all community members adhere to the guidelines <br />
                        within. </p>
                    <br />
                    <div style={{ fontSize: "30px", marginTop: "20px" }}>Stack Overflow  </div>
                    <p>Stack Overflow is a popular forum to ask code-level questions or if you’re stuck with a specific <br />
                        error. Read through the existing questions tagged with reactjs or ask your own!</p>

                    <div style={{ fontSize: "30px", marginTop: "20px" }}>Popular Discussion Forums  </div>
                    <p>There are many online forums which are a great place for discussion about best practices and <br />
                        application architecture as well as the future of React. If you have an answerable code-level <br />
                        question, Stack Overflow is usually a better fit.
                        <br /> <br />
                        Each community consists of many thousands of React users.</p>
                    <ul>
                        <li> DEV’s React community</li>
                        <li>Hashnode’s React community</li>
                        <li>Reactiflux online chat</li>
                        <li>Reddit’s React community</li>
                    </ul>

                    <div style={{ fontSize: "30px", marginTop: "20px" }}>News </div>
                    <p>For the latest news about React, follow @reactjs on Twitter and the official React blog on this <br />
                        website.</p>

                    <p style={{ marginLeft: "700px", marginTop: "50px" }}>
                        NEXT <br />
                        React Conferences
                    </p>

                    <center id="cen">
                        <hr />
                        <div style={{ marginTop: "40px", marginBottom: "20px" }}> How do you like these docs?</div>
                        <br /><br /><br />
                        <button id="buton" style={{ marginTop: "10px" }}>Take our survey!</button>
                        <hr />
                    </center>
                </div>
            </section>
        </>
    )
}
export { Community };