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
						<span>
              My name is Robby, I pretty much live at a terminal and I'm
            thoroughly obsessed with continuously learning ways to improve my
            workflow and adopting faster ways to do repetitive tasks. I enjoy
            working with code and tools to build useful things that bring joy
            to developers. I've spent most of my career helping modernize data
            intensive stacks using open source technologies. I fell in love
            with development during my time at Yahoo where I used a lot of
            Python, Pandas and SQL to help wrangle and visualize data extracted
            from HDFS using basic bash scripts to automate extractions from a
            rest api. After Yahoo I joined the Weather Channel to help launch
            the first of its kind Data Science platform to enable weather
            triggered ads where I learned a lot about using AWS cloud services
            along with Spark and serverless computing on EC2 and also had the
            chance to showcase and teach others about exploratary data analysis
            using Jupyter notebooks. More recently I have built Spark
            development environments with Scala and sbt for containerized
            deployments to Kubernetes and Openshift at IBM. I've been
            developing in Fedora and Redhat environments for a long time and
            recently transitioned to a completely neovim based environment for
            most of my development.
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
