## file/folder_command
`xdg-open` **folder_name** || *.*                           open file
`cd` *file_path*                                            move to file 
`rm -r -f || -rf` *file_path*                               remove file
`cp`                                                        copy file
`mv` **old_name** **new_name** *path_file*                  move/change file name 
`mkdir -p` **folder_name**                                  create folder (-p mean create relate path) 
`touch || >` **file_name**                                  create file 
`ls`                                                        list file in folder 
`pwd`                                                       show relate path file 
`ll`                                                        show detail of file 
`sudo chmod a+rwx` **path/name_file**                       give permission to folder (r-w-x mean 'read-write-excute') 
ex: `sudo chmod -r 777 .`                                   give all permission to file
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