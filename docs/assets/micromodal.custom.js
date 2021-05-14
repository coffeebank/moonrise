document.addEventListener("DOMContentLoaded", function() {
  
  try {
    
    MicroModal.init({
      awaitCloseAnimation: true,// set to false, to remove close animation
      onShow: function(modal) {
        console.log("micromodal open");
      },
      onClose: function(modal) {
        console.log("micromodal close");
      }
    });
    
  } catch (e) {
    console.log("micromodal error: ", e);
  }
  
});
