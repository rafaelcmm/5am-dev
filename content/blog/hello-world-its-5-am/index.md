---
title: Hello World, It's 5am
date: "2019-12-26"
description: "This is the first my first blog post. I'll try to explain a little about why and how I did it. Check it out!"
---

This is my first post on my new blog. This has no money making intents, and it exists just to 
improve my productive time and share some of my knowledge with others. I will try to keep it updated
every day (at least commercial days), and every day share a little of what I know.

So, I haven't anything planned for this first post, so I will talk a little about how I decided to
start this blog and what stack I'm using here.


## Why? (If you here just to check out some code, just skip to the next section)

Me and my wife decided to "join" the 5am club. For those who are interested to learn more about it,
You can check it
[right here](https://www.robinsharma.com/book/the-5am-club). (and no, you don't need to buy any book
that you don't want to join it. I'm just referring).

#### The 5am club

So, since the beginning of my career as a software engineer I have problems with day productivity. Waking
up every day by noon, I was disturbing all my wife and daughter routines. I also was having issues with
daily meetings, always having to wake up hurried and joining my team meetings without any preparation.

The problems were many, so I will make a quick list (It's so easy to write blogs with markdowns).

- Problems scheduling meetings with my remote team;
- Always ending my work late, not being able to spend some quality time with my family;
- Working when everyone is resting;
- Not taking anytime for introspection;
- Bad life quality, skipping all my meals and doing no exercises;
- Never having time for improve my skills by studying;
- And a lot more.

#### And how wake up this early solves all these problems?

Well, just the act of wake up with the sun doesn't really solve all the problems, but what you do
with your extra time is what counts. Just today, in my first trial at this new `lifestyle`, I was able
to:

- Take a peaceful bath
- Drink some tea
- Watch a movie with my wife (yes, at 5:30am)
- Review some PR's
- Develop this blog
- Write this article
- Take a look on my [Linkedin](https://www.linkedin.com/in/rafaelcmm/)

And it isn't even close to the hour I was used to wake up yet! (It is now 9:20am)

`Try it tomorrow, and share your experience with me!`

![Chinese Salty Egg](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGvW0N3sa_jn6hDruMNpHZVKDHQEDDTcmNO7Vxvhofy311RwWA)

## How? (here you can see some code)

So, since I don't want to spend much time here, I choose a simplest stack I could think of to develop
this blog fast and share my knowledge and opinions. 

To do what I did here, you must know these acknowledgements below. I will list it and point where do
you need to go to learn about it 

1. React (And by that, HTML, Javascript...) [here](https://pt-br.reactjs.org/)
2. Gatsby (A React framework) [here](https://www.gatsbyjs.org/)
3. Styled-components library [here](https://www.styled-components.com/)
3. Markdowns [here](https://www.markdownguide.org/)

At this point, I will asume that you have all these skills. My goal here is not to create a tutorial
blog like `Medium`, so I will try to be quick and objective on how I coded this blog, and any questions
you can make me on my [Linkedin](https://www.linkedin.com/in/rafaelcmm/). I'm always available.

So, open your terminal, navigate to your workspace and execute the following commands

1. Install gatsby (skip if you have already installed)
```
npm install -g gatsby-cli
```

2. Create your blog project using the gatsby markdown blog template, and run on development
```
gatsby new ${project-name} https://github.com/gatsbyjs/gatsby-starter-blog
cd ${project-name}
gatsby develop
```

Useful tip:
> You can change some metadata on `gatsby-config.js` file, and some SEO changes at `seo.js` component

And that's it, you just created and runned your first blog application with gatsby. Just open
http://localhost:8000/ and check it.

Now, you just need to use styled-components library to give your blog a face, and use the markdown
language to write your posts.

As I said before, this is not a tutorial, so I will just give some samples of how you can do it.
With that added to the library you studied on the docs I've linked, you will be able to style your
blog in any way you want to.

So, to create a styled component, you just need to declare a constant, and use styled-components api
to add some style and retrieve a react component `like magic`.

```javascript
const BlogTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  margin: 0;
  color: white;
`;
```

Reading the code, you can easily deduce that the we are passing to a generated h3 element from
the library a stylesheet, and attributing this generated react element to `BlogTitle`.

After that, you can use `BlogTitle` as any other react component

```javascript
const BlogHeader = () => (
  <>
    <BlogTitle />
    ...
  </>
)

export default BlogHeader;
```

Check the full component sample here: 

```javascript
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
  background: #333333;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BlogTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  margin: 0;
  color: white;
`;

const LinkToRoot = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const BlogHeader = ({ title }) => (
  <HeaderContainer>
    <BlogTitle>
      <LinkToRoot to={`/`}>
        {title}
      </LinkToRoot>
    </BlogTitle>
  </HeaderContainer>
)

export default BlogHeader;
```

Well, now you know how to create styled components and apply it to your code. Now, to write posts, just
create a folder under `content/blog` path, name it with your desired blog url and have fun!

The structure will look like something like this:

- content
    - blog 
        - my-new-article
            - index.md
            - other content
            
And to write your posts, just attribute some metadata and use the markdown language to write your
articles! In the top of `.md` file, add something like this:

```
---
title: Article title
date: "2019-12-26" (Any date here)
description: "some awesome description"
---
```

And that's it! Your article will be available for navigation on your index page! (unless you change something).

Now you can build your blog with gatsby and deploy it to wherever you want to!

You can check the full project [here](https://github.com/rafaelcmm/5am-dev). Hope you have enjoyed it,
any suggestions just chat me on my linkedin and I will be glad to answer it.

See you tomorrow! (I hope so).