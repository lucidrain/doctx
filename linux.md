## file/folder_command
|file = fi                      |description     |folder = fd          |description                       |
|:----:                         |:----           |:----:               |:----                             |
|`cp`                           |copy            |`xdg-open` fd_name   |open                              |
|`rm -r -f` file_path           |remove          |`cd` fd_path         |move to workspace                 |
|`mv` fi_old fi_new path_file   |move/change name|                     |                                  |
|`touch`||`>` fi_name           |create new      |`mkdir -p` fd_name   |create new (-p = with relate path)|
|`ll`                           |show detail     |`ls`                 |list fi in fd                     |
|`pwd`                          |show relate path|                     |                                  |
|`sudo chmod a+rwx` path/fi_name|change privilege|`sudo chmod -r 777 .`|give all privilege                |

## linux_command
`sudo shutdown now`                                         shutdown computer
`sudo reboot`                                               restart computer
`gio list trash://`                                         open list file in trash
`gio trash [file or dir]`                                   move file to trash
`gio trash --empty`                                         remove file in trash
`free -m` || `df -h`                                        check memory status
`sudo apt-get clean || autoremove`                          clean || remove package
`journalctl --disk-usage`                                   check log ubuntu
`sudo journalctl --vacuum-time=3d`                          clean log ubuntu between 3 days
`du -h` */var/lib/snapd/snaps*                              check snap space
`du -sh` *~/.cache/thumbnails*                              clear thumbnails cache 
`chmod +x` *snap_remove.sh*                                 give permission to bash scrip
`sudo ./` || `sh` || `bash` *snap_remove.sh*                run bash script
`cat /etc/os-release`                                       check os
`sudo update-alternatives --config x-terminal-emulator`     choose default terminal
`sudo apt install gnome-terminal`                           install gnome-terminal
`super + -> || <-`                                          separate to 2 screen 
`super + arrow_up`                                          maximize screen
`super + arrow_down`                                        minimize screen
`super + space`                                             change unikey language 
`super + a`                                                 open applets  
`super + n`                                                 open notification
`ctrl + alt + ->`                                           switch between workspace 
# config_file
*var/www/html/*                                             apache run project 
*/usr/local/bin/disable-touchpad.sh*                        custome shortcut key 
*/usr/share/application*                                    menu application list
*.bashrc*               config terminal (run bash script with alias, set go_path, config color termal)
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
- c+d         bookmark
- c+g         find in page
- c+h         chrome://history/
- c+j         chrome://downloads/
- c+k         search google
- c+l         move to url
- c+n         new open tab
- c+r         reload page
- c+s         save page
- c+t         new tab
- c+o         open file
- c+p         print page
- c+w         remove tab
- c+shift+b   open bookmark bar
- c+shift+c   open element tab
- c+shift+d   bookmark all tab
- c+shift+i/j inspect (open console tab)
- c+shift+n   new open dark tab
- c+shift+m   open sync google account
- c+shift+o   chrome://bookmarks/
- c+shift+t   undo delete tab (even close chrome)
- c+shift+w   close chrome

/** postman **/
choose bearer token -> paste bearer token
body -> raw -> paste params -> code php - curl
header -> content-type -> application/json	

wifi: 25081986
nextpay@2019

github: sakurasou6489