Project Setup
-------------

1) Run "composer install" from command line to get vendor folder.

2) Change .env.example to .env

3) Run "php artisan key:generate" to set application key.

4) Create a database & provide credentials in ".env" file.

5) Run "php artisan migrate" from command line.
    This will create users & password_resets table along with migrations.


Project Architecture/Design
---------------------------

Laravel provides user login & register authentication by running the following command:

	php artisan make:auth

Added / modified the following files as per the requirement of this application:

	1) resources/views/layouts/app.blade.php 	-> Layout of this application. Javascript files added in this page.
	2) public/sha256/sha256.min.js 				-> Minified file to be used for client side password hashing.
	3) public/sha256/sha256.js 					-> Uncompressed file for readability.
	4) public/user.js 							-> jQuery codes for this application are added in this file.
