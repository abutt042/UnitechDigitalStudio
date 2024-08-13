const Blog = ({ blogPost }) => {
  
  return (
    <section className="blog-content section-padding">
     <div className="blog-content" style={{padding:'2% 5%'}}>
      <h1 style={{fontSize:'40px'}}>{blogPost.title}</h1>
      <p>{blogPost.introduction}</p>
      
      <h2 style ={{fontSize : '30px'}}>{blogPost.subheading1}</h2>
      <p>{blogPost.content1}</p>

      <h2 style ={{fontSize : '30px'}}>{blogPost.subheading2}</h2>
      <p>{blogPost.content2}</p>

      <h2 style ={{fontSize : '30px'}}>{blogPost.subheading3}</h2>
      <p>{blogPost.content3}</p>

      <h2 style ={{fontSize : '30px'}}>Conclusion</h2>
      <p>{blogPost.conclusion}</p>
    </div>
    </section>
  );
};

export default Blog;
