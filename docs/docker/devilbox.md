# Devilbox

I will use [devilbox](http://devilbox.org/), a pre made LAMP stack to try and host my Laravel website.

Since I'm only using a 10GB virtual drive for my linux server, I can't start [all the containers](https://devilbox.readthedocs.io/en/latest/readings/available-container.html?highlight=container) it provides.
But for hosting a laravel website I'll only need httpd, php and mysql.

- `git clone https://github.com/cytopia/devilbox`
- `cd devilbox` `cp env-example .env`
- docker-compose up -d httpd php mysql
  - first time setup 4 min
  - once the images are loaded

# Installing my Laravel website

- Enter the php shell so we have access to composer etc `./shell.sh`
- Make a folder, enter the folder and git clone your project in there. Mine is called wedstrijd.
- Enter the laravel project and composer install. This took 18s65.
- To make a database we can surf to the ip of our server and just use phpmyadmin out of the box.
- The root folder is always /htdocs. So make a symbolic link from the public folder to htdos.
  `ln -s wedstrijd/public/ htdocs`
- To make the host we have to edit /etc/hosts on windows. The generated path is wedstrijd.loc. e.g. `192.168.0.110 wedstrijd.loc`
