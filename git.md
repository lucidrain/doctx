# GIT
## Examples
> create local repository
>
> `git init`

> link your local repository and remote repository
>
> `git remote add origin url_remote_git`

> pull code from remote
>
> `git pull origin name_branch`

> create new branch
>
> `git checkout -b name_branch`

> checkout to existed branch
>
> `git checkout name_branch`

> add file to local repository
>
> `git add file_path`

> add commit
>
> `git commit -m "your_message"`

> merge branch
>
> `git merge name_branch`

> get all branch
>
> `git fetch`

> see all branch
>
> `git branch`

> check status
>
> `git status`

> delete remote branch
>
> `git push origin --delete remote_branch`

> delete local branch
>
> `git branch -d local_branch`
> `git branch -D local_branch` - force delete

> open gitk
>
> `gitk`

> push code
>
> `git push --set-upstream origin branch_name` - gitLab
> `git push origin branch_name`

> set remote url git
>
> `git remote set-url`

> reset to head
>
> `git reset --hard`

> remove .git hindden file
>
> `rm -rf .git`

# git merge / commit ui
**c=ctrl**
- nul             set-mark-command
- c-a             beginning-of-line
- c-b             backward-char
- c-d             delete-char
- c-e             end-of-line
- c-f             forward-char
- c-g             keyboard-quit
- c-h             help
- tab             self-insert-command
- c-o             create new row below
- c-j             create new row on top
- c-r             move word backward
- c-w             delete all
- c-m             enter
- c-i             tab
- c-d             delete word
- c-k             delete 1 row
- c-x             go to each 2 rows
- c-s             i-search
- c-v             go to bot mode
- c-z             stop merge
- c-x - c-c       save file

# add PAT (Personal Access Token)
Create Personal Access Token on GitHub
From your GitHub account, go to Settings => Developer Settings => Personal Access Token => Generate New Token (Give your password) => Fillup the form => click Generate token => Copy the generated Token, it will be something like ghp_sFhFsSHhTzMDreGRLjmks4Tzuzgthdvfsrta

For a Linux-based OS ⤴
For Linux, you need to configure the local GIT client with a username and email address,

$ git config --global user.name "your_github_username"
$ git config --global user.email "your_github_email"
$ git config -l
Once GIT is configured, we can begin using it to access GitHub. Example:

$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `Spoon-Knife`...
$ Username for 'https://github.com' : username
$ Password for 'https://github.com' : give your personal access token here
Now cache the given record in your computer to remembers the token:

$ git config --global credential.helper cache
If needed, anytime you can delete the cache record by:

$ git config --global --unset credential.helper
$ git config --system --unset credential.helper
Now try to pull with -v to verify

$ git pull -v
Linux/Debian (Clone as follows):

git clone https://<tokenhere>@github.com/<user>/<repo>.git

# setup ssh on gitlab
`ssh -v`                                                    check ssh version 
`ssh-keygen -t ed25519 -c` **"<" comment ">"**              generate key ssh
`ssh-keygen -t rsa -b 2048 -c` **"email@example.com"**      generate key rsa
`ssh-keygen -p -f` **/path/to/ssh_key**                     generate ssh key pair
`xclip -sel clip <` **~/.ssh/id_ed25519.pub**               add ssh key to gitlab account
*icon top right/settings/ssh keys*                          ssh setting 
error fatal: unable to update url base from redirection {
      solve: login with private company network
in */home/cuong/.ssh/id_ed25519.pub*   add an ssh key
}