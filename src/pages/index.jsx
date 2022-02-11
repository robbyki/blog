import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Nvim from "../images/mynvim-screenshot.png"
// import Nvim from "../images/nvim.png"
// import ThisBlog from "../images/this-blog.png"
// import Gatr from "../images/gatr.png"
import style from "./index.module.less"
import Me from "../images/robby-portrait.jpg"

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
                            trying to be the best father and husband I can be to
                            my beautiful wife and children, I spend a great deal
                            of my time at a terminal tinkering with linux
                            systems and learning how to improve my effectiveness
                            and speed as a developer and thinker. I enjoy
                            creating compelling communication and content
                            showcasing novel and elegant solutions to complex
                            problems with open source technology and have been
                            architecting and building tools and software against
                            enterprise grade stacks for more than a decade. I'm
                            currently a software developer at IBM where I help
                            engineering teams with the application tooling and
                            frameworks for designing and deploying cloud-native
                            distributed ETL workloads on Kubernetes. My journey
                            as a technologist started as a TAM at Yahoo's Ad
                            Exchange where I built custom analytics solutions,
                            primarily using Python, for marketers and learned
                            that building tooling and products that resonated
                            with end-users can be as rewarding as it can be
                            challenging. I'm a big fan of anything Linux and
                            have been using Fedora and Redhat environments for a
                            long time. On a personal level, I use dvorak on a
                            kinesis keyboard and my primary workflow consists of
                            a fully customized neovim setup I enjoy obsessively
                        tweaking.</span>
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
