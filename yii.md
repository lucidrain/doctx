# COMMAND
> create basic project
> `composer create-project --prefer-dist yiisoft/yii2-app-basic` **project_name**
> create advanced project
> `composer create-project --prefer-dist yiisoft/yii2-app-advanced` **project_name**

> create controller
> `./yii gii/controller --controllerClass='`**app\controllers\ControllerName**`'`
> create model
> `./yii gii/model --tableName=books --modelClass=`**ModelName**
> create module
> `./yii gii/module --moduleID=`*example_commands* `--moduleClass='`**app\modules\example_commands\Module**`'`
> create migration
> `./yii migrate/create` **create_book_table**
> run migrate
> `./yii migrate`
> run migrate refresh
> `./yii migrate/fresh` 
> run yii frontend
> `./yii serve`
> run yii basic project
> `php yii serve`
> run yii advanced project
> `php ./init` -> *choose development*
> `php yii serve --docroot="backend/web/" --port=8888`
> `php yii serve --docroot="frontend/web/" --port=8888`

Save as preset || to save custom config
editing file ~/.vuerc || to remove preset
assets/AppAsset.php (extends AssetBundle) || manager css, js file

/** PUB **/
composer require --prefer-dist yiisoft/yii2-httpclient || HTTP client API
Yii2-gentelella || Free yii template
kartik-v/yii2-builder || Form

/** KEYWORD **/
Yii::$app->urlManager->createAbsoluteUrl(['certified/index']);
Url::to('/certified/site/contact.html', true),
'certified/<name:\w+>' => 'certified/site/index',
if ($model->load(Yii::$app->request->post()) && $model->validate()){}
echo Header::widget();

/** CODE **/
** write text on image with transparent color
//Set the Content Type
header('Content-type: image/jpeg');
// Create Image From Existing File
$jpg_image = imagecreatefrompng("nextpay-assets/img/certificate.png");
// Allocate A Color For The Text
$blue = imagecolorallocate($jpg_image, 24, 99, 173);
// Set Path to Font File
$font_path = 'global-fonts/Google_Sans/OpenSans-Regular.ttf';
// Set Text to Be Printed On Image
$text = strtoupper($appUtils->removeSignString($data['name']));
$width = imagesx($jpg_image);
$heigth =  imagesy($jpg_image);
$true_image = imagecreatetruecolor($width, $heigth);
$background = imagecolorallocate($true_image , 0, 0, 0);
$centerX = $width / 2;
list($left, , $right, , , ) = imageftbbox(24, 0, $font_path, $text);
$left_offset = ($right - $left) / 2;
$x = $centerX - $left_offset;
// Print Text On Image
imagettftext($jpg_image, 24, 0, $x, 231, $blue, $font_path, $text);
imagecolortransparent($jpg_image, $background);
// Send Image to Browser
ob_start();
imagepng($jpg_image);
$imagedata = ob_get_clean();
// Clear Memory
imagedestroy($jpg_image);
echo '<img src="data:image/png;base64,'.base64_encode($certificateImage).'"/>';

** import JS
public $jsOptions = [
'position' => View::POS_HEAD,
];
'timezone' => 'Asia/Ho_Chi_Minh', || Set timezone in common/config/main.php
'basePath' => dirname(__DIR__ . '/../../frontend/config'), || console/config/main.php 
ini_set('memory_limit', '2048M'); || Set memory_limit, Allowed memory size of 134217728 bytes exhausted (tried to allocate 37748736 bytes)

** get value checkbox list
HTML -> <div class="checkbox">
<label>
    <input type="hidden" name="CardNo" value="0" />
    <input type="checkbox" name="CardNo" value="1" checked=""> CardNo
</label>
</div>
JS -> if(!empty($_POST)){
if($_POST['CardNo'] == 1) {
    $radio_list['CardNo'] = 'required';
} else {
    $radio_list['CardNo'] = "";
}
}
if(radio_list.includes("CardNo")) {
document.getElementById("CardNo").checked = true;
} else {
document.getElementById("CardNo").checked = false;
}

** pass variable url to widget
echo Header::widget(['hotline' => $hotline, 'email' => $email])

