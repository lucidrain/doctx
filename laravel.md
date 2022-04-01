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