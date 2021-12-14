import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { Link } from "gatsby"
import Me from "../images/robby-portrait.jpg"
// import Nvim from "../images/nvim.png"
// import ThisBlog from "../images/this-blog.png"
// import Gatr from "../images/gatr.png"
import style from "./index.module.less"

const IndexPage = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>Portfolio</h1>
      <SEO title="Home" keywords={["innerloopvelocity"]} />
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
            <span>
            My name is Robby, I enjoy working with code to build useful things
            that bring joy to developers. I've spent most of my career helping
            modernize data intensive stacks using open source technologies. I
            started my career in engineering at Yahoo using a lot of Python,
            Pandas, Spark and SQL in conjunction with AWS services for
            analyzing and prototyping models prior to production deployment. I
            then spent several years at IBM where I have built Spark
            development environments with Scala and sbt for deployments to
            Kubernetes. I've been developing in Fedora and Redhat environments
            for a long time and switching to Linux, as painful as it can be at
            times has probably been the single most important decision I have
            made in my career. I enjoy creating videos showcasing my interests
            with all things code, linux and CLI tooling.
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
