---
title: Change Grub boot loader
description: 3 ways to change the Grub boot loader
date: 2018-12-11T11:33:42.428Z
---
# Change Grub boot loader

## grub customizer tool in Ubuntu

- sudo add-apt-repository ppa:danielrichter2007/grub-customizer 
- sudo apt-get update 
- sudo apt-get install grub-customizer

## How To Set Default Boot With Linux Terminal

- sudo vim /etc/default/grub
- Change GRUB_DEFAULT=0 to GRUB_DEFAULT=saved
- sudo grub-set-default 3

sudo update-grub
