---
title: Add a blog post
parent: How to help on GitHub
nav_order: 2
---

# Add or change blog post.

Do you have a great idea for a blog post or do you want to pick up an open issue for GitHub? Here's the documentation how to write and add post for this website.

Each blog post file has the same setup. First a set of variables like the title and the parent. Then the content using Markdown. 

The blog post live in the directory `/_posts/` and are named `yyyy-mm-dd-title.md`.
For example `2025-08-16-able-player-now-available.md`.

## The variables at the top of the file for a blog post

For example:
```
---
layout: post
title: "The Able Player is now available for videos"
permalink: /blog/2025/able-player-available-for-videos/
author: Joe Dolson
categories: video
parent: Blog
excerpt: "Able Player is now available for YouTube videos in the WP Accessibility documentation."
date: 2025-08-16
---
```

The layout must be `post`, the parent `Blog`,  use for the `permalink` the structure `/blog/YYYY/name/`.

The `date`, `author` and `excerpt` will show up below the title on the [Blog archive page](/blog/) and below the title on the blog post itself.
The `date` can be in the future, the post will show up from that date and not before.

The option for listings of `categories` hasn't been implemented yet, but please use it already.

## The content of post

The theme inserts your title, author, and the date of publication for you, so you should not include these in the content of your post.

The page [Content kitchen sink](/docs/contribute/content-kitchen-sink/) describes and displays all options for the content, like: markdown, images, videos, code, callouts and how to indicate a different language in the text.

## How to start

If you have an idea for a blog post, please open an [issue on GitHub](https://github.com/wpaccessibility/wp-a11y-docs/issues) and share your idea first.
If you want to work on a blog post (yay!) please let us know by adding a comment with the issue.

Need help? Feel free to [contact us](/docs/contact/).







