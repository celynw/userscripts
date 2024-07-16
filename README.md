# Userscripts

These are helpful utilities which can be used with addons/extensions such as [Violentmonkey](https://violentmonkey.github.io/).

## Usage

Copy the script into your userscript manager.

TODO: A more seamless and principled way to do this!

## Scripts

### Chocolatey command formatter

When copying the install command from [Chocolatey](https://community.chocolatey.org/), this script automatically displays and changes the copyable command to be runnable from a WSL session.

For example:

```diff
- choco install firefox
+ choco.exe install -yr firefox
```

### GitHub PR tab redirect

When clicking the 'Pull requests' tab in GitHub, it automatically filters to only open PRs. If you want to see all PRs, you have to edit the text of the search prompt.
This script changes the default search to show all PRs, since there are dedicated buttons to show open or closed PRs from there.
