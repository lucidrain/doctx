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