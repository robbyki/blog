import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Nvim from "../images/mynvim-screenshot.png"
// import Nvim from "../images/nvim.png"
// import ThisBlog from "../images/this-blog.png"
// import Gatr from "../images/gatr.png"
import style from "./index.module.less"
// import Me from "../images/robby-portrait.jpg"
import Me from "../images/robby-reed.png"

// import ThisBlog from "../images/this-blog.png"
// import Gatr from "../images/gatr.png"

const IndexPage = () => {
    return (
        <Layout>
            <h1 style={{ textAlign: "center", marginTop: "80px" }}>hi there</h1>
            <SEO title="Home" keywords={["robkiskanyan"]} />
            <div className={style.card}>
                <div className={style.post}>
                    <div className={style.cover}>
                        <a
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            href={"https://www.linkedin.com/in/robkiskanyan"}
                        >
                            <img
                                src={Me}
                                height="200px"
                                width="200px"
                                style={{ borderRadius: "50%" }}
                                alt="Me"
                            />
                        </a>
                    </div>
                    <div className={style.content}>
                        <span>My name is Robby and besides for being focused on
                            trying to not shamefully and irredeemably fail as a
                            father and husband (yes, that's my success kpi
                            right now while co-parenting to keep a baby alive
                            while also running after a 4 year old before
                            crashing onto a bed by 8pm every night), I spend a
                            great deal of my time at a terminal tinkering with
                            linux systems and anything open source. My current
                            obsessions involve communicating technical content
                            I consider fun and creating videos not so much to
                            gift others with my genius and showoff all of my
                            shortcuts but because I get a thrill from the
                            pressure of preparing and creating compelling
                            material that hopefully resonates with others and
                            most importantly to hear myself sound really smart
                            after learning something new...probably a vestige
                            from my early days as an athlete, who knows. To put
                            it a little differently, I consider myself an
                            introvert who loves to perform after learning
                            something. Yeah, I get what a disturbing
                            clusterf%!#! that might be to your brain but get
                            used to it, it happens. Being an introvert who
                            loves to go deep does not always mean that you
                            can't also be a verbose lunatic at times, just ask
                            my wife, she's always telling me to stop talking so
                            much. Please check yourself if you find yourself
                            type casting and stifling the awesomeness that
                            introverts may have to offer. (Notice how I just
                            said way too much and didn't shut up soon enough
                            about this?). A lot of my inspiration as a
                            technologist comes from the hacking culture and the
                            mindset that the computer is not a tool to
                            accomplish a task but an extension of who we are
                            that can symbiotically shape the way we think and
                            do things. I'm currently a software developer at
                            IBM where I help engineering teams with the
                            application tooling and frameworks for designing
                            and deploying cloud-native containerized workloads
                            on Kubernetes. I've been using Fedora and Redhat
                            environments for a long time and I my HCI of choice
                            is the coolest neovim setup and typing dvorak on a
                            kinesis advantage keyboard.</span>
                    </div>
                </div>
            </div>



            <div className={style.card}>
                <div className={style.post}>
                    <div className={style.cover}>
                        <a
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            href={"https://github.com/robbyki/dotfiles/tree/main/nvim"}
                        >
                            <img src={Nvim} height="200px" width="200px" alt="nvim" />
                        </a>
                    </div>
                    <div className={style.content}>
                        <span>
                            I recently completed a full migration to Neovim for
                            most of everything I do and think it's pretty
                            fantastic. Feel free to get inspired by anything in
                            my configs. You can also see how I use my environment in my videos.{" "}
                        </span>
                    </div>
                </div>
            </div>


        </Layout>
    )
    // <div className={style.card}>
    //   <div className={style.post}>
    //     <div className={style.cover}>
    //       <a
    //         target="_blank"
    //         rel="nofollow noopener noreferrer"
    //         href={"https://github.com/robbyki/blog"}
    //       >
    //         <img src={ThisBlog} height="150px" width="225px" alt="blog" />
    //       </a>
    //     </div>
    //     <div className={style.content}>
    //       <span>Is available on my github you can fork it if you want.</span>
    //     </div>
    //   </div>
    // </div>
    // <div className={style.card}>
    //   <div className={style.post}>
    //     <div className={style.cover}>
    //       <a
    //         target="_blank"
    //         rel="nofollow noopener noreferrer"
    //         href={"https://github.com/robbyki"}
    //       >
    //         <img src={Nvim} height="200px" width="200px" alt="nvim" />
    //       </a>
    //     </div>
    //     <div className={style.content}>
    //       <span>
    //         I have a pretty popular Neovim config over on Github if you're
    //         interested. A lot of the process to create it has been documented{" "}
    //         <Link to={"/neovim"}>here</Link>.
    //       </span>
    //     </div>
    //   </div>
    // </div>
    // <div className={style.card}>
    //   <div className={style.post}>
    //     <div className={style.cover}>
    //       <a
    //         target="_blank"
    //         rel="nofollow noopener noreferrer"
    //         href={
    //           "https://spacenews.com/lockheed-martin-offering-new-satellite-image-analysis-service/"
    //         }
    //       >
    //         <img src={Gatr} height="150px" width="300px" alt="blog" />
    //       </a>
    //     </div>
    //     <div className={style.content}>
    //       <span>
    //         During my time at Lockheed Martin I worked with some awesome
    //         engineers and was the software lead for a project called G.A.T.R.
    //       </span>
    //     </div>
    //   </div>
    // </div>
}
export default IndexPage
