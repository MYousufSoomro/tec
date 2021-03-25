window.document.getElementById('last_update').innerHTML = "Last updated 25-Mar-2021";

function downloadProfile(){
  window.location.href = "http://bit.ly/TECprofile";
}

$(document).ready(function () {
  $('#dtBasicExample').DataTable({
    "ordering": false // false to disable sorting (or any other option)
    });
  $('.dataTables_length').addClass('bs-select');
});
  

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

function profileNotAvailable(){
  Toast.fire({
    icon: 'info',
    title: 'Profile currently not available!'
  })
}