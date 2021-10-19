# COMMAND
`flutter create`        name_project
`flutter run`           run without debugging
`flutter pub get`       update pub-spec.yaml
pubspec.yaml:
    1. pub
    2. resources
/** WIDGETS **/
Container
Card
Padding
Column
Row
ClipRRect: border 4 corners
Stack
Positioned: set width, height, position in stack
PreferenceSize: set size widget
Expanded: limit widget follow by width (by container or column)
IconButton
TextButton
TextField
TextFormField(validate): TextEditController
DialogAlert
FittedBox: fit widget size with each device screen
ListView: map, toList, generate
GridView
Divider: --------------------
FutureBuilder
ButtomNavigatorBar
DropDownButton(DropDownHideUnderline): danh sách chiếm diện tích trong màn hình, recommend popup hoặc dialog
MediaQuery.of(context).size.width/height: width, height of device
Navigator.pushNamed, hoặc push materrial
StatefulWidget / StatelessWidget
onInit: gọi sau khi widget đã build
onReady: gọi trước khi widget dã build 1 lần
initState(): setState
Widget Function

/** PUB **/
get{
GetPage: auto destroy controller when close page
GetController
GetView: one view = one controller
GetModel: json to dart
}
build_runner: generate file khi đang chạy app
custom_switch
flutter_switch
dio: call api
flutter_datetime_picker
loadmore: paginate
shared_preference: local storage
local_storage

/** PERFORMENT **/
const widget: widget won't rebuild when load page
widget function: should not use bc will be render when load page
stateful widget: should not use "setState" bc all widget will be render

Notification FCM token Firebase
Wrap response api trả về, handle error