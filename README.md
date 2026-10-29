# My Personal Website

If you want to know more about me, how I think, what I spend my time on and so on, this website would be the place to look. Information about our selves tends to be separated in all these different platforms but I wanted something that acts as a centralize location for my place on the internet.

## Development

I wanted a website that could inform people about me if they were curious. I would also include a blog section because I find it is another great way to practice my writing and share what I think. 

### Why Create This?

My last website had all of these things but not to the degree I wanted it. The pages were full of information that could be cut down as well as polished. The UI was not up to my standards and I didn't fully understand the code. I just wanted a nice looking website that had some information about me and had a blog page. I had all that but I didn't really "create" it. AI helped me generate the code needed for a functional blog system and I was not making an effort to understand the new framework I was utilizing. Sure it was my website but the more I would think about it, it felt like I didn't really own it because the effort was not there. 

After weeks of feeling dirty and knowing that I am capable making something better and more concrete, I finally mustered up the courage to learn and put effort in to make something that I would be proud of.

### Design Choice

Simple, legible and pleasing to the eyes. 

When thinking simple, I only kept in components that were needed. When I broke it down, most of the components lived in the body. The nav and footer would just include links and maybe some custom made, unique components. The body is just as simple. Headers, paragraphs, links and cards. The only thing that naturally followed was spacing, sizing and color choice. Obviously there are a couple more things needed like italics, bolds and other stuff but that all naturally fell into place.

I shamefully admit that I did not use Figma or any other UI design software but I should start learning to because I heard it is very helpful in the design process.

## Built With

Next.js, Typscript, CSS, MDX (for blogs). May I also should add sweat, blood and tears. I'm just kidding it wasn't that serious, I just had that joke floating around in my head at the time of writing this.

## Reflection

Fun. That is my reflection, it was very fun. The feeling of learning something new, in this case Next.js, is always fun. The directory based page routing, the server and client side rendering gibberish, working with dynamic routes, etc. Also re-establishing my design system in another project is always fun too because it reminds me how robust it is (its not perfect but its pretty good). 

### Challenges

- Wrapping my head around the SSR/SSG concepts
- Working with dynamic routes and their the data thats inherently attached to them (this is the best way I can articulate this idea, don't be afraid if you can't understand that sentence, I am still learning to articulate myself better)
- Finding good consistent spacings between different types of combination of components
- Getting the blog system to work (utilizing MDX files to embed custom components and understanding the blog system that I implemented, big thanks to the Next.js docs)
- Setting the excess website background to be the default background color instead of white when putting the Google Chrome app on landscape (iPhone). This was really annoying. Fix was to change the export viewport component in the main layout.tsx and have a field with viewportFit: "cover".
- Getting multiline string arguments to work inside my MDX files. Implemented a work around where I use ;; inside the string and the component that takes it in processes it as a line break.

### What I Learned

- Next.js page routing
- Next.js dynamic routing
- How to generate pages from static data
- Better planning when it comes to spacing consistency between components
- Less is more
- All images must require an alt (I always knew that they were needed but not why)
- Your code does not have to be perfect, no one is going to die because you repeated one line of code (unless you work for NASA or something)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
