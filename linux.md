## file/folder_command

| file = fi                       | description      | folder = fd           | description                        |
| :------------------------------ | :--------------- | :-------------------- | :--------------------------------- |
| `cp`                            | copy             | `xdg-open` fd_name    | open                               |
| `rm -r -f` file_path            | remove           | `cd` fd_path          | move to workspace                  |
| `mv` fi_old fi_new path_file    | move/change name |                       |                                    |
| `touch` \|\| `>` fi_name        | create new       | `mkdir -p` fd_name    | create new (-p = with relate path) |
| `ll`                            | show detail      | `ls`                  | list fi in fd                      |
| `pwd`                           | show relate path |                       |                                    |
| `sudo chmod a+rwx` path/fi_name | change privilege | `sudo chmod -r 777 .` | give all privilege                 |

## linux_command

| linux                              | description         | memory                             | description            |
| :--------------------------------- | :------------------ | :--------------------------------- | :--------------------- |
| `cat /etc/os-release`              | check os            | `free -m`                          | check total            |
| `ifconfig`                         | check ip            | `df -h`                            | check detail file      |
| `sudo shutdown now`                | shutdown            | `sudo apt-get clean`               | clean                  |
| `sudo reboot`                      | restart             | `sudo apt-get autoremove`          | autoremove             |
| `gio list trash://`                | list file in trash  | `journalctl --disk-usage`          | check log ubuntu       |
| `gio trash [file or dir]`          | move file to trash  | `sudo journalctl --vacuum-time=3d` | clean log 3 days ago   |
| `gio trash --empty`                | clean trash         | `du -h` _/var/lib/snapd/snaps_     | check snap space       |
| `sudo ./` \|\|`sh`\|\|`bash` fi.sh | run sh file         | `du -sh` _~/.cache/thumbnails_     | clear thumbnails cache |
| `chmod +x` fi.sh                   | give excute sh file |                                    |                        |

- choose default terminal

```
sudo update-alternatives --config x-terminal-emulator
```

- install gnome-terminal

```
sudo apt install gnome-terminal
```

- linux short_key:

> minimize left || right
>
> super + ->|| <-

> maximize screen
>
> super + arrow_up

> minimize screen
>
> super + arrow_down

> open applets
>
> super + a

> open notification
>
> super + n

> change unikey language
>
> super + space

> switch between workspace
>
> ctrl + alt + ->

# config_file

_var/www/html/_ apache run project
_/usr/local/bin/disable-touchpad.sh_ custome shortcut key
_/usr/share/application_ menu application list
_.bashrc_ config terminal (run bash script with alias, set go_path, config color termal)

# other_program

- flameshot
- keepass2
- wine (install & use file .exe)

# chrome_ext

- colorzilla
- vue.js devtools
- google docs offline
- google translate
- chrome extension source viewer
- new tab

# chrome_command

**c=ctrl**

- c+a
- c+d bookmark
- c+g find in page
- c+h chrome://history/
- c+j chrome://downloads/
- c+k search google
- c+l move to url
- c+n new open tab
- c+r reload page
- c+s save page
- c+t new tab
- c+o open file
- c+p print page
- c+w remove tab
- c+shift+b open bookmark bar
- c+shift+c open element tab
- c+shift+d bookmark all tab
- c+shift+i/j inspect (open console tab)
- c+shift+n new open dark tab
- c+shift+m open sync google account
- c+shift+o chrome://bookmarks/
- c+shift+t undo delete tab (even close chrome)
- c+shift+w close chrome

/** postman **/
choose bearer token -> paste bearer token
body -> raw -> paste params -> code php - curl
header -> content-type -> application/json

wifi: 25081986
nextpay@2019

github: sakurasou6489
