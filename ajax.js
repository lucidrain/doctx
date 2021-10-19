location.reload(); // load page ajax
async: false; // xử lý bất đồng bộ
/**  LARAVEL AJAX EXAMPLE **/
$(document).ready(function () {
  let origin = location.origin;
  $("#btn-create-register").click(function () {
    let name = $("#name").val();
    let email = $("#email").val();
    let password = $("#password1").val();
    let password1_confirmation = $("#password2").val();
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password1", password);
    formData.append("password1_confirmation", password1_confirmation);
    $.ajax({
      url: origin + "/users/register",
      method: "POST",
      data: formData,
      success: function (res) {
        console.log(res);
        let html = "<h3>Register success!</h3>";
        $("#message-register").html(html);
        $("#name").val("");
        $("#email").val("");
        $("#password1").val("");
        $("#password2").val("");
      },
      error: function (xhr, status, error) {
        $.each(xhr.responseJSON.errors, function (key, item) {
          $("#error-" + key).html(item);
          $('input[name="' + key + '"]');
        });
      },
    });
  });
});

/** YII AJAX EXAMPLE */
$document.ready(function () {
    processSupplierList = function (service_id) {
      $.ajax({
        type: "POST",
        url: "/service-channel/process-supplier-list",
        data: {
          service_id: service_id,
        },
        dataType: "json",
        async: false,
        success: function (result) {
          suppliers = result.data.data.data;
        },
      });
    };
})
/** YII CLICK ALL WITH TIMEOUT */
$('#cashout-all').click( function (){
    document.getElementById("cashout-all").style.display = "none";
    $.each($('.cashout-all'), function (i){
        let id = $(this).attr("id");
        setTimeout(function (){
            $('#'+id).trigger('click');
        }, 1000 *i  );
    });
})