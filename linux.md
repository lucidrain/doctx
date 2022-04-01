# Linux

## file/folder_command



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
| `chown group_user:user project`    | update user folder  |                                    |                        |
| `ll`                               | show privilege files|                                    |                        |

- choose default terminal

```bash
sudo update-alternatives --config x-terminal-emulator
```

- install gnome-terminal

```bash
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
```
apt list --installed | sed -E 's|(._)/._|\1|' | grep -i wine
```

# chrome_ext

- colorzilla
- vue.js devtools
- google docs offline
- google translate
- chrome extension source viewer
- new tab

## chrome_short_key

**c=ctrl**
|short_key|description|
|:-----|:------|
|c + a|mark all word|
|c + g| find in page|

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

/**postman**/
choose bearer token -> paste bearer token
body -> raw -> paste params -> code php - curl
header -> content-type -> application/json

wifi: 25081986
nextpay@2019

github: sakurasou6489
