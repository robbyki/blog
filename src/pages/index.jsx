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
        <span> My name is Robby and besides for being the best father and husband I can be to my
            beautiful children and wife, I spend a great deal of my time at a terminal tinkering
            with Linux systems and like many others, my pathway to programming was not a
            conventional one. As you get older it's fun to get increasing clarity about the
            fundamentals that propel you forward in life and the elemental fuel that gets you up
            each morning which I would argue are not as fluid as changing tasks or languages. I fell
            in love with technology when I realized what it allowed me to achieve even with
            open source software and a few life changing mentors along the way. The level of
            freedom and control I experienced over my own production constrained by the limits of my
            imagination and creativity and learned craft was and has always been pretty
            intoxicating for me. I've been developing in Fedora and Redhat environments for a long
            time and recently transitioned to a completely neovim based workflow with more than 100
            plugins thanks to the incredible population of other like-minded maniacs who think that
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
