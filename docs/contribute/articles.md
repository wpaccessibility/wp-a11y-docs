---
title: Add a blog post
parent: How to contribute
nav_order: 2
---

# Add or change blog post.

Each blog post file has the same setup.  First a set of variables like the title and the parent. Then the content using Markdown. 

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
parent: Articles
excerpt: "Able player is now available for YouTube videos in the WP Accessibility Knowledge Base."
date: 2025-08-16
---
```

Use for the `permalink` the structure `/blog/YYYY/name/`.
The `date` can be in the future, the post will show up from that date and not before.
The option for listings of `categories` hasn't been implemented yet, but please use it already.

## The content of post

The theme already adds the title, the author and date published for you.

The page [Content kitchen sink](/docs/contribute/content-kitchen-sink/) describes and displays all options for the content, like: markdown, images, videos, code, callouts and how to indicate a different langauge in the text.

## How to start

If you have an idea for a blog post, please open an [issue on GitHub](https://github.com/wpaccessibility/wp-a11y-docs/issues) and share your idea first.
If you want to work on a blogpost (yay!) please let us know by adding a comment with the issue.

Need help? Feel free to [contact us](/docs/contact/).







