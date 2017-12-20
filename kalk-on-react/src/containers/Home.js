import React from 'react'
import { getSiteProps, Link } from 'react-static'
//

export default getSiteProps(({ projects }) => (
  <div>
    <p>KALK, an open minded project for material art- and objects of use.
<br />Diversity of phases already done:</p>
<br />
<ul>
  {projects.map(post => (
    <li key={post.id}>
      <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
    </li>
  ))}
</ul>
  </div>
))
