import { useToast } from "vue-toastification";

function toast() {
  const toast = useToast();

  const defaultOptions = {
    position: "bottom-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
  };

  //If you wanna customize specific toaster design or configure. Then we can do this way
  // const infoToast = (info) => {
  //     toast.info(info, {
  //         position: "bottom-left",
  //         timeout: 5000,
  //         closeOnClick: true,
  //         pauseOnFocusLoss: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         draggablePercent: 0.6,
  //         showCloseButtonOnHover: false,
  //         hideProgressBar: false,
  //         closeButton: "button",
  //         icon: true,
  //         rtl: false,
  //     });
  // };

  const successToast = (success) => {
    toast.success(success, defaultOptions);
  };

  const infoToast = (info) => {
    toast.info(info, defaultOptions);
  };

  const warningToast = (warning) => {
    toast.info(warning, defaultOptions);
  };

  const errorToast = (err) => {
    toast.error(err, defaultOptions);
  };

  return { successToast, infoToast, warningToast, errorToast };
}

export default toast;
