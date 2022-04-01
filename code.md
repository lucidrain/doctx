# To the top

- [linux](#linux)
- [vs_code](#vs_code)
- [browser](#browser)
- [git](#git)
- [mysql](#mysql)
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

    - /etc/hosts
    - /etc/nginx/
    - /var/log/
    - var/www/html/
    - /usr/local/bin/disable-touchpad.sh
    - /usr/share/application : menu application list
    - .bashrc

6. applications

    - wine: running exe file
    - flameshot: screenshot
    - keepass2: store username & password
    - mysql workbench

## vs_code

[to the top](#to-the-top)

1. extensions:

    ```json
    {
        "theme": {
            "Material Theme",
            "Material Theme Icons",
            "Dracula Official",
            "One Dark Pro",
            "vscode-icons"
        },
        "color_code": {
            "Bracket Pair Colorizer",
            "indent-rainbow"
        },
        "format_code": {
            "Prettier - Code formatter",
            "phpfmt"
        },
        "css_support": {
            "CSS Peek",
            "HTML CSS support",
            "Live Server",
            "Live Sass Complier"
        },
        "code_support": {
            "bookmarks",
            "Import Cost",
            "Code Spell Checker",
            "Emmet",
            "Visual Studio IntelliCode",
            "TabNine",
            "Kite AutoComplete AI",
            "setting syns"
            "Path Intellisense",
            "Auto Close Tag",
            "Auto Rename Tag",
            "Auto Import",
            "Close HTML/XML tag"
        },
        "other_program": {
            "Vim",
            "Docker",
            "GitLens",
            "Git History": "temp delete commit: ctrl+shift+p 'zen'",
            "Composer",
            "REST Client",
            "thunder_client",
            "npm Intellisense",
            "PHP Constructor",
            "PHP Getters & Setters",
            "PHP namespace resolve",
            "PHP IntelliSense",
            "PHP Intelephense",
            "Laravel Artisan",
            "DotENV": "Shift+ Ctrl + n, run js file (angular)",
            "Vetur",
            "Javascript and TypeScript Nightly",
            "go": "View -> Command Pallete or type Ctrl+Shift+P and type goinstall update/tools",
            "Flutter",
            "Getx Snippets",
            "Dart",
            "Code Runner"
        }
    }
    ```

2. setting_json

    ```json
    {
        "editor.fontFamily": "Fira Code",
        "editor.fontLigatures": true,
        "editor.formatOnSave": true,
        "workbench.startupEditor": "welcomePage",
        "workbench.colorTheme": "One Dark Pro",
        "workbench.colorCustomizations": {
            "editor.foreground": "#a9aab1"
        },
        "materialTheme.accent": "Remove accents",
        "files.autoSave": "afterDelay",
        "workbench.iconTheme": "vscode-icons",
        "workbench.editor.enablePreview": false,
    }
    ```

3. keybindings.json: (locate at:~/.config/Code/User/keybindings.json)

    ```json
    {
        "key": "ctrl+d",
        "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+alt+down",
        "command": "-editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly" 
    }
    ```

4. configure user snippets

    - File-->Preferences-->User snippets
    - Select New Global Snippets file
    - Save it as global.code-snippets (or name it anything with the extention code-snippets)
    - Remove everything then paste this in:

    ```json
    {
        "Var_Dump": {
        "prefix": "vd",
        "scope": "php",
        "body": [ "var_dump($1);","$2" ],
        "description": "var_dump"}
    }
    ```

5. extends: nvim

    - [.config/nvim] setting init.vim

    ```diff
    sudo apt install vim
    sudo apt install nvim
    curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs
    nvim
    :q
    ```

## browser

[to the top](#to-the-top)

### chrome

1. short_key:

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

2. chrome_ext:

    - trello card counter
    - Loom – Free Screen and Cam Recorder
    - Screencastify - Screen Video Recorder
    - colorzilla
    - vue.js devtools
    - google docs offline
    - google translate
    - chrome extension source viewer
    - new tab
    - Responsive Viewer

### fire_fox

[to the top](#to-the-top)

1. ff_ext

    - multi-accounts container

## git

[to the top](#to-the-top)

- [] generate personal access token:
- [x] go toSettings/ Developer Settings/ Personal Access Token
- [x] generate New Token (Give your password) => Fillup the form => click Generate token
- [x] copy the generated Token, it will be something like ghp_sFhFsSHhTzMDreGRLjmks4Tzuzgthdvfsrta, token = password

1. commands

    ```diff
        git init
        git remote add origin url_remote_git
        git checkout -b name_branch
        git checkout name_branch
        git add file_path
        git commit -m "your_message"
        git push origin branch_name
        git push --force branch_name
        git push --set-upstream origin branch_name
        git pull origin name_branch
        git merge name_branch
        git fetch
        git branch
        git status
        git push origin --delete remote_branch
        git branch -D local_branch
        git remote set-url remote_url
        git cherry-pick name_commit
        git log
        git reset --hard origin/branch_name
        git config --global user.name "your_github_username"
        git config --global user.email "your_github_email"
        git config -l
        gitk
    ```

2. git merge ui

    | command | description      | command | description      |
    |:-------:|:---------------- |:-------:|:---------------- |
    |c-a      |beginning-of-line |nul      |set-mark-command  |
    |c-e      |end-of-line       |tab      |set-insert-command|
    |c-b      |backward-char     |c-h      |help              |
    |c-r      |move word backward|c-m      |enter             |
    |c-f      |forward-char      |c-i      |tab               |
    |c-x      |go to each 2 rows |c-s      |i-search          |
    |c-d      |delete-char       |c-v      |go to bot mode    |
    |c-k      |delete 1 row      |c-z      |stop merge        |
    |c-w      |delete all        |c-x + c-c|save file         |
    |c-o      |create new row below| | |
    |c-j      |create new row above| | |
    |c-g      |keyboard-quit       | | |

3. ssh

    ```diff
    ssh -v
    ssh-keygen -t rsa -b 2048 -c user@gmail.com
    > github/ settings/ ssh and gpg keys -> new ssh key -> copy ssh store in .ssh/github_personal.pub
    ```

## mysql

[to the top](#to-the-top)

1. install

    ```diff
    sudo apt install phpmyadmin php-mbstring php-zip php-gd php-json php-curl
    ```

2. commands

    ```diff
    > action with database
    show databse;
    select database_name;
    SELECT user,authentication_string,plugin,host FROM mysql.user;
    create user 'name'@'localhost' identified by 'password';
    drop user 'name'@'localhost';
    > change privileges
    grant all privileges on *.* to 'name@localhost';
    grant select, update, insert on databse.* to name@localhost;
    revoke all privileges on *.* to 'name@localhost';
    revoke insert on database.* from name@localhost;
    show privileges;
    show grants for 'name'@'localhost';
    ```

## laravel

[to the top](#to-the-top)

1. laradock

    - config .env: php_version, composer_version, node_version, mysql_port
    - config nginx/sites/laravel_example.conf

    ```diff
    kurazushi.conf
    server kurazushi.local
    path: var/www/canly-kurazushi/public
    ```

    - config /etc/hosts:
    `127.0.0.1  kurazushi.local`

    - copy file.sql to ==mysql/docker-entrypoint-initdb.d== then import database
    - commands

    ```diff
    docker-compose exec mysql bash
    docker-compose exec --user=laradock workspace bash
    docker-compose exec --user=laradock mysql bash
    docker-compose build nginx mysql php-fpm workspace redis
    docker-compose up -d nginx mysql php-fpm workspace redis
    docker-compose start/stop
    ```

    - localhost:8081/phpmyadmin/ mysql/root/root

2. commands

    ```diff
    composer create-project laravel/laravel name_project
    php artisan make:controller Api\Controller name_controller (--api)
    php artisan make:model name_model
    php artisan make:migration create_book_table
    php artisan make:factory name_factory
    php artisan make:seed name_seed
    php artisan db:seed --class=name_seed
    php artisan migrate
    php artisan migrate:fresh
    php artisan migrate:rollback
    ```
