$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $("#todo-item-input").val();
        $("#list_todo").prepend("<li> <button> Move me! </button>" + user_input + "</li>")
    })
);

$("#list_todo").on('click', "button", function() {
        // move from list_todo container to list_completed container
        $(this).html(" Add To To-Do ");
        var completedItem = $(this).parent()
        $("#list_completed").prepend(completedItem)
});

$("#list_completed").on('click', "button", function() {
        // move back from list_completed container to list_todo container
        $(this).html(" Move me! ");
        var completedItem = $(this).parent()
        $("#list_todo").prepend(completedItem)
});
