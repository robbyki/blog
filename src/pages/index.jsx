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
      <h3 style={{ textAlign: 'center', marginTop: '150px' }}>
        Dawn Programmer. Black Coffee. Terminal Obsessed. Metawork Maniac.
      </h3>
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
              My fuel in life and career is and always has been to break down
              complacency and the atrophying comforts of today to re-imagine and
              re-invent a different tomorrow. That autonomous and driven mindset
              has also granted me the fortune of having worked at some of the
              largest tech companies in the world, yet not having had a job in
              more than 15 years. The very idea of not enjoying the work that
              you do or not getting to permeate the full force of your unique
              essence into your daily purpose is simply not an option in my
              opinion. I cherish the inextricably connected elements of risk and
              reward and consider one of my biggest strengths to be the
              awareness and intuition of my own weaknesses and allowing those
              weaknesses to manifest as opportunities and guide my growth as a
              person and as a leader steering the human energy around me. I've
              been a competitive athlete, an english literature graduate, an
              editor, a pre-med student, a digital marketer, an ad-tech account
              manager, a programmer, a developer framework lead, a devops
              engineer, an analyst and a tool maker. I vociferously despise
              talking for the sake of talking and consider toxic and superfluous
              meetings meant to make people feel as though they are working an
              anathema and one of the most pernicious dangers to innovation and
              growth in any environment. I'll be the first to admit that
              effective and transformational leadership isn't as prevalent as I
              would hope but I have seen first hand and in varying degrees, the
              effects of harnessing disparate, supportive and kind talents when
              it comes to creating a tomorrow better than today.
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
