# To the top
- [linux](#linux)
- [vs_code](#vs_code)
- [browser](#browser)
- [git](#git)
- [laravel](#laravel)

---

## linux [to the top](#to-the-top)
*file_command*
| file = fi                       | description      | folder = fd           | description                        |
| :------------------------------ | :--------------- | :-------------------- | :--------------------------------- |
| `cp`                            | copy             | `xdg-open` fd_name    | open                               |
| `rm -r -f` file_path            | remove           | `cd` fd_path          | move to workspace                  |
| `mv` fi_old fi_new path_file    | move/change name |                       |                                    |
| `touch` \|\| `>` fi_name        | create new       | `mkdir -p` fd_name    | create new (-p = with relate path) |
| `ll`                            | show detail      | `ls`                  | list fi in fd                      |
| `pwd`                           | show relate path |                       |                                    |
| `sudo chmod a+rwx` path/fi_name | change privilege | `sudo chmod -r 777 .` | give all privilege                 |
*linux_command*
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
*short_key*
| linux                              | description         | memory                             | description            |
| :--------------------------------- | :------------------ | :--------------------------------- | :--------------------- |
| `super + arrow_left | arrow_right` | separate window     | `super + space`                    | change language        |
| `super + arrow_down | arrow_up`    | zoom in/out window  | `ctrl + alt + arrow_right`         | switch workspace       |
| `super + a`                        | open applets        | `super + n`                        | open notification      |
- choose default terminal

```diff
> sudo update-alternatives --config x-terminal-emulator
> sudo apt install gnome-terminal
- apt list --installed | sed -E 's|(._)/._|\1|' | grep -i wine[^1]
```
*applications*
- wine[^1]: running exe file
- flameshot: screenshot
- keepass2: store username & password
- mysql workbench

## vs_code
## browser
## git
## laravel