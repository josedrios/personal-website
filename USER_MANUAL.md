# User Manual

A reference file to look at if I ever forget specific processes or notes that are important.

## Blogging

Just a couple reminders when blogging.

1. Feel free to use the Note and Quote components in the blogs (Code block is in still under developement).
2. Always include title, created and (if appropriate) updated fields in frontmatter. Also make sure dates are correct.
3. If leaving an update note, leave the date you put that update note.
4. Notes also have a danger variant as well as a way to change the title/prefix of the Note.
5. Don't use H1 tags unless you really want to emphasize something. The biggest header tags you should use are H2 because H1 is for the blog title.
6. Use <Image></Image> to add images and the src should be the path the image like "/images/blogs/image_name.webp".
7. ALWAYS INCLUDE AN ALT WITH IMAGES IF USED.

### Links

Links will automatically open in a new tab. Just make sure to follow the syntax in MDX files:

[Link Title Shown](the actual link)

### Components
Make sure the arguments passed to the these components are as param="..." because MDX has a hard time parsing with param={...}

#### Code
Must pass text (the code that will be displayed) and language of the text. Not as children but as string arguments through the component.

If you want to use " inside a pair of "...", use &quot; instead

For line breaks use ;;

I tried many different ways but I just ended up settling with using ;; for line breaks. The component will automatically register the ;; text as line breaks.


How to use:
<Code text="goodbye = &quot;Catch you on the flip side&quot; ;;# Me commenting in my code snippet like a pro;;print(goodbye)" language="python"/>

#### Note
The actual text of the note is passed inside the tag as a child.

If you want to change the title (NOTE part) of the note you can pass an argument in for it (ex. title="Alert"). THIS IS OPTIONAL

If you want to really distinguish this note block in a dangerous light, pass the danger param so that the note utilizes a red color scheme (ex <Note danger>...). It is a boolean.

HOW TO USE:
<Note>Message</Note>

If you want to change the title pass in a argument for the title parameter. If you want to add the danger toggle to turn it into a danger note pass in the proper argument as well.

#### Quote

The actual quote for this block is passed inside the tag as a child.

The author is passed as a string param through the component (ex. <Quote author="Jon Bernthal">I hate naps</Quote>)

## Public Folder Organization

Divided into three sections:

1. /favicons
2. /files
3. /images

The only section that is divided further is the /images directory:

1. /blogs
2. /pages
3. ogimage.jpg

The /blogs directory stores all images in blog pages, /pages stores images for general pages like the home page, etc., and the ogimage.jpg is the image used when sharing a link and you see an image on the card. Like when you share a link on facebooks, twitter or discord.

## Dithering Images

Images like normal page images or blog page images should be dithered. Why? Because it looks cool. That's it.

Consistency among dithered images would be best. The dither type doesn't have to be exact everytime, just choose one that looks best with the image.

### Dithering Process

1. Go to app.dithermark.com
2. Insert image
3. Look at 'Color Dither' section
4. Choose a dither algorithm (ex. Yliluoma Bayer 2x2)
5. Export image as .webp

## Lowering Quality of Images

To conserve space you can lower the quality of images with this website

https://lowqualityimage.org/
