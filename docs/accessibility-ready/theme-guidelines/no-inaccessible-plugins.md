---
title: Must not recommend inaccessible plugins
layout: default
parent: Theme accessibility-ready guidelines
nav_order: 17
description: Accessibility-ready themes must not recommend inaccessible plugins.
contributors:
  - Amber Hinds
  - Joe Dolson
redirect_from:
  - /docs/topics/theme-guidelines/no-inaccessible-plugins/
---

# Must not recommend inaccessible plugins

## Basic principle

Accessibility Ready themes must not recommend plugins that introduce known accessibility barriers as part of the theme’s setup process or ongoing use within the WordPress admin.

Themes play a significant role in shaping how site owners build and extend their websites. When a theme directs users toward inaccessible plugins — whether through onboarding screens, admin notices, documentation, or demo imports — it undermines the goal of providing an accessible foundation and can result in inaccessible websites even when the theme itself meets accessibility requirements.

Accessibility Ready themes should guide users toward accessible choices by default, not place accessibility barriers directly in their recommended setup paths.

Themes should either:
1. Not recommend plugins at all or,
2. If recommending plugins, only recommend plugins that similarly pass accessibility-ready requirements.

### What is considered a plugin recommendation?

It is considered a recommendation to include language or prompts that actively suggest that a user install a plugin. Examples of this behavior could include (but is not limited to) having blocks in your starter content that contains links to install plugins or bundling packages like TGM Plugin Activation, or displaying admin notices recommending that user's install specific plugins.

Declaring compatibility with a plugin is not considered a recommendation of that plugin.

## Testing

**Tools:** browser

1. Look for admin banners or notices recommending or requiring plugins after activating the theme.
2. If prompted to install "recommended" or "required" plugins, install and activate those plugins.
3. Conduct all accessibility-ready tests with the "recommended" or "required" plugins active.
4. If accessibility problems are identified related to the plugins, this is considered a failure.


**Note:** When evaluating accessibility, responsibility for the issue is not relevant to the review outcome. Testers are not required to determine whether an accessibility problem originates in the theme or in a plugin recommended by the theme.

If an accessibility barrier is present, it should be reported. It is then up to the theme developer to determine whether the issue can be addressed within the theme, needs to be reported upstream, or requires removing the plugin recommendation altogether.
