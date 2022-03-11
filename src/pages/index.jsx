import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import Nvim from '../images/mynvim-screenshot.png'
// import Nvim from "../images/nvim.png"
// import ThisBlog from "../images/this-blog.png"
// import Gatr from "../images/gatr.png"
import style from './index.module.less'
// import Me from "../images/robby-portrait.jpg"
import Me from '../images/robby-cartoon.jpg'

// import ThisBlog from "../images/this-blog.png"
// import Gatr from "../images/gatr.png"

const IndexPage = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: 'center', marginTop: '80px' }}>
        Not much to see here...
      </h1>
      <SEO title="Home" keywords={['robkiskanyan']} />
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.cover}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={'https://www.linkedin.com/in/robkiskanyan'}
            >
              <img
                src={Me}
                height="200px"
                width="200px"
                style={{ borderRadius: '50%' }}
                alt="Me"
              />
            </a>
          </div>
          <div className={style.content}>
            <span>
              My name is Robby and I have spent most of my career chasing
              something. Thanks to my family, I'm finally beginning to realize
              that whatever it is that I'm chasing isn't really meant to be
              caught as much as it's meant to be understood. I spend a great
              deal of my time at a terminal tinkering with linux systems and
              pretty much anything open-source. My current obsessions are
              learning Go, showcasing technical topics and demonstrating
              efficient developer workflows. To put it a little differently, I
              consider myself an introvert who loves to perform, challenge and
              test my skills after learning something. Yeah, I get how
              disturbing that might sound but it happens. A lot of my
              inspiration as a technologist comes from the hacking culture and
              the mindset that the computer is not a tool to accomplish a task
              but an extension of who we are that can symbiotically shape the
              way we think and do things. I'm currently a software developer at
              IBM where I help engineering teams with the application tooling
              and frameworks for designing and deploying cloud-native
              containerized workloads on Kubernetes. I've been using Fedora and
              Redhat environments for a long time and I my HCI of choice is a
              badass neovim setup while typing dvorak on a kinesis advantage
              keyboard.
            </span>
          </div>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.post}>
          <div className={style.cover}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={'https://github.com/robbyki/dotfiles/tree/main/nvim'}
            >
              <img src={Nvim} height="200px" width="200px" alt="nvim" />
            </a>
          </div>
          <div className={style.content}>
            <span>
              I recently completed a full migration to Neovim for most of
              everything I do and think it's pretty fantastic. Feel free to get
              inspired by anything in my configs. You can also see how I use my
              environment in my videos.{' '}
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
