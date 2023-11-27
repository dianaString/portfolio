// import { useState } from 'react'
import avatar from '../images/Avatar.png'
import preview_avieBird from '../images/preview_avieBird.png'
import preview_apiBrushes from '../images/preview_apiBrushes.png'
import preview_wowSearch from '../images/preview_wowSearch.jpg'
import preview_favSeries from '../images/preview_favSeries.jpg'
import preview_sportWeb from '../images/preview_sportWeb.jpg'


function App() {

   return (
      <>
         <div className="container">
            <header className="header">
               <section className="header-container">
                  {/* <span className="header-bubble">...</span> */}
                  <img className="header-img" src={avatar} alt="Diana's Avatar" />
                  <h1 className="header-title">Welcome to my Portfolio!</h1>
                  <p className="header-text">I’m Diana, a <span>Spanish FullStack developer</span> who enjoys creating quality products from the <span>inside out</span>.</p>
                  <a className="header-link" href="https://drive.google.com/file/d/1Grs1_KmyXsCnUy9LGSg1A04bgY6QWOVr/view"
                                 target="_blank" rel="noopener noreferrer">
                                 View Resume
                              </a>
                  <nav className="header-social">
                     <a className="fa-brands fa-square-github" href="https://github.com/dianaString"
                        target="_blank" rel="noopener noreferrer">
                     </a>
                     <a className="fa-brands fa-linkedin" href="https://es.linkedin.com/in/dianammarmol"
                        target="_blank" rel="noopener noreferrer">
                     </a>
                  </nav>
               </section>
            </header>
            {/* <section className="settings">
                  <span className="settings-light setActived">light</span>
                  <span className="settings-dark ">dark</span>
            </section> */}
            <main className="main">
               <ul className="projects-tabs">
                     <li className="actived" >Individual</li>
                     <li className="" >Team Work (soon)</li>
               </ul>
               <div className="projects-container">
                  <div className="articles-container">
                  <article>
                        <div className="article-img">
                           <img src={preview_avieBird} alt="" />
                           <div className="article-img-buttons">
                              <a className="demo-btn" href="https://dianastring.github.io/Avie-Bird"
                                 target="_blank" rel="noopener noreferrer">
                                 test demo
                              </a>
                              <a className="github-btn" href="https://github.com/dianaString/Avie-Bird"
                                 target="_blank" rel="noopener noreferrer">
                                 github repo
                              </a>
                           </div>
                        </div>
                        <h3 className="article-title">Avie Bird, lovebird maker</h3>
                        <p className="article-desc">Personal project, use of React Router DOM, responsive design and vectors.</p>
                        <ul className="article-tools">
                           <li>React</li>
                           <li>JavaScript</li>
                           <li>SCSS</li>
                        </ul>
                     </article>
                     <article>
                        <div className="article-img">
                           <img src={preview_apiBrushes} alt="" />
                           <div className="article-img-buttons">
                              <a className="demo-btn" href="https://brushesapi.onrender.com/"
                                 target="_blank" rel="noopener noreferrer">
                                 test demo
                              </a>
                              <a className="github-btn" href="https://github.com/Adalab/modulo-4-evaluacion-final-dianaString"
                                 target="_blank" rel="noopener noreferrer">
                                 github repo
                              </a>
                           </div>
                        </div>
                        <h3 className="article-title">A Brushes API, from DB to EJS</h3>
                        <p className="article-desc">API REST: Database made with MySQL and server with Express JS and EJS.</p>
                        <ul className="article-tools">
                           <li>MySQL</li>
                           <li>Express.js</li>
                           <li>Node.js </li>
                        </ul>
                     </article>
                     <article>
                        <div className="article-img">
                           <img src={preview_wowSearch} alt="" />
                           <div className="article-img-buttons">
                              <a className="demo-btn" href="https://beta.adalab.es/modulo-3-evaluacion-final-dianaString/"
                                 target="_blank" rel="noopener noreferrer">
                                 test demo
                              </a>
                              <a className="github-btn" href="https://github.com/Adalab/modulo-3-evaluacion-final-dianaString"
                                 target="_blank" rel="noopener noreferrer">
                                 github repo
                              </a>
                           </div>
                        </div>
                        <h3 className="article-title">Owen Wilson’s Wow searcher</h3>
                        <p className="article-desc">Use of an external API, Fetch, Local Storage, React Router DOM and uuid.</p>
                        <ul className="article-tools">
                           <li>React</li>
                           <li>JavaScript</li>
                           <li>SCSS</li>
                        </ul>
                     </article>
                     <article>
                        <div className="article-img">
                           <img src={preview_favSeries} alt="" />
                           <div className="article-img-buttons">
                              <a className="demo-btn" href="https://beta.adalab.es/modulo-2-evaluacion-final-dianaString/"
                                 target="_blank" rel="noopener noreferrer">
                                 test demo
                              </a>
                              <a className="github-btn" href="https://github.com/Adalab/modulo-2-evaluacion-final-dianaString"
                                 target="_blank" rel="noopener noreferrer">
                                 github repo
                              </a>
                           </div>
                        </div>
                        <h3 className="article-title">Series searcher + Add to favorites</h3>
                        <p className="article-desc">Use of an external API, Local Storage, Array Methods, JavaScript Vanilla.</p>
                        <ul className="article-tools">
                           <li>SCSS</li>
                           <li>JavaScript</li>
                           <li>HTML</li>
                        </ul>
                     </article>
                     <article>
                        <div className="article-img">
                           <img src={preview_sportWeb} alt="" />
                           <div className="article-img-buttons">
                              <a className="demo-btn" href="https://beta.adalab.es/modulo-1-evaluacion-final-dianaString/"
                                 target="_blank" rel="noopener noreferrer">
                                 test demo
                              </a>
                              <a className="github-btn" href="https://github.com/Adalab/modulo-1-evaluacion-final-dianaString"
                                 target="_blank" rel="noopener noreferrer">
                                 github repo
                              </a>
                           </div>
                        </div>
                        <h3 className="article-title">Sport Web, from Zeplin to SCSS</h3>
                        <p className="article-desc">Based on a zeplin design, used a NodeJS and Vite template.</p>
                        <ul className="article-tools">
                           <li>SCSS</li>
                           <li>HTML</li>
                        </ul>
                     </article>
                  </div>
               </div>
            </main>
         </div>
      </>
   )
}

export default App

