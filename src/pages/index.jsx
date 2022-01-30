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
        <span>My name is Robby and besides for being focused on trying to be the
        best father and husband I can be to my beautiful wife and children, I
        spend a great deal of my time at a terminal tinkering with linux systems
        and learning how to improve my effectiveness and speed as a developer
        and thinker. I enjoy creating compelling communication and content
        showcasing novel solutions to complex problems and have been
        architecting and designing against enterprise grade stacks for more than
        a decade. I'm currently a software developer at IBM where I help
        engineering teams with the application tooling and frameworks for
        designing ETL workloads and deploying microservice based applications to
        container platforms. I consider myself both a life-long student and a
        mentor and have always considered the latter a gratifying and integral
        part of my growth as a human and as a leader. My journey as a
        technologist started as a TAM at Yahoo's Ad Exchange where I built
        custom analytics solutions for marketers and learned that building
        tooling and products that resonated with end-users can be as rewarding
        as it can be challenging. I'm a big fan of anything linux and have been
        using Fedora and Redhat environments for a long time. On a personal
        level, I use dvorak on a kinesis and my primary workflow consists of a
        fully customized neovim setup I enjoy continually tweaking.</span>
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
