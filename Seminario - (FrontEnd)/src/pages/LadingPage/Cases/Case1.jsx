import React from 'react'

export const Case1 = () => {
  return (
    <>
    <div className='container'style={{paddingTop: '9.5rem'}}>
    <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis"style={{ backgroundColor: '#1D39E8' }} >
      <div className="col-lg-6 px-0">
        <h1 className="display-4 text-white hero-text">Primer Caso</h1>
        <p className="lead my-3 text-white">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      </div>
    </div>
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        Violencia Digital
      </h3>

      <article className="blog-post">
        <h2 className="display-5 link-body-emphasis mb-1">Sample blog post</h2>
        <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

        <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
        <hr />
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
     
      </article>

      
    </div>
    </div>
    </>
  )
}
