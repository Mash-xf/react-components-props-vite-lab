import React from "react";
import blogData from './blog.js'
import Header from './component/header.jsx'
import About from './component/about.jsx'
import ArticleList from './component/articlelist.jsx'

function App() {

  return (
    <>
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </>
  )
}


export default App;
