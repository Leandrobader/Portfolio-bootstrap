document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    Swal.fire({
      title: "¡Mensaje enviado!",
      text: "Tu mensaje ha sido enviado. Seras redirigido al inicio",
      icon: "success",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        form.submit();
      }
    });
  });
});
