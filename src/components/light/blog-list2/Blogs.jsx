import React from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Evolution of Cloud Computing: Virtualization to Multi-Cloud Strategies',
      date: 'JUN 6, 2024',
      category: 'Tech',
      author: 'Unitech',
      image: '/light/assets/imgs/blog/b/1.jpg',
    },
    {
      id: 2,
      title: 'Cybersecurity in the Age of IoT: Protecting a Connected World',
      date: 'July 10, 2024',
      category: 'Tech',
      author: 'Unitech',
      image: '/light/assets/imgs/blog/b/3.jpg',
    },
    {
      id: 3,
      title: 'The Rise of Artificial Intelligence: How AI is Shaping the Future of Tech',
      date: 'August 2, 2024',
      category: 'Tech',
      author: 'Unitech',
      image: '/light/assets/imgs/blog/b/2.jpg',
    },
    {
      id: 4,
      title: 'The Role of Open Source Software in Modern Tech Development',
      date: 'August 10, 2024',
      category: 'Tech',
      author: 'Unitech',
      image: '/light/assets/imgs/blog/b/4.jpg',
    },
  ];

  return (
    <section className="blog-list-half section-padding">
      <div className="container">
        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-lg-6" key={post.id}>
              <div className="item mb-50">
                <div className="row rest">
                  <div className="col-lg-6 col-md-5 img rest">
                    <img src={post.image} alt="" className="img-post" />
                    <div className="author d-flex align-items-center">
                      <div className="fit-img icon-img-50 circle">
                        <img src="/light/assets/imgs/blog/author.png" alt="" />
                      </div>
                      <div className="ml-15 fz-14">
                        <div>
                          <span className="opacity-7">Posted by</span>
                          <br />
                          {post.author}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-7 sub-bg cont valign">
                    <div className="full-width">
                      <div className="tags mb-15">
                        <Link to={`/blog-details/${post.id}`}>{post.category}</Link>
                      </div>
                      <h5>
                      <Link to={`/blog-details/${post.id}`}>{post.title}</Link>
                      </h5>
                      <span className="date fz-12 ls1 text-u opacity-7 mt-80">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
