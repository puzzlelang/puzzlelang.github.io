# Guide

The following chapters will show you how to build software using abstract language and tools for various platforms.


# Webbrowser

PUZZLE runs in any Webbrowser. It can be included as a script tag and be used in various ways:

***Including PUZZLE***

```html
<html>
	<head>
		<script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
	</head>
	<body>
		<script type="text/x-puzzle">
			print "hi, i am a puzzle script"
		</script>

		<script type="text/javascript">
			puzzle.parse('print "hi"');
		</script>
	</body>
</html>
```

***Building web content***

After including PUZZLE with the easy steps shown above, you have PUZZLE running in your browser. Now, to build web content, you can use any module that makes sense, like the official ***web*** module.

```puzzle
// use the web module
use web;

rootNode body;

create button with text "click me" and method ( alert('i was clicked') );
```

# Desktop

To build programs for desktops, you can use web-based frameworks, like

* electron
* NW.js


# Mobile

Mobile apps with PUZZLE can either be hybrid apps, build with tools like

* Nativescript
* React Native


# PWA

A PWA is a web app, that allows you to use a couple of "native-feel" capabilities on mobile devices.
To build a PWA, you need to:

* Use a service worker
* Add custom html tags
* Use a web manifest

This example shos the basic structure:

Main HTML file (index.html)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My PUZZLE PWA</title>
    <link rel="manifest" href="manifest.json" />
    <script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
  </head>
  <body>
    <script type="text/x-puzzle">
		print "hi, i am a puzzle script"
	</script>

	<script type="text/javascript">
		if ("serviceWorker" in navigator) {
		  window.addEventListener("load", function() {
		    navigator.serviceWorker
		      .register("/worker.js")
		      .then(res => console.log("service worker registered"))
		      .catch(err => console.log("service worker not registered", err))
		  })
		}
	</script>
  </body>
</html>
```

Service Worker (worker.js)

```javascript
self.addEventListener("install", installEvent => {
  console.log('Installed!')
})
```

Manifest (manifest.json)

```json
{
  "name": "PUZZLE PWA",
  "short_name": "PWA",
  "start_url": "index.html",
  "display": "standalone"
}
```

# CLI

For using the PUZZLE CLI, you need npm and Node installed on your computer.

Step 1: Install PUZZLE with npm

```shell
npm i puzzlelang -g
```

Step 2: Use the CLI

```shell
$ puzzle
> print hello
```

Additional: Run files or scripts directly

```shell
puzzle run puzzlefile.pz
# or
puzzle run "print hi"
```

# Server

tbd

# Cloud Functions

tbd