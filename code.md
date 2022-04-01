# To the top

- [linux](#linux)
- [vs_code](#vs_code)
- [browser](#browser)
- [git](#git)
- [laravel](#laravel)

---

## linux

[to the top](#to-the-top)

1. file_command

| file = fi                       | description      | folder = fd           | description                        |
| :------------------------------ | :--------------- | :-------------------- | :--------------------------------- |
| `cp`                            | copy             | `xdg-open` fd_name    | open                               |
| `rm -r -f` file_path            | remove           | `cd` fd_path          | move to workspace                  |
| `mv` fi_old fi_new path_file    | move/change name |                       |                                    |
| `touch` \|\| `>` fi_name        | create new       | `mkdir -p` fd_name    | create new (-p = with relate path) |
| `ll`                            | show detail      | `ls`                  | list fi in fd                      |
| `pwd`                           | show relate path |                       |                                    |
| `sudo chmod a+rwx` path/fi_name | change privilege | `sudo chmod -r 777 .` | give all privilege                 |

2. linux_command

| linux                              | description         | memory                             | description            |
| :--------------------------------- | :------------------ | :--------------------------------- | :--------------------- |
| `cat /etc/os-release`              | check os            | `free -m`                          | check total            |
| `ifconfig`                         | check ip            | `df -h`                            | check detail file      |
| `sudo shutdown now`                | shutdown            | `sudo apt-get clean`               | clean                  |
| `sudo reboot`                      | restart             | `sudo apt-get autoremove`          | autoremove             |
| `gio list trash://`                | list file in trash  | `journalctl --disk-usage`          | check log ubuntu       |
| `gio trash [file or dir]`          | move file to trash  | `sudo journalctl --vacuum-time=3d` | clean log 3 days ago   |
| `gio trash --empty`                | clean trash         | `du -h` */var/lib/snapd/snaps*     | check snap space       |
| `sudo ./` \|\|`sh`\|\|`bash` fi.sh | run sh file         | `du -sh` *~/.cache/thumbnails*     | clear thumbnails cache |
| `chmod +x` fi.sh                   | give excute sh file |                                    |                        |
| `chown group_user:user project`    | update user folder  |                                    |                        |
| `ll`                               | show privilege files|                                    |                        |

3. short_key

| linux                              | description         | short_key                          | description            |
| :--------------------------------- | :------------------ | :--------------------------------- | :--------------------- |
| `super + arrow_left | arrow_right` | separate window     | `super + space`                    | change language        |
| `super + arrow_down | arrow_up`    | zoom in/out window  | `ctrl + alt + arrow_right`         | switch workspace       |
| `super + a`                        | open applets        | `super + n`                        | open notification      |

4. install

```diff
> install gnome terminal
sudo apt install gnome-terminal
> install previous php version
sudo add-apt-repository ppa:ondrej/php
sudo apt-get install php7.0
```

5. config

```diff
> choose default terminal
sudo update-alternatives --config x-terminal-emulator
> list all wine file installed
apt list --installed | sed -E 's|(._)/._|\1|' | grep -i wine
```

6. applications

- wine: running exe file
- flameshot: screenshot
- keepass2: store username & password
- mysql workbench

## vs_code

## browser

1. chrome

- short_key:

| chrome **c=ctrl** | description         | short_key           | description                         |
| :-----------------| :------------------ | :-------------------| :-----------------------------------|
| `c+a`             | select all words    | `c+shift+b`         | open bookmark bar                   |
| `c+d`             | bookmark            | `c+shift+c`         | open element tab                    |
| `c+g`             | find in page        | `c+shift+d`         | bookmark all tab                    |
| `c+h`             | chrome://history/   | `c+shift+i`         | inspect                             |
| `c+j`             | chrome://downloads/ | `c+shift+j`         | open console tab                    |
| `c+k`             | search google       | `c+shift+n`         | new open dark tab                   |
| `c+l`             | move to url         | `c+shift+m`         | open sync google account            |
| `c+n`             | new open tab        | `c+shift+o`         | chrome://bookmarks/                 |
| `c+r`             | reload page         | `c+shift+t`         | undo delete tab (even close chrome) |
| `c+s`             | save page           | `c+shift+w`         | close chrome                        |
| `c+t`             | new tab             |
| `c+o`             | open file           |
| `c+p`             | print page          |
| `c+w`             | remove tab          |

- extension:
    / trello card counter
    / Loom – Free Screen and Cam Recorder
    / Screencastify - Screen Video Recorder

## git

## laravel
