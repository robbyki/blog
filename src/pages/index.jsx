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
			<h1 style={{ textAlign: "center", marginTop: "80px" }}>Welcome</h1>
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
        <span> My name is Robby and besides for being focused on trying to be the best father and
            husband I can be to my beautiful wife and children, I spend a great deal of my time at a
            terminal tinkering with Linux systems and learning how to improve my effectiveness and
            speed as a developer. I'm currently a software developer at IBM where I help data
            engineering teams with the application tooling and frameworks for deploying distributed
            applications to Kubernetes and Openshift. I fell in love with technology as a TAM at
            Yahoo's Ad Exchange where I built custom analytics solutions for marketers and realized,
            with the help of some life-changing mentors, a database and scripting things with
            Python, how much I enjoyed building and presenting technical solutions to complex
            problems. I've been developing in Fedora and Redhat environments for a long time and
            have always enjoyed combining the elements of story-telling and engineering in order to
            create compelling demos and narratives using open source tools. On a personal level, I
            use dvorak on a kinesis and my primary workflow leverages more than 100 neovim plugins
            thanks to the incredible population of other like-minded maniac vimmers who think that
            developer speed and shortcuts are more important than food or water.</span>
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
