# Snippets

Snippets are something we can use in vscode that allows us to essentially create / insert
snippets of code easily

To add a snippet:
1. Open vscode
2. Click the gear in the bottom left
3. Click `User Snippets`
4. In the search bar type `javascript` and select `javascript.json`

Once you're there you can begin adding snippets. I'll be adding to the list as we go
but here's some that may be helpful

## Snippet for pasting something with a console.log wrapped around it
How it works - This allows you to copy something, for example, a variable name, then
type `clp`. You'll see clp appear in a dropdown then you can hit enter. This will paste
whatever you copied with a console log wrapped around it to wherever your cursor is at.
```
"console.log wrapped": {
		"prefix": "clp",
		"body": ["console.log($CLIPBOARD);"],
		"description": "Console.log with clipboard content"
	}
```
