/** COMMAND **/

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

config .env: php_version, composer_version, node_version
config nginx/sites/laravel_example.conf:
kurazushi.conf: server kurazushi.local	path: var/www/canly-kurazushi/public
config /etc/hosts: 127.0.0.1	kurazushi.local
docker-compose exec mysql bash
docker-compose exec --user=laradock workspace bash
docker-compose build nginx mysql php-fpm workspace redis
docker-compose up -d nginx mysql php-fpm workspace redis
docker-compose start/stop

/** CODE **/
set_time_zone: 'timezone' => 'Asia/Ho_Chi_Minh',   config/app.php
** api store
function storeRegister(UserRequest $request)
{   $user = new User();
    $user->name = $request->name;
    $user->email = $request->email;
    $user->password = Hash::make($request->password1);
    $user->save();
    $data = [
        'status' => 'success',
        'message' => 'Register for a successful account'
    ];
    return response()->json($data);
}