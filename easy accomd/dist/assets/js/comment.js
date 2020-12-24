function handleSubmit() {
    var form = $(this);
    var data = {
      "comment_author": form.find('#comment_author').val(),
      "email": form.find('#email').val(),
      "comment": form.find('#comment').val(),
      "comment_post_ID": form.find('#comment_post_ID').val()
    };
  
    postComment(data);
  
    return false;
}
  
function postComment(data) {
    // send the data to the server
}
function postSuccess(){

}
function displayComment(data){

}
function createComment(data){

}
function parseDisplayDate(date){
    
}
  