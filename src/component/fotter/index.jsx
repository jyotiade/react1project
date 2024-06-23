import '../../assests/style/index.css';
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {

    return (
        <>
            <section>
                <div id='main'>
                    <div id='l1'>
                        <ul>
                            <li id='list1'>MetaOpenSource</li>
                            <li>©2023</li>
                        </ul>
                    </div>

                    <div id='l2'>
                        <ul>
                            <li id='list1'>LearnReact</li>
                            <li>Quick Start</li>
                            <li>Installation</li>
                            <li>Describing the UI</li>
                            <li>Adding Interactivity</li>
                            <li>Managing State</li>
                            <li>Escape Hatches</li>
                        </ul>
                    </div>

                    <div id='l1'>
                        <ul>
                            <li id='list1'>API Reference</li>
                            <li>React APIs</li>
                            <li>React DOM APIs</li>
                        </ul>
                    </div>

                    <div id='l2'>
                        <ul>
                            <li id='list1'>Community</li>
                            <li>Code of Conduct</li>
                            <li>Meet the Team</li>
                            <li>Docs Contributors</li>
                            <li>Acknowledgements</li>
                        </ul>
                    </div>

                    <div id='l1'>
                        <ul>
                            <li id='list1'>More</li>
                            <li>Blog</li>
                            <li>React Native</li>
                            <li>Privacy</li>
                            <li>Terms</li>

                            <div id='fot1'>
                                <li><CiFacebook /></li>
                                <li><FaXTwitter /></li>
                                <li><FaGithub /></li>
                            </div>
                        </ul>
                    </div>


                </div>
            </section>
        </>
    )
}
export default Footer;