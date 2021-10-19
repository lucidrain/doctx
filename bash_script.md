## disable-touchpad.sh
#!/bin/bash
# Purpose: Toggle synaptic touchpad on/off
# Author: Fazle Arefin
# Reference:    
# Check input list || xinput list
# change this id
TOUCHPADID=$(xinput --list | sed -n '/Elan Touchpad/s/.*id=\([0-9]*\).*/\1/p')
SYNSTATE=$(xinput list-props "$TOUCHPADID" | grep "Device Enabled" | grep -Eo '.$')
if [ $SYNSTATE = 0 ]; then 
xinput set-prop "$TOUCHPADID" "Device Enabled" 1
else 
xinput set-prop "$TOUCHPADID" "Device Enabled" 0
fi

## add git branch to terminal
# Add git branch if its present to PS1
parse_git_branch() {
 git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
if [ "$color_prompt" = yes ]; then
PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[01;31m\]$(parse_git_branch)\[\033[00m\]\$ '
else
PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w$(parse_git_branch)\$ '
fi
unset color_prompt force_color_prompt
// set color 
PS1="\[\033[1;36m\]\u\[\033[1;31m\]@\[\033[1;32m\]\h:\[\033[1;35m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\] $ "
