function sorterOfBlogs(blog) {
  const blogArr = [];
  for (let i = 0; i < blog.length; i++) {
    const x = blogArr.length - 1;
    if (i === 0) {
      blogArr.push({ id: blog[i].id, blogTitle: blog[i].title, text: blog[i].content, author: blog[i].name, tags: [blog[i].tag] });
    } else if (blog[i].id === blog[i - 1].id) {
      blogArr[x].tags.push(blog[i].tag);
    } else if (blog[i].id !== blog[i - 1].id) {
      blogArr.push({ id: blog[i].id, blogTitle: blog[i].title, text: blog[i].content, author: blog[i].name, tags: [blog[i].tag] });
    }
  }
  return blogArr;
}

module.exports = sorterOfBlogs;
