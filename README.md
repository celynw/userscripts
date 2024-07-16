# Userscripts

These are helpful utilities which can be used with user script managers.

I personally recommend [FireMonkey](https://addons.mozilla.org/en-CA/firefox/addon/firemonkey/) for Firefox.

## Installation

Click on a script title below to open the raw script.
At this point, your userscript manager should prompt you to install it.
Otherwise, simply copy the content and add it manually.

## Scripts

### [Chocolatey command formatter](https://github.com/celynw/userscripts/raw/master/chocolatey_command_formatter.user.js)

When copying the install command from [Chocolatey](https://community.chocolatey.org/), this script automatically displays and changes the copyable command to be runnable from a WSL session.

For example:

```diff
- choco install firefox
+ choco.exe install -yr firefox
```

### [GitHub PR tab redirect](https://github.com/celynw/userscripts/raw/master/github_pr_tab_redirect.user.js)

When clicking the 'Pull requests' tab in GitHub, it automatically filters to only open PRs. If you want to see all PRs, you have to edit the text of the search prompt.
This script changes the default search to show all PRs, since there are dedicated buttons to show open or closed PRs from there.

The link will be changed like this:

```diff
- https://github.com/user/repo/pulls
+ https://github.com/user/repo/pulls?q=is%3Apr
```
