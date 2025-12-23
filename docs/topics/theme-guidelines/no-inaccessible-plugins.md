---
title: Must not recommend or require inaccessible plugins
layout: default
parent: Theme accessibility guidelines
nav_order: 17
description: Accessibility-ready themes must not recommend or require inaccessible plugins.
---

# Must not recommend or require inaccessible plugins

## Basic principle

Accessibility Ready themes must not recommend, promote, bundle, or require plugins that introduce known accessibility barriers as part of the theme’s setup process or ongoing use within the WordPress admin.

Themes play a significant role in shaping how site owners build and extend their websites. When a theme directs users toward inaccessible plugins — whether through onboarding screens, admin notices, documentation, or demo imports — it undermines the goal of providing an accessible foundation and can result in inaccessible websites even when the theme itself meets accessibility requirements.

Accessibility Ready themes should guide users toward accessible choices by default, not place accessibility barriers directly in their recommended setup paths.

Themes should either:
1. Not recommend plugins at all or, 
2. If recommending plugins, only recommend plugins that similarly pass accessibility-ready requirements.

## Testing

**Tools:** browser

1. Look for admin banners or notices recommending or requiring plugins after activating the theme. 
2. If prompted to install "recommended" or "required" plugins, install and activate those plugins.
3. Conduct all accessibility-ready tests with the "recommended" or "required" plugins active.
4. If accessibility problems are identified related to the plugins, this is considered a failure.

{: .callout .alert }
**Note:** When evaluating accessibility, responsibility for the issue is not relevant to the review outcome. Testers are not required to determine whether an accessibility problem originates in the theme or in a third-party plugin. If an accessibility barrier is present, it should be reported. It is then up to the theme developer to determine whether the issue can be addressed within the theme, needs to be reported upstream, or requires removing the plugin recommendation altogether.
