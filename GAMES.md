# GAMES

Games can be built with PUZZLE's UI module for any browser-based platform, like:

* Browser
* Cloud
* Desktop
* Mobile (PWA)

## Example


```puzzle
use ui;

ui root "#app";

set mariogif "https://media.tenor.com/GuYKt4Z_s9EAAAAi/mario-run.gif";

ui render image with id player and src mariogif;

ui on key up (
    ui get player and move up 15;
);

ui on key down (
    ui get player and move down 15;
);

ui on key right (
    ui get player and move right 15;
);

ui on key left (
    ui get player and move left 15;
);
```