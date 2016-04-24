#Project Setup

1) Run "composer install" from command line to get vendor folder.

2) Change .env.example to .env

2) Run "php artisan key:generate" to set application key.

3) Create a database & provide credentials in ".env" file.

4) Run "php artisan migrate" from command line.
    This will create users & password_resets table along with migrations.
