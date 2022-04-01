

## setup ssh on gitlab

> check ssh version
>
> `ssh -v`

> generate key ssh
>
> `ssh-keygen -t ed25519 -c` **"<" comment ">"**

> generate key rsa
>
> `ssh-keygen -t rsa -b 2048 -c` **"email@example.com"**

> generate ssh key pair
>
> `ssh-keygen -p -f` **/path/to/ssh_key**

> add ssh key to gitlab account
>
> `xclip -sel clip <` **~/.ssh/id_ed25519.pub**

- _profile/ settings/ ssh keys_
  ssh setting => error fatal: unable to update url base from redirection.
  solve: login with private company network.
  in _/home/cuong/.ssh/id_ed25519.pub_ => add an ssh key
